import { NextRequest, NextResponse } from "next/server";

type StrategyCallLead = {
  inquiryType: "strategy_call";
  name: string;
  email: string;
  company: string;
  website: string;
  revenue: string;
  platform: string;
  esp: string;
  notes: string;
  timeline: string;
  pageSource: string;
  pagePath: string;
  submissionId: string;
  submittedAt: string;
  ipAddress: string;
  userAgent: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const HTTP_PROTOCOL_REGEX = /^https?:\/\//i;
const MAX_TEXT_LENGTH = 2000;
const MIN_NOTES_LENGTH = 12;
const MIN_FORM_FILL_MS = 3000;

const DEFAULT_AIRTABLE_BASE_NAME = "Lifecycle Inbox CRM";
const DEFAULT_AIRTABLE_TABLE_NAME = "Inbound Leads - Live";
const DEFAULT_LEAD_SOURCE = "Website Contact Form";
const DEFAULT_STATUS = "New";
const DEFAULT_OWNER = "Pedro";

const allowedRevenue = new Set(["under-50k", "50k-200k", "200k-500k", "500k-1m", "1m-plus"]);
const allowedPlatform = new Set(["shopify", "shopify-plus", "other"]);
const allowedEsp = new Set(["klaviyo", "omnisend", "other"]);
const allowedTimeline = new Set(["this-week", "next-week", "two-weeks", "flexible"]);

const safeFieldValue = (formData: FormData, field: string) => {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
};

const truncate = (value: string, max = MAX_TEXT_LENGTH) => value.slice(0, max);

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const parseClientIp = (request: NextRequest) => {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (!forwardedFor) {
    return "unknown";
  }

  const [ip] = forwardedFor.split(",");
  return ip?.trim() || "unknown";
};

const parsePagePath = (pageSource: string) => {
  if (!pageSource) {
    return "/";
  }

  try {
    const url = new URL(pageSource);
    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return pageSource;
  }
};

const normalizeWebsiteInput = (value: string) => {
  const trimmed = value.trim();
  if (!trimmed) {
    return "";
  }

  return HTTP_PROTOCOL_REGEX.test(trimmed) ? trimmed : `https://${trimmed}`;
};

const isValidWebsiteUrl = (value: string) => {
  try {
    const parsed = new URL(value);
    return ["http:", "https:"].includes(parsed.protocol) && parsed.hostname.includes(".");
  } catch {
    return false;
  }
};

const parseStrategyCallLead = (request: NextRequest, formData: FormData) => {
  const inquiryType = safeFieldValue(formData, "inquiry_type");
  const honeypot = safeFieldValue(formData, "company_size");
  const formStartedAt = Number(safeFieldValue(formData, "form_started_at"));

  if (inquiryType !== "strategy_call") {
    return { error: "This endpoint only accepts strategy call submissions." } as const;
  }

  if (honeypot) {
    return { spam: true } as const;
  }

  if (Number.isFinite(formStartedAt) && Date.now() - formStartedAt < MIN_FORM_FILL_MS) {
    return { error: "Please take a moment to complete the form, then submit again." } as const;
  }

  const pageSource = truncate(safeFieldValue(formData, "page_source") || request.headers.get("referer") || "unknown");
  const normalizedWebsite = truncate(normalizeWebsiteInput(safeFieldValue(formData, "website")));

  const lead: StrategyCallLead = {
    inquiryType: "strategy_call",
    name: truncate(safeFieldValue(formData, "name")),
    email: truncate(safeFieldValue(formData, "email").toLowerCase()),
    company: truncate(safeFieldValue(formData, "company")),
    website: normalizedWebsite,
    revenue: safeFieldValue(formData, "revenue"),
    platform: safeFieldValue(formData, "platform"),
    esp: safeFieldValue(formData, "esp"),
    notes: truncate(safeFieldValue(formData, "notes")),
    timeline: safeFieldValue(formData, "timeline"),
    pageSource,
    pagePath: truncate(parsePagePath(pageSource), 500),
    submissionId: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
    ipAddress: parseClientIp(request),
    userAgent: truncate(request.headers.get("user-agent") || "unknown")
  };

  const errors: string[] = [];

  if (!lead.name || lead.name.length < 2) errors.push("Name is required.");
  if (!lead.email || !EMAIL_REGEX.test(lead.email)) errors.push("A valid email is required.");
  if (!lead.company || lead.company.length < 2) errors.push("Company is required.");
  if (!lead.notes || lead.notes.length < MIN_NOTES_LENGTH) errors.push("Please add more detail to focus for the call.");
  if (!lead.pageSource) errors.push("Page source is required.");
  if (!allowedRevenue.has(lead.revenue)) errors.push("Please select a monthly revenue range.");
  if (!allowedPlatform.has(lead.platform)) errors.push("Please select your platform.");
  if (!allowedEsp.has(lead.esp)) errors.push("Please select your ESP.");
  if (!allowedTimeline.has(lead.timeline)) errors.push("Please select preferred timing.");

  if (lead.website && !isValidWebsiteUrl(lead.website)) {
    errors.push("Website must be a valid URL.");
  }

  if (errors.length > 0) {
    return { error: errors[0] } as const;
  }

  return { lead } as const;
};

const requireEnv = (name: string) => {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
};

const resolveAirtableBaseId = async (airtableApiKey: string) => {
  const explicitBaseId = process.env.AIRTABLE_BASE_ID?.trim();
  if (explicitBaseId) {
    return explicitBaseId;
  }

  const baseName = process.env.AIRTABLE_BASE_NAME?.trim() || DEFAULT_AIRTABLE_BASE_NAME;
  const response = await fetch("https://api.airtable.com/v0/meta/bases", {
    headers: {
      Authorization: `Bearer ${airtableApiKey}`
    }
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Airtable metadata error (${response.status}): ${body}`);
  }

  const payload = (await response.json()) as { bases?: Array<{ id: string; name: string }> };
  const matchedBase = payload.bases?.find((base) => base.name === baseName);
  if (!matchedBase) {
    throw new Error(`Airtable base not found by name: ${baseName}`);
  }

  return matchedBase.id;
};

const storeInAirtable = async (lead: StrategyCallLead, notificationSent: boolean) => {
  const airtableApiKey = requireEnv("AIRTABLE_API_KEY");
  const airtableBaseId = await resolveAirtableBaseId(airtableApiKey);
  const airtableTableName = process.env.AIRTABLE_TABLE_NAME?.trim() || DEFAULT_AIRTABLE_TABLE_NAME;

  const internalNotes = `IP: ${lead.ipAddress} | User Agent: ${lead.userAgent} | Source URL: ${lead.pageSource}`;

  const response = await fetch(
    `https://api.airtable.com/v0/${encodeURIComponent(airtableBaseId)}/${encodeURIComponent(airtableTableName)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${airtableApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        typecast: true,
        records: [
          {
            fields: {
              "Full Name": lead.name,
              "Created At": lead.submittedAt,
              Email: lead.email,
              Company: lead.company,
              Website: lead.website || "",
              "Monthly Revenue Range": lead.revenue,
              Platform: lead.platform,
              ESP: lead.esp,
              "What should we focus on?": lead.notes,
              "Preferred Timing": lead.timeline,
              "Lead Source": DEFAULT_LEAD_SOURCE,
              Status: DEFAULT_STATUS,
              Owner: DEFAULT_OWNER,
              Notes: internalNotes,
              "Submission ID": lead.submissionId,
              "Page Path": lead.pagePath,
              "Notification Sent": notificationSent
            }
          }
        ]
      })
    }
  );

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Airtable write error (${response.status}): ${body}`);
  }
};

const sendResendNotification = async (lead: StrategyCallLead) => {
  const resendApiKey = requireEnv("RESEND_API_KEY");
  const resendFromEmail = requireEnv("RESEND_FROM_EMAIL");
  const notificationEmail = process.env.LEAD_NOTIFICATION_EMAIL?.trim() || "hello@lifecycleinbox.com";

  const textLines = [
    "New strategy call submission",
    `Submission ID: ${lead.submissionId}`,
    `Created At: ${lead.submittedAt}`,
    `Full Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Company: ${lead.company}`,
    `Website: ${lead.website || "(not provided)"}`,
    `Monthly Revenue Range: ${lead.revenue}`,
    `Platform: ${lead.platform}`,
    `ESP: ${lead.esp}`,
    `What should we focus on?: ${lead.notes}`,
    `Preferred Timing: ${lead.timeline}`,
    `Lead Source: ${DEFAULT_LEAD_SOURCE}`,
    `Status: ${DEFAULT_STATUS}`,
    `Owner: ${DEFAULT_OWNER}`,
    `Page Path: ${lead.pagePath}`,
    `Page Source: ${lead.pageSource}`,
    `Notes: IP ${lead.ipAddress} | UA ${lead.userAgent}`
  ];

  const rows = [
    ["Submission ID", lead.submissionId],
    ["Created At", lead.submittedAt],
    ["Full Name", lead.name],
    ["Email", lead.email],
    ["Company", lead.company],
    ["Website", lead.website || "(not provided)"],
    ["Monthly Revenue Range", lead.revenue],
    ["Platform", lead.platform],
    ["ESP", lead.esp],
    ["What should we focus on?", lead.notes],
    ["Preferred Timing", lead.timeline],
    ["Lead Source", DEFAULT_LEAD_SOURCE],
    ["Status", DEFAULT_STATUS],
    ["Owner", DEFAULT_OWNER],
    ["Page Path", lead.pagePath],
    ["Page Source", lead.pageSource],
    ["Notes", `IP ${lead.ipAddress} | UA ${lead.userAgent}`]
  ];

  const html = `
    <h2>New strategy call submission</h2>
    <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
      <tbody>
        ${rows
          .map(
            ([label, value]) =>
              `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`
          )
          .join("")}
      </tbody>
    </table>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: resendFromEmail,
      to: [notificationEmail],
      subject: `New Website Contact Lead: ${lead.company} (${lead.name})`,
      reply_to: lead.email,
      text: textLines.join("\n"),
      html
    })
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Resend error (${response.status}): ${body}`);
  }
};

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const parsed = parseStrategyCallLead(request, formData);

  if ("spam" in parsed) {
    return NextResponse.json({ ok: true, message: "Submission received." });
  }

  if ("error" in parsed) {
    return NextResponse.json({ ok: false, error: parsed.error }, { status: 400 });
  }

  const { lead } = parsed;

  try {
    await sendResendNotification(lead);
    await storeInAirtable(lead, true);

    return NextResponse.json({
      ok: true,
      message: "Request received. We will reply shortly with scheduling options.",
      submissionId: lead.submissionId
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    const failureSource =
      errorMessage.includes("RESEND_") || errorMessage.includes("Resend")
        ? "Resend"
        : errorMessage.includes("AIRTABLE_") || errorMessage.includes("Airtable")
          ? "Airtable"
          : "Form handling";
    const failureCode = errorMessage.includes("Missing environment variable: RESEND_API_KEY")
      ? "RESEND_API_KEY_MISSING"
      : errorMessage.includes("Missing environment variable: RESEND_FROM_EMAIL")
        ? "RESEND_FROM_EMAIL_MISSING"
        : errorMessage.includes("Missing environment variable: AIRTABLE_API_KEY")
          ? "AIRTABLE_API_KEY_MISSING"
          : errorMessage.includes("Airtable base not found by name")
            ? "AIRTABLE_BASE_NOT_FOUND"
            : errorMessage.includes("Airtable metadata error")
              ? "AIRTABLE_METADATA_ERROR"
              : errorMessage.includes("Airtable write error")
                ? "AIRTABLE_WRITE_ERROR"
                : errorMessage.includes("Resend error")
                  ? "RESEND_SEND_ERROR"
                  : "UNKNOWN_ERROR";

    console.error("Lead submission failure", {
      submissionId: lead.submissionId,
      submittedAt: lead.submittedAt,
      pagePath: lead.pagePath,
      email: lead.email,
      source: failureSource,
      code: failureCode,
      error: errorMessage
    });

    return NextResponse.json(
      {
        ok: false,
        source: failureSource,
        code: failureCode,
        error:
          "We could not complete your request. Please try again in a minute or email hello@lifecycleinbox.com."
      },
      { status: 502 }
    );
  }
}
