import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { districtsForState, findDistrict } from "@/lib/ews/districts";
import { useEwsStore } from "@/lib/ews/store";
import {
  INCIDENT_CATEGORIES,
  NER_STATES,
  type HazardPoint,
  type Incident,
  type IncidentCategory,
  type NerState,
  type ReporterRole,
  type Severity,
} from "@/lib/ews/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectNative } from "@/components/ui/select-native";
import { Textarea } from "@/components/ui/textarea";
import { GisMap } from "./gis-map";
import { Panel } from "./panel";

export function IncidentTab({ points }: { points: HazardPoint[] }) {
  const incidents = useEwsStore((s) => s.incidents);
  const addIncident = useEwsStore((s) => s.addIncident);
  const setIncidentStatus = useEwsStore((s) => s.setIncidentStatus);
  const selectedIncidentId = useEwsStore((s) => s.selectedIncidentId);
  const setSelectedIncidentId = useEwsStore((s) => s.setSelectedIncidentId);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <div className="grid min-h-0 gap-3 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)]">
      <IncidentForm onCreate={addIncident} />
      <div className="flex min-h-0 flex-col gap-3">
        <Panel title="Community map">
          <div className="h-[min(36vh,360px)] min-h-56 overflow-hidden rounded-md bg-bg">
            {ready ? (
              <GisMap
                points={points}
                incidents={incidents}
                showIncidents
                selectedId={selectedIncidentId}
                onSelect={(id) => {
                  if (id.startsWith("inc:")) setSelectedIncidentId(id.slice(4));
                }}
              />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-muted">
                Loading community map…
              </div>
            )}
          </div>
        </Panel>
        <Panel title="SDMA verification matrix">
          <div className="overflow-x-auto">
            <table className="w-full min-w-xl text-left text-sm">
              <thead className="text-xs uppercase tracking-wider text-muted">
                <tr className="border-b border-border">
                  <th className="py-2 pr-3 font-medium">Place</th>
                  <th className="py-2 pr-3 font-medium">Category</th>
                  <th className="py-2 pr-3 font-medium">Sev.</th>
                  <th className="py-2 pr-3 font-medium">Status</th>
                  <th className="py-2 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {incidents.map((inc) => (
                  <tr key={inc.id} className="border-b border-border/70 align-top">
                    <td className="py-2.5 pr-3">
                      <p className="text-fg">{inc.district}</p>
                      <p className="text-xs text-muted">{inc.state}</p>
                    </td>
                    <td className="py-2.5 pr-3 text-muted">{inc.category}</td>
                    <td className="py-2.5 pr-3">
                      <Badge
                        tone={inc.severity === "high" ? "danger" : inc.severity === "medium" ? "warn" : "ok"}
                      >
                        {inc.severity}
                      </Badge>
                    </td>
                    <td className="py-2.5 pr-3">
                      <Badge
                        tone={
                          inc.status === "verified" ? "ok" : inc.status === "dismissed" ? "default" : "warn"
                        }
                      >
                        {inc.status === "verified"
                          ? "Ground-truth"
                          : inc.status === "dismissed"
                            ? "Dismissed"
                            : "Pending"}
                      </Badge>
                    </td>
                    <td className="py-2.5">
                      <div className="flex flex-wrap gap-1.5">
                        <Button
                          size="sm"
                          variant="outline"
                          disabled={inc.status === "verified"}
                          onClick={() => setIncidentStatus(inc.id, "verified")}
                        >
                          Verify & escalate
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          disabled={inc.status === "dismissed"}
                          onClick={() => setIncidentStatus(inc.id, "dismissed")}
                        >
                          False alarm
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </div>
    </div>
  );
}

function IncidentForm({ onCreate }: { onCreate: (i: Incident) => void }) {
  const [state, setState] = useState<NerState>("Sikkim");
  const districts = districtsForState(state);
  const [district, setDistrict] = useState(districts[0]?.name ?? "Gangtok");
  const [category, setCategory] = useState<IncidentCategory>(INCIDENT_CATEGORIES[0]!);
  const [severity, setSeverity] = useState<Severity>("medium");
  const [lat, setLat] = useState(String(districts[0]?.lat ?? 27.33));
  const [lng, setLng] = useState(String(districts[0]?.lng ?? 88.6));
  const [notes, setNotes] = useState("");
  const [role, setRole] = useState<ReporterRole>("citizen");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState<string | undefined>();
  const [msg, setMsg] = useState<string | null>(null);

  function applyDistrict(st: NerState, name: string) {
    const d = findDistrict(st, name);
    if (!d) return;
    setDistrict(name);
    setLat(d.lat.toFixed(4));
    setLng(d.lng.toFixed(4));
  }

  function onState(st: NerState) {
    setState(st);
    const list = districtsForState(st);
    applyDistrict(st, list[0]?.name ?? "");
  }

  function locate() {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((pos) => {
      setLat(pos.coords.latitude.toFixed(4));
      setLng(pos.coords.longitude.toFixed(4));
    });
  }

  function onFile(file: File | undefined) {
    if (!file) return;
    const ok =
      ["image/jpeg", "image/png", "image/jpg"].includes(file.type) || /\.(jpe?g|png)$/i.test(file.name);
    if (!ok) {
      setMsg("Photos must be JPG or PNG.");
      return;
    }
    if (file.size > 1.6e6) {
      setMsg("Keep photos under 1.5 MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setPhoto(String(reader.result));
    reader.readAsDataURL(file);
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    const latN = Number(lat);
    const lngN = Number(lng);
    if (!Number.isFinite(latN) || !Number.isFinite(lngN)) {
      setMsg("Enter valid coordinates.");
      return;
    }
    const incident: Incident = {
      id: `inc-${Date.now()}`,
      category,
      state,
      district,
      lat: latN,
      lng: lngN,
      severity,
      notes: notes.trim(),
      reporterRole: role,
      reporterName: name.trim(),
      photoDataUrl: photo,
      status: "pending",
      createdAt: new Date().toISOString(),
    };
    onCreate(incident);
    setNotes("");
    setPhoto(undefined);
    setMsg(
      severity === "high" || category.startsWith("Illegal Construction")
        ? "Logged. Nearest grid cells were up-weighted in the forest."
        : "Logged and queued for SDMA review.",
    );
  }

  return (
    <Panel title="Field observation">
      <form className="space-y-3" onSubmit={submit}>
        <Field label="Incident category">
          <SelectNative value={category} onChange={(e) => setCategory(e.target.value as IncidentCategory)}>
            {INCIDENT_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </SelectNative>
        </Field>
        <div className="grid grid-cols-2 gap-2">
          <Field label="State">
            <SelectNative value={state} onChange={(e) => onState(e.target.value as NerState)}>
              {NER_STATES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </SelectNative>
          </Field>
          <Field label="District">
            <SelectNative value={district} onChange={(e) => applyDistrict(state, e.target.value)}>
              {districts.map((d) => (
                <option key={d.name} value={d.name}>
                  {d.name}
                </option>
              ))}
            </SelectNative>
          </Field>
        </div>
        <div className="grid grid-cols-[1fr_1fr_auto] items-end gap-2">
          <Field label="Latitude">
            <Input value={lat} onChange={(e) => setLat(e.target.value)} inputMode="decimal" />
          </Field>
          <Field label="Longitude">
            <Input value={lng} onChange={(e) => setLng(e.target.value)} inputMode="decimal" />
          </Field>
          <Button type="button" variant="outline" onClick={locate}>
            GPS
          </Button>
        </div>
        <Field label="Severity">
          <SelectNative value={severity} onChange={(e) => setSeverity(e.target.value as Severity)}>
            <option value="low">Low — watch</option>
            <option value="medium">Medium — impending danger</option>
            <option value="high">High — immediate threat</option>
          </SelectNative>
        </Field>
        <Field label="Site photo (JPG / PNG)">
          <Input
            type="file"
            accept=".jpg,.jpeg,.png,image/jpeg,image/png"
            onChange={(e) => onFile(e.target.files?.[0])}
          />
          {photo ? (
            <img src={photo} alt="Site condition preview" className="mt-2 h-24 rounded-sm object-cover" />
          ) : null}
        </Field>
        <Field label="Field notes">
          <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} />
        </Field>
        <div className="grid grid-cols-2 gap-2">
          <Field label="Reporter role">
            <SelectNative value={role} onChange={(e) => setRole(e.target.value as ReporterRole)}>
              <option value="citizen">Citizen</option>
              <option value="bro">BRO Engineer</option>
              <option value="sdma">SDMA Official</option>
            </SelectNative>
          </Field>
          <Field label="Name (optional)">
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Field>
        </div>
        <Button type="submit" variant="invert" className="w-full">
          Submit field observation
        </Button>
        {msg ? <p className="text-sm text-accent">{msg}</p> : null}
      </form>
    </Panel>
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
