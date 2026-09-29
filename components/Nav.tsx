"use client";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { href: "#platform", label: "Platform" },
  { href: "#system", label: "System" },
  { href: "#research", label: "Research" },
  { href: "#about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-navy/15 bg-paper/85 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="leading-tight">
          <span className="block text-[13px] font-semibold tracking-[0.12em]">LUNAR AGRICULTURAL LAB</span>
          <span className="label block text-[10px] text-navy/60">Research platform</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-ink/80 hover:text-navy">{l.label}</a>
          ))}
          <a href="#platform" className="label inline-flex items-center gap-2 rounded-md border border-navy px-4 py-2 text-navy transition hover:bg-navy hover:text-paper">
            View platform <ArrowRight size={14} />
          </a>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-navy/15 bg-paper md:hidden" aria-label="Mobile">
          <div className="wrap flex flex-col py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-navy/10 py-3 text-base">
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}