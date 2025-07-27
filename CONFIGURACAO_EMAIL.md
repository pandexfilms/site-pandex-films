# Configuração do Sistema de E-mails

## Passo a Passo para Configurar o Resend

### 1. Criar conta no Resend
1. Acesse [https://resend.com](https://resend.com)
2. Crie uma conta gratuita
3. **Não é necessário verificar um domínio** - usaremos o domínio de sandbox

### 2. Obter a Chave da API
1. No dashboard do Resend, vá para "API Keys"
2. Clique em "Create API Key"
3. Copie a chave gerada (começa com `re_`)

### 3. Configurar as Variáveis de Ambiente
1. Crie um arquivo `.env.local` na raiz do projeto
2. Adicione as seguintes variáveis:

```env
# Resend API Key
RESEND_API_KEY=re_sua_chave_aqui

# E-mail onde receberá as mensagens
CONTACT_EMAIL=seu-email@exemplo.com
```

### 4. Testar o Sistema
1. Execute o servidor: `npm run dev`
2. Acesse o formulário de contato
3. Preencha e envie uma mensagem
4. Verifique se o e-mail foi recebido

## Estrutura do E-mail

O e-mail enviado terá:
- **Assunto**: "Nova mensagem de contato - [assunto]"
- **Remetente**: onboarding@resend.dev (domínio de sandbox)
- **Destinatário**: O e-mail configurado em CONTACT_EMAIL
- **Conteúdo**: Dados do formulário formatados em HTML com tema escuro

## Domínio de Sandbox

O sistema está configurado para usar o domínio de sandbox do Resend (`onboarding@resend.dev`). Isso significa:
- ✅ **Não precisa configurar domínio personalizado**
- ✅ **Funciona imediatamente após obter a chave da API**
- ✅ **Ideal para testes e desenvolvimento**
- ⚠️ **E-mails podem ir para spam** (verifique a pasta de spam)

## Configurar Domínio Personalizado (Opcional)

Se quiser usar um domínio personalizado no futuro:
1. No Resend, vá para "Domains"
2. Adicione seu domínio
3. Configure os registros DNS conforme instruções
4. Atualize o campo `from` na API route com seu domínio

## Solução de Problemas

### Erro: "Configuração de e-mail não encontrada"
- Verifique se o arquivo `.env.local` existe
- Confirme se a variável `RESEND_API_KEY` está configurada

### Erro: "Erro ao enviar e-mail"
- Verifique se a chave da API está correta
- Confirme se o e-mail de destino está correto
- Verifique os logs do servidor para mais detalhes

### E-mails não chegando
- **Verifique a pasta de spam** (comum com domínio de sandbox)
- Confirme se o e-mail de destino está correto
- Teste com um e-mail diferente

## Limites do Plano Gratuito

O plano gratuito do Resend inclui:
- 3.000 e-mails por mês
- Domínio de sandbox incluído
- Suporte por e-mail

Para mais informações, consulte: [https://resend.com/pricing](https://resend.com/pricing) 