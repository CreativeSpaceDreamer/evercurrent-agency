import { NextResponse } from "next/server";

const REQUIRED_FIELDS = ["intent", "fullName", "email", "company"] as const;

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData) as Record<string, string>;

  const missing = REQUIRED_FIELDS.filter((field) => !payload[field]?.trim());
  if (missing.length > 0) {
    return NextResponse.json(
      {
        ok: false,
        error: `Missing required fields: ${missing.join(", ")}`
      },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.ZAPIER_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn("Zapier webhook URL is not configured. Set ZAPIER_WEBHOOK_URL in your environment.");
    return NextResponse.json(
      {
        ok: false,
        error: "Lead capture offline"
      },
      { status: 503 }
    );
  }

  const leadPayload = {
    intent: payload.intent,
    fullName: payload.fullName,
    email: payload.email,
    company: payload.company,
    notes: payload.notes ?? "",
    submittedAt: new Date().toISOString()
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(leadPayload)
    });

    if (!response.ok) {
      console.error("Zapier webhook responded with a non-OK status", {
        status: response.status,
        statusText: response.statusText
      });
      return NextResponse.json(
        {
          ok: false,
          error: "Lead service temporarily unavailable"
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Failed to post lead to Zapier", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Lead service temporarily unavailable"
      },
      { status: 502 }
    );
  }
}
