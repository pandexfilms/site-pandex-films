import Image from "next/image";
import Link from "next/link";
import { CONTACT, SERVICES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-14 text-sm">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <Image src="/logo-mark.png" alt="" width={48} height={48} />
          <p className="mt-4 font-bold tracking-[0.35em]">
            PANDEX FILMS<span className="text-glow">.</span>
          </p>
          <p className="mt-4 max-w-xs leading-relaxed text-mute">A emoção não acaba. Ela vira filme.</p>
        </div>
        <div>
          <p className="text-mute">O que fazemos</p>
          <ul className="mt-4 space-y-2">
            {SERVICES.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-mute">Contato</p>
          <ul className="mt-4 space-y-2">
            <li>{CONTACT.email}</li>
            <li>{CONTACT.city}</li>
            <li>
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                {CONTACT.instagramHandle}
              </a>
            </li>
            <li>
              <Link href="/eventos" className="underline-offset-4 hover:underline">
                Filmes de evento
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl text-mute">© {new Date().getFullYear()} Pandex Films</p>
    </footer>
  );
}
