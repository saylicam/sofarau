import { NextResponse } from "next/server";

type ContactPayload = {
  company?: unknown;
  name?: unknown;
  email?: unknown;
  vat?: unknown;
  phone?: unknown;
  message?: unknown;
};

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";

  return value
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+=/gi, "")
    .trim();
}

function validateVAT(vat: string): boolean {
  const cleaned = vat.replace(/\s/g, "").toUpperCase();
  const belgianVATPattern = /^BE[0-9]{10}$/;

  if (!belgianVATPattern.test(cleaned)) {
    return false;
  }

  const digits = cleaned.slice(2);
  const checkDigits = parseInt(digits.slice(0, 2), 10);
  const baseNumber = parseInt(digits.slice(2), 10);
  const remainder = (97 - (baseNumber % 97)) % 97;

  return remainder === checkDigits;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Payload invalide" }, { status: 400 });
  }

  const contact = {
    company: sanitize(payload.company),
    name: sanitize(payload.name),
    email: sanitize(payload.email),
    vat: sanitize(payload.vat).toUpperCase(),
    phone: sanitize(payload.phone),
    message: sanitize(payload.message),
  };

  if (
    !contact.company ||
    !contact.name ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email) ||
    !validateVAT(contact.vat) ||
    contact.message.length < 20
  ) {
    return NextResponse.json({ error: "Champs invalides" }, { status: 400 });
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Webhook de contact non configuré" },
      { status: 503 },
    );
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...contact,
      source: "sofarau-b2b-site",
      submittedAt: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Transmission du formulaire impossible" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
