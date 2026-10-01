import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  tone?: "blue" | "green";
  sections?: { title: string; body: string }[];
  links?: { label: string; href: string; desc: string }[];
  figure?: string;
};

const cardTone = [
  "bg-tint-blue border-navy/15 border-l-navy",
  "bg-tint-green border-leaf/25 border-l-leaf",
];

export default function InnerPage({ eyebrow, title, intro, tone = "blue", sections = [], links = [], figure }: Props) {
  const blue = tone === "blue";
  return (
    <>
      <header className={`grid-bg border-b border-navy/15 ${blue ? "bg-tint-blue" : "bg-tint-green"}`}>
        <div className="wrap py-16 md:py-24">
          <p className="label mb-5 text-navy/70">{eyebrow}</p>
          <span className={`mb-6 block h-1 w-12 rounded-full ${blue ? "bg-leaf" : "bg-navy"}`} />
          <h1 className="max-w-3xl text-[clamp(2.2rem,4.6vw,3.5rem)] font-medium leading-[1.06] tracking-tight text-navy">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-ink/70">{intro}</p>
        </div>
      </header>

      <div className="wrap space-y-6 py-16 md:py-24">
        {links.length > 0 && (
          <div className="grid gap-6 md:grid-cols-3">
            {links.map((l, i) => (
              <Link key={l.href} href={l.href} className={`group rounded-2xl border border-l-4 p-7 transition hover:shadow-[0_4px_16px_rgba(36,59,83,.10)] ${cardTone[i % 2]}`}>
                <h3 className="text-xl font-medium text-navy">{l.label}</h3>
                <p className="mt-2 text-base text-ink/70">{l.desc}</p>
                <span className="label mt-6 inline-flex items-center gap-2 text-navy">Open <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div>
        )}
        {sections.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2">
            {sections.map((s, i) => (
              <section key={s.title} className={`rounded-2xl border border-l-4 p-7 ${cardTone[i % 2]}`}>
                <h2 className="text-xl font-medium text-navy">{s.title}</h2>
                <p className="mt-3 text-base text-ink/70">{s.body}</p>
              </section>
            ))}
          </div>
        )}
        {figure && (
          <div className="grid-bg grid min-h-[280px] place-items-center rounded-2xl border border-dashed border-navy/30">
            <span className="label text-navy/50">{figure}</span>
          </div>
        )}
      </div>
    </>
  );
}
