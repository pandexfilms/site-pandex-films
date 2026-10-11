"use client";

import { useState } from "react";
import { CONTACT, SERVICES, WHATSAPP_MESSAGES, whatsappLink } from "@/lib/site";
import { Eyebrow, Section } from "./ui";

type Status = "idle" | "sending" | "sent" | "error";

const empty = { name: "", email: "", company: "", subject: "", message: "" };

const field =
  "w-full rounded-lg border border-line bg-ink-2 px-4 py-3 text-paper placeholder:text-mute/70 focus:border-paper focus:outline-none";

export function ContactForm() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<Status>("idle");

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setForm(empty);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contato" className="border-t border-line bg-ink">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <Eyebrow>Contato</Eyebrow>
          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">Qual é o seu próximo filme?</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/80">
            Conta o que você precisa. A gente responde com uma proposta.
          </p>
          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="text-mute">WhatsApp</dt>
              <dd className="mt-1">
                <a href={whatsappLink(WHATSAPP_MESSAGES.home)} target="_blank" rel="noopener noreferrer" className="text-base underline-offset-4 hover:underline">
                  (81) 99167-7447
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-mute">E-mail</dt>
              <dd className="mt-1 text-base">{CONTACT.email}</dd>
            </div>
            <div>
              <dt className="text-mute">Base</dt>
              <dd className="mt-1 text-base">{CONTACT.city} · atendemos também João Pessoa</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={submit} className="grid gap-4" noValidate={false}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm">
              Nome
              <input id="contato-nome" name="name" required value={form.name} onChange={update} className={field} autoComplete="name" />
            </label>
            <label className="grid gap-2 text-sm">
              Empresa ou evento
              <input id="contato-empresa" name="company" value={form.company} onChange={update} className={field} placeholder="Opcional" />
            </label>
          </div>
          <label className="grid gap-2 text-sm">
            E-mail
            <input id="contato-email" type="email" name="email" required value={form.email} onChange={update} className={field} autoComplete="email" />
          </label>
          <label className="grid gap-2 text-sm">
            Tipo de projeto
            <select id="contato-tipo" name="subject" required value={form.subject} onChange={update} className={field}>
              <option value="" disabled>
                Escolha uma opção
              </option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
              <option value="Outro">Outro</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm">
            Conta um pouco do projeto
            <textarea id="contato-mensagem" name="message" required rows={5} value={form.message} onChange={update} className={field} placeholder="Data, formato, onde o vídeo vai ser usado..." />
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-paper px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-glow disabled:opacity-60"
          >
            {status === "sending" ? "Enviando..." : "Enviar mensagem"}
          </button>

          <p role="status" className="min-h-6 text-sm">
            {status === "sent" && <span className="text-paper">Mensagem enviada. A gente responde em breve.</span>}
            {status === "error" && (
              <span className="text-glow">
                Não deu pra enviar agora. Tenta de novo ou chama no WhatsApp: (81) 99167-7447.
              </span>
            )}
          </p>
        </form>
      </div>
    </Section>
  );
}
