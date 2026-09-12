import { i as string, r as object } from "../_libs/zod.mjs";
import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sms-DSEuxiXv.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var schema = object({
	accountSid: string().min(8),
	authToken: string().min(8),
	from: string().min(8),
	to: string().min(8),
	body: string().min(1).max(1600)
});
var sendTwilioSms_createServerFn_handler = createServerRpc({
	id: "bf4f87b00fb5df32aa351bc31caf5d5865ead446229428219e29a678d7875fac",
	name: "sendTwilioSms",
	filename: "src/lib/ews/sms.ts"
}, (opts) => sendTwilioSms.__executeServer(opts));
var sendTwilioSms = createServerFn({ method: "POST" }).validator(schema).handler(sendTwilioSms_createServerFn_handler, async ({ data }) => {
	const auth = Buffer.from(`${data.accountSid}:${data.authToken}`).toString("base64");
	const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${encodeURIComponent(data.accountSid)}/Messages.json`, {
		method: "POST",
		headers: {
			Authorization: `Basic ${auth}`,
			"Content-Type": "application/x-www-form-urlencoded"
		},
		body: new URLSearchParams({
			To: data.to,
			From: data.from,
			Body: data.body
		})
	});
	const json = await res.json().catch(() => ({}));
	if (!res.ok) return {
		ok: false,
		error: json.message || json.error_message || `Twilio HTTP ${res.status}`
	};
	return {
		ok: true,
		sid: json.sid ?? ""
	};
});
//#endregion
export { sendTwilioSms_createServerFn_handler };
