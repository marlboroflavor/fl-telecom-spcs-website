import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.json();
  const required = ["name", "phone", "email", "message"];
  const missing = required.filter((field) => !payload[field]);

  if (missing.length > 0) {
    return NextResponse.json({ ok: false, missing }, { status: 400 });
  }

  const lead = {
    ...payload,
    submittedAt: new Date().toISOString(),
    recipient: "contracts@fltelecomspcs.com"
  };

  if (process.env.LEAD_WEBHOOK_URL) {
    const response = await fetch(process.env.LEAD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead)
    });

    if (!response.ok) {
      return NextResponse.json({ ok: false }, { status: 502 });
    }
  } else {
    console.info("FL TELECOM SPCS lead submission", lead);
  }

  return NextResponse.json({ ok: true });
}
