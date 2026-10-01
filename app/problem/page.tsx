import type { ReactNode } from "react";

const ph = "Placeholder text. Write your text here.";

function Sub({ n, title, bg, children }: { n: string; title: string; bg: string; children: ReactNode }) {
  return (
    <section className={`border-b border-navy/15 ${bg}`}>
      <div className="wrap grid gap-8 py-16 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="label text-navy/60">{n}</p>
          <h2 className="mt-3 text-2xl font-medium leading-tight text-navy md:text-3xl">{title}</h2>
        </div>
        <div className="space-y-5 lg:col-span-8">{children}</div>
      </div>
    </section>
  );
}

const Para = () => <p className="text-lg leading-relaxed text-ink/70">{ph}</p>;

const Bullets = ({ title }: { title: string }) => (
  <div>
    <h3 className="label mb-4 text-navy">{title}</h3>
    <ul className="space-y-3">
      {[1, 2, 3].map((i) => (
        <li key={i} className="flex gap-3 text-base text-ink/70">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
          <span>Placeholder item {i}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function Page() {
  return (
    <>
      {/* Problem statement header (unchanged) */}
      <header className="grid-bg border-b border-navy/15 bg-tint-blue">
        <div className="wrap py-16 md:py-24">
          <p className="label mb-5 text-navy/70">Problem statement</p>
          <span className="mb-6 block h-1 w-12 rounded-full bg-leaf" />
          <h1 className="max-w-3xl text-[clamp(2.2rem,4.6vw,3.5rem)] font-medium leading-[1.06] tracking-tight text-navy">
            The problem this platform is built to address.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink/70">
            Placeholder: state the problem in two or three sentences.
          </p>
        </div>
      </header>

      <Sub n="01" title="The Challenge" bg="bg-paper">
        <Para />
        <Para />
      </Sub>

      <Sub n="02" title="Environmental & Engineering Consequences" bg="bg-tint-green">
        <p className="text-lg leading-relaxed text-ink/70">
          Placeholder: introduce how the Moon differs from Earth in ways that matter for this project.
        </p>
        <div className="grid gap-6 pt-2 sm:grid-cols-2">
          {["Gravity", "Atmosphere and pressure", "Radiation", "Light and temperature cycle", "Soil (regolith)", "Other factors"].map((t) => (
            <div key={t} className="border-l-2 border-leaf pl-4">
              <h3 className="text-base font-semibold text-navy">{t}</h3>
              <p className="mt-1 text-base text-ink/70">{ph}</p>
            </div>
          ))}
        </div>
      </Sub>

      <Sub n="03" title="Requirements and Constraints" bg="bg-paper">
        <p className="text-lg leading-relaxed text-ink/70">Placeholder: introduce what the platform must do and what limits it.</p>
        <div className="grid gap-10 pt-2 sm:grid-cols-2">
          <Bullets title="Requirements" />
          <Bullets title="Constraints" />
        </div>
      </Sub>
    </>
  );
}