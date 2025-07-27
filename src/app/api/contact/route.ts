import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Validação básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos os campos obrigatórios devem ser preenchidos' },
        { status: 400 }
      );
    }

    // Verificar se a chave da API está configurada
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY não está configurada');
      return NextResponse.json(
        { error: 'Configuração de e-mail não encontrada' },
        { status: 500 }
      );
    }

    // E-mail de destino (substitua pelo seu e-mail)
    const contactEmail = process.env.CONTACT_EMAIL || 'seu-email@exemplo.com';

    // Enviar e-mail usando Resend com domínio de sandbox
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Domínio de sandbox do Resend
      to: [contactEmail],
      subject: `Nova mensagem de contato - ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #000000; color: #ffffff;">
          <h1 style="color: #ffffff; border-bottom: 2px solid #ffffff; padding-bottom: 10px;">
            Nova Mensagem de Contato
          </h1>
          
          <div style="margin: 20px 0;">
            <h2 style="color: #ffffff; margin-bottom: 10px;">Detalhes do Contato:</h2>
            
            <div style="margin: 10px 0;">
              <strong style="color: #ffffff;">Nome:</strong>
              <span style="color: #cccccc;"> ${name}</span>
            </div>
            
            <div style="margin: 10px 0;">
              <strong style="color: #ffffff;">E-mail:</strong>
              <span style="color: #cccccc;"> ${email}</span>
            </div>
            
            ${phone ? `
            <div style="margin: 10px 0;">
              <strong style="color: #ffffff;">Telefone:</strong>
              <span style="color: #cccccc;"> ${phone}</span>
            </div>
            ` : ''}
            
            <div style="margin: 10px 0;">
              <strong style="color: #ffffff;">Assunto:</strong>
              <span style="color: #cccccc;"> ${subject}</span>
            </div>
          </div>
          
          <div style="margin: 20px 0;">
            <h2 style="color: #ffffff; margin-bottom: 10px;">Mensagem:</h2>
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 5px; color: #cccccc; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #333333; color: #999999; font-size: 12px;">
            <p>Esta mensagem foi enviada através do formulário de contato do site PandeX Films.</p>
            <p>Data: ${new Date().toLocaleString('pt-BR')}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Erro ao enviar e-mail:', error);
      return NextResponse.json(
        { error: 'Erro ao enviar e-mail. Tente novamente.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'E-mail enviado com sucesso!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro na API:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
} 