"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#filmes", label: "Filmes" },
  { href: "/eventos", label: "Eventos" },
  { href: "/#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid || open ? "bg-ink/95 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          className="flex items-center gap-3 whitespace-nowrap text-sm font-bold tracking-[0.35em]"
          onClick={() => setOpen(false)}
        >
          <Image src="/logo-mark.png" alt="" width={30} height={30} priority />
          <span>
            PANDEX FILMS
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-paper/80 transition-colors hover:text-paper">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-px w-6 bg-paper" />
          <span className={`mt-2 block h-px w-6 bg-paper transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className="mt-2 block h-px w-6 bg-paper" />
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" className="border-t border-line px-5 pb-6 md:hidden" aria-label="Principal">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block border-b border-line py-4 text-base"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
