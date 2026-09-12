import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  accountSid: z.string().min(8),
  authToken: z.string().min(8),
  from: z.string().min(8),
  to: z.string().min(8),
  body: z.string().min(1).max(1600),
});

export const sendTwilioSms = createServerFn({ method: "POST" })
  .validator(schema)
  .handler(async ({ data }) => {
    const auth = Buffer.from(`${data.accountSid}:${data.authToken}`).toString("base64");
    const res = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${encodeURIComponent(data.accountSid)}/Messages.json`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          To: data.to,
          From: data.from,
          Body: data.body,
        }),
      },
    );
    const json = (await res.json().catch(() => ({}))) as {
      sid?: string;
      message?: string;
      error_message?: string;
    };
    if (!res.ok) {
      return {
        ok: false as const,
        error: json.message || json.error_message || `Twilio HTTP ${res.status}`,
      };
    }
    return { ok: true as const, sid: json.sid ?? "" };
  });
