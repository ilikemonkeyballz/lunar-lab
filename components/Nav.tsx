"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

type Item = { label: string; href: string; children?: { label: string; href: string }[] };

const items: Item[] = [
  { label: "Overview", href: "/" },
  { label: "Problem", href: "/problem" },
  { label: "Background Research", href: "/background" },
  {
    label: "Experimentation / Data",
    href: "/experimentation",
    children: [
      { label: "Experiment Design", href: "/experimentation/design" },
      { label: "Data Collection", href: "/experimentation/data-collection" },
      { label: "Results & Analysis", href: "/experimentation/results" },
    ],
  },
  { label: "References", href: "/references" },
];

const pill =
  "rounded-md px-3 py-2 text-sm text-ink/80 transition-colors hover:bg-tint-blue hover:text-navy hover:ring-1 hover:ring-navy/15";
const on = "bg-tint-blue text-navy ring-1 ring-navy/15";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const active = (h: string) => (h === "/" ? path === "/" : path.startsWith(h));

  return (
    <header className="sticky top-0 z-50 border-b border-navy/15 bg-paper/85 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between">
        <Link href="/" className="leading-tight">
          <span className="block text-[13px] font-semibold tracking-[0.12em]">LUNAR AGRICULTURAL LAB</span>
          <span className="label block text-[10px] text-navy/60">Research platform</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {items.map((it) =>
            it.children ? (
              <div key={it.href} className="group relative">
                <Link href={it.href} className={`${pill} inline-flex items-center gap-1.5 ${active(it.href) ? on : ""}`}>
                  {it.label}
                  <ChevronDown size={14} className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                </Link>
                <div className="absolute left-0 top-full hidden min-w-[230px] pt-2 group-focus-within:block group-hover:block">
                  <div className="rounded-xl border border-navy/15 bg-paper p-2 shadow-[0_8px_24px_rgba(23,26,28,.08)]">
                    {it.children.map((c) => (
                      <Link key={c.href} href={c.href} className={`${pill} block ${path === c.href ? on : ""}`}>
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={it.href} href={it.href} className={`${pill} ${active(it.href) ? on : ""}`}>
                {it.label}
              </Link>
            )
          )}
        </nav>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-navy/15 bg-paper lg:hidden" aria-label="Mobile">
          <div className="wrap flex flex-col py-3">
            {items.map((it) => (
              <div key={it.href}>
                <Link href={it.href} onClick={() => setOpen(false)} className="block border-b border-navy/10 py-3 text-base">
                  {it.label}
                </Link>
                {it.children?.map((c) => (
                  <Link key={c.href} href={c.href} onClick={() => setOpen(false)} className="block border-b border-navy/10 py-2.5 pl-5 text-sm text-ink/70">
                    {c.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
