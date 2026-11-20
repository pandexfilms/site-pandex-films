import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT } from "@/lib/site";

// Escapa o que o visitante digitou antes de pôr no HTML do e-mail.
function esc(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Manda o contato pro CRM (vira oportunidade em "Lead"). Servidor-a-servidor, com segredo.
async function sendToCrm(data: Record<string, unknown>) {
  const secret = process.env.LEAD_SECRET;
  if (!secret) throw new Error("LEAD_SECRET não configurada");
  const res = await fetch(process.env.CRM_LEAD_URL || "https://app.pandexfilms.com.br/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-lead-secret": secret },
    body: JSON.stringify(data),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`CRM respondeu ${res.status}`);
}

async function sendEmail({ name, email, phone, company, subject, message }: Record<string, string>) {
  if (!process.env.RESEND_API_KEY) throw new Error("RESEND_API_KEY não configurada");
  const to = process.env.CONTACT_EMAIL || CONTACT.email;
  const resend = new Resend(process.env.RESEND_API_KEY);
    const row = (label: string, value: unknown) =>
      value ? `<p style="margin:8px 0"><strong>${label}:</strong> ${esc(value)}</p>` : "";

    const { error } = await resend.emails.send({
      from: "Site Pandex <onboarding@resend.dev>",
      to: [to],
      replyTo: String(email),
      subject: `Novo contato pelo site: ${esc(subject)}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0a0a0a;color:#ffffff">
          <h1 style="font-size:20px;margin:0 0 16px">Novo contato pelo site</h1>
          ${row("Nome", name)}
          ${row("E-mail", email)}
          ${row("WhatsApp", phone)}
          ${row("Empresa ou evento", company)}
          ${row("Tipo de projeto", subject)}
          <div style="margin-top:16px;padding:16px;background:#141416;border-radius:6px;line-height:1.6">
            ${esc(message).replace(/\n/g, "<br>")}
          </div>
          <p style="margin-top:24px;color:#a3a3a3;font-size:12px">Enviado em ${new Date().toLocaleString("pt-BR", { timeZone: "America/Recife" })}</p>
        </div>`,
    });

  if (error) throw new Error(`Resend: ${error.message}`);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const pick = (k: string, n = 4000) => (typeof body[k] === "string" ? body[k].trim().slice(0, n) : "");
    const data = {
      name: pick("name", 120), email: pick("email", 160), phone: pick("phone", 40),
      company: pick("company", 160), subject: pick("subject", 120), message: pick("message"),
    };

    // campo invisível: gente não vê, robô preenche. Finge que deu certo e descarta.
    if (pick("website")) return NextResponse.json({ ok: true });

    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json({ error: "Preencha nome, e-mail, tipo de projeto e mensagem." }, { status: 400 });
    }

    // e-mail e CRM em paralelo; basta um dos dois chegar pra não perder o contato
    const [mail, crm] = await Promise.allSettled([sendEmail(data), sendToCrm(data)]);
    if (mail.status === "rejected") console.error("Falha no e-mail:", mail.reason);
    if (crm.status === "rejected") console.error("Falha no CRM:", crm.reason);
    if (mail.status === "rejected" && crm.status === "rejected") {
      return NextResponse.json({ error: "Não foi possível enviar agora." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erro na rota de contato:", err);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}
