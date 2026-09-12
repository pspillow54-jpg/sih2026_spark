import { type ReactNode } from "react";
import { useEwsStore } from "@/lib/ews/store";
import { sendTwilioSms } from "@/lib/ews/sms";
import type { HazardPoint, SmsDispatch, ThreatLevel } from "@/lib/ews/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Panel } from "./panel";

function parseNumbers(raw: string) {
  return raw
    .split(/[\n,;]+/)
    .map((s) => s.trim())
    .filter((s) => /^\+?\d{8,15}$/.test(s.replace(/[\s-]/g, "")))
    .map((s) => s.replace(/[\s-]/g, ""));
}

export function buildAlertBody(threat: ThreatLevel, high: HazardPoint[]) {
  const top = high
    .slice()
    .sort((a, b) => b.proba - a.proba)
    .slice(0, 4);
  const cells =
    top.length === 0
      ? "No class-1 cells currently."
      : top.map((p) => `${p.district} (${p.state}, P=${p.proba.toFixed(2)})`).join("; ");
  return [
    "NER LANDSLIDE EWS / MDoNER-SIH26001",
    `STATUS: ${threat}`,
    `HIGH-RISK CELLS: ${cells}`,
    "Avoid marked NH corridors. Follow local SDMA / BRO instructions. Do not travel cut-slopes after intense rain.",
  ].join("\n");
}

export function SmsTab({ points, threat }: { points: HazardPoint[]; threat: ThreatLevel }) {
  const sid = useEwsStore((s) => s.smsSid);
  const token = useEwsStore((s) => s.smsToken);
  const from = useEwsStore((s) => s.smsFrom);
  const contacts = useEwsStore((s) => s.smsContacts);
  const log = useEwsStore((s) => s.smsLog);
  const busy = useEwsStore((s) => s.smsBusy);
  const setSmsSid = useEwsStore((s) => s.setSmsSid);
  const setSmsToken = useEwsStore((s) => s.setSmsToken);
  const setSmsFrom = useEwsStore((s) => s.setSmsFrom);
  const setSmsContacts = useEwsStore((s) => s.setSmsContacts);
  const pushSmsLog = useEwsStore((s) => s.pushSmsLog);
  const setSmsBusy = useEwsStore((s) => s.setSmsBusy);

  const high = points.filter((p) => p.hazard === 1);
  const body = buildAlertBody(threat, high);
  const numbers = parseNumbers(contacts);
  const liveReady = sid.length > 8 && token.length > 8 && from.length > 8;

  async function broadcast() {
    if (!numbers.length) return;
    setSmsBusy(true);
    const rows: SmsDispatch[] = [];
    for (const to of numbers) {
      const id = `sms-${Date.now()}-${to}`;
      if (!liveReady) {
        rows.push({
          id,
          to,
          body,
          channel: "mock",
          status: "sent",
          at: new Date().toISOString(),
        });
        continue;
      }
      try {
        const res = await sendTwilioSms({
          data: { accountSid: sid, authToken: token, from, to, body },
        });
        rows.push({
          id,
          to,
          body,
          channel: "twilio",
          status: res.ok ? "sent" : "failed",
          error: res.ok ? undefined : res.error,
          at: new Date().toISOString(),
        });
      } catch (err) {
        rows.push({
          id,
          to,
          body,
          channel: "twilio",
          status: "failed",
          error: err instanceof Error ? err.message : "Twilio call failed",
          at: new Date().toISOString(),
        });
      }
    }
    pushSmsLog(rows);
    setSmsBusy(false);
  }

  return (
    <div className="grid min-h-0 gap-3 lg:grid-cols-2">
      <div className="flex flex-col gap-3">
        <Panel title="Twilio setup">
          <div className="space-y-3">
            <Field label="Account SID">
              <Input
                value={sid}
                onChange={(e) => setSmsSid(e.target.value)}
                autoComplete="off"
                placeholder="ACxxxxxxxx"
              />
            </Field>
            <Field label="Auth token">
              <Input
                type="password"
                value={token}
                onChange={(e) => setSmsToken(e.target.value)}
                autoComplete="off"
              />
            </Field>
            <Field label="Sender number">
              <Input
                value={from}
                onChange={(e) => setSmsFrom(e.target.value)}
                placeholder="+1234567890"
              />
            </Field>
            <p className="text-xs text-muted">
              Leave blank to preview a formatted geofenced alert without sending. With credentials, each
              number is posted to the Twilio Messages API.
            </p>
          </div>
        </Panel>
        <Panel title="Target mobile directory">
          <Field label="Numbers (one per line)">
            <Textarea
              value={contacts}
              onChange={(e) => setSmsContacts(e.target.value)}
              rows={6}
              className="font-mono text-sm"
            />
          </Field>
          <p className="mt-2 text-xs text-muted">
            {numbers.length} valid target{numbers.length === 1 ? "" : "s"}
          </p>
        </Panel>
      </div>
      <div className="flex flex-col gap-3">
        <Panel
          title="Mass dispatch"
          action={<Badge tone={liveReady ? "ok" : "default"}>{liveReady ? "Twilio live" : "Mock"}</Badge>}
        >
          <pre className="max-h-56 overflow-auto rounded-md bg-surface-2 p-3 font-mono text-xs leading-relaxed text-fg whitespace-pre-wrap">
            {body}
          </pre>
          <Button
            className="mt-3 w-full"
            variant="invert"
            disabled={busy || numbers.length === 0}
            onClick={() => void broadcast()}
          >
            {busy ? "Dispatching…" : "Broadcast mass geofenced SMS"}
          </Button>
        </Panel>
        <Panel title="Dispatch log">
          {log.length === 0 ? (
            <p className="text-sm text-muted">No messages yet. Broadcast to see the exact payload per number.</p>
          ) : (
            <ul className="space-y-3">
              {log.map((row) => (
                <li key={row.id} className="rounded-md bg-surface-2 px-3 py-2">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-mono text-sm">{row.to}</p>
                    <Badge tone={row.status === "sent" ? "ok" : "danger"}>
                      {row.channel} · {row.status}
                    </Badge>
                  </div>
                  <pre className="mt-2 whitespace-pre-wrap font-mono text-[11px] text-muted">{row.body}</pre>
                  {row.error ? <p className="mt-1 text-xs text-danger">{row.error}</p> : null}
                </li>
              ))}
            </ul>
          )}
        </Panel>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      {children}
    </div>
  );
}
