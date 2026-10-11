import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Escapa o que o visitante digitou antes de pôr no HTML do e-mail.
function esc(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Preencha nome, e-mail, tipo de projeto e mensagem." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
      console.error("RESEND_API_KEY ou CONTACT_EMAIL não configurados");
      return NextResponse.json({ error: "Envio de e-mail não configurado." }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const row = (label: string, value: unknown) =>
      value ? `<p style="margin:8px 0"><strong>${label}:</strong> ${esc(value)}</p>` : "";

    const { error } = await resend.emails.send({
      from: "Site Pandex <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL],
      replyTo: String(email),
      subject: `Novo contato pelo site: ${esc(subject)}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0b0b0c;color:#f5f4f0">
          <h1 style="font-size:20px;margin:0 0 16px">Novo contato pelo site</h1>
          ${row("Nome", name)}
          ${row("E-mail", email)}
          ${row("Empresa ou evento", company)}
          ${row("Tipo de projeto", subject)}
          <div style="margin-top:16px;padding:16px;background:#141416;border-radius:6px;line-height:1.6">
            ${esc(message).replace(/\n/g, "<br>")}
          </div>
          <p style="margin-top:24px;color:#9b9ba3;font-size:12px">Enviado em ${new Date().toLocaleString("pt-BR", { timeZone: "America/Recife" })}</p>
        </div>`,
    });

    if (error) {
      console.error("Erro do Resend:", error);
      return NextResponse.json({ error: "Não foi possível enviar agora." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erro na rota de contato:", err);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}
