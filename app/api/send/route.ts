import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, company, phone, service, message } = await request.json()

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Nome, email e mensagem são obrigatórios" }, { status: 400 })
    }

    const serviceLabels: Record<string, string> = {
      "video-institucional": "Video Institucional",
      "campanha-publicitaria": "Campanha Publicitaria",
      "documentario": "Documentario Corporativo",
      "cobertura-evento": "Cobertura de Evento",
      "video-redes-sociais": "Video para Redes Sociais",
      "outro": "Outro",
    }

    // Quando verificar seu domínio, altere para: to: ["contato@pandexfilms.com"]
    const { data, error } = await resend.emails.send({
      from: "Pandex Films <onboarding@resend.dev>",
      to: ["pandexfilms@gmail.com"],
      replyTo: email,
      subject: `Nova mensagem de ${name} - Pandex Films`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">
            Nova Solicitação de Orçamento
          </h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ""}
            ${phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : ""}
            ${service ? `<p><strong>Tipo de Serviço:</strong> ${serviceLabels[service] || service}</p>` : ""}
          </div>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            <h3 style="margin-top: 0;">Mensagem:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>Esta mensagem foi enviada através do formulário de contato do site Pandex Films.</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error.message)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
