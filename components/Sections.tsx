import Link from "next/link";
import { ArrowRight, Sun, Sprout, Activity, Droplets, Gauge, SlidersHorizontal, LayoutGrid } from "lucide-react";
import LabIllustration from "./LabIllustration";

const Head = ({ n, t }: { n: string; t: string }) => (
  <p className="label mb-6 flex items-center gap-4 text-navy/60">
    <span>{n}</span><span className="h-px w-10 bg-navy/30" /><span>{t}</span>
  </p>
);
const h2 = "text-[clamp(1.9rem,3.6vw,3rem)] font-medium leading-[1.1] tracking-tight";
const sec = "py-24 md:py-32";

export function Strip() {
  const items = [
    ["Modular", "Designed around interchangeable components."],
    ["Controlled", "Environmental conditions can be manipulated."],
    ["Measurable", "Growth conditions can be monitored."],
    ["Repeatable", "Experiments can be conducted consistently."],
  ];
  return (
    <section className="border-b border-navy/15 bg-mist/60">
      <div className="wrap grid gap-y-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(([t, d], i) => (
          <div key={t} className={`lg:px-6 ${i > 0 ? "lg:border-l lg:border-navy/15" : "lg:pl-0"}`}>
            <p className="text-sm font-semibold tracking-[0.12em] uppercase">{t}</p>
            <p className="mt-1.5 text-sm text-ink/65">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Idea() {
  const nodes = [
    { Icon: Sun, t: "Environment" },
    { Icon: Sprout, t: "Plant system" },
    { Icon: Activity, t: "Measurements" },
  ];
  return (
    <section className={sec}>
      <div className="wrap grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Head n="01 / 04" t="The idea" />
          <h2 className={h2}>A controlled environment for lunar agriculture research.</h2>
          <p className="mt-6 max-w-lg text-lg text-ink/70">
            The platform holds a plant system inside an environment researchers can adjust. Each configuration can be observed and compared with the next.
          </p>
        </div>
        <div className="grid-bg rounded-2xl border border-navy/15 p-8 lg:col-span-6">
          <div className="flex flex-col items-center gap-3 md:flex-row">
            {nodes.map(({ Icon, t }, i) => (
              <div key={t} className="flex flex-col items-center gap-3 md:contents">
                <div className="flex flex-col items-center gap-3">
                  <div className="grid h-16 w-16 place-items-center rounded-full border border-navy bg-paper text-navy">
                    <Icon size={24} strokeWidth={1.4} />
                  </div>
                  <span className="label text-navy">{t}</span>
                </div>
                {i < 2 && <div className="h-8 w-px bg-navy/30 md:h-px md:w-auto md:flex-1" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = ["Configure", "Grow", "Measure", "Compare"];
  return (
    <section id="system" className={sec}>
      <div className="wrap">
        <Head n="02 / 04" t="How it works" />
        <h2 className={h2}>Four steps, repeated.</h2>
        <div className="relative mt-16">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-navy/20 md:bottom-auto md:left-0 md:right-0 md:top-5 md:h-px md:w-full" />
          <ol className="relative grid gap-10 md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s} className="flex items-center gap-5 md:block">
                <span className="label grid h-10 w-10 place-items-center rounded-full border border-navy bg-paper text-navy">0{i + 1}</span>
                <span className="text-sm font-semibold uppercase tracking-[0.16em] md:mt-5 md:block">{s}</span>
              </li>
            ))}
          </ol>
        </div>
        <p className="mt-14 max-w-xl text-lg text-ink/70">
          Researchers can change conditions, observe the resulting growth, and compare experimental configurations.
        </p>
      </div>
    </section>
  );
}

export function Experiment() {
  const vars = [
    { Icon: Sun, t: "Light", v: 30 },
    { Icon: Droplets, t: "Water", v: 62 },
    { Icon: Gauge, t: "Environment", v: 45 },
    { Icon: Sprout, t: "Growth system", v: 75 },
  ];
  const Chip = ({ Icon, t, v }: (typeof vars)[number]) => (
    <div className="rounded-xl border border-paper/25 p-5">
      <div className="flex items-center gap-3"><Icon size={18} strokeWidth={1.4} /><span className="label">{t}</span></div>
      <div className="relative mt-5 h-px bg-paper/30"><span className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-gold" style={{ left: `${v}%` }} /></div>
    </div>
  );
  return (
    <section className={`${sec} grid-bg-dark bg-navy text-paper`}>
      <div className="wrap">
        <p className="label mb-6 flex items-center gap-4 text-paper/60"><span>03 / 04</span><span className="h-px w-10 bg-paper/30" /><span>Engineered for experimentation</span></p>
        <h2 className={`${h2} max-w-2xl`}>Change the conditions. Study the response.</h2>
        <div className="mt-14 grid items-center gap-8 lg:grid-cols-[.7fr_1.6fr_.7fr]">
          <div className="grid gap-5">{vars.slice(0, 2).map((x) => <Chip key={x.t} {...x} />)}</div>
          <LabIllustration dark annotate={false} className="w-full" />
          <div className="grid gap-5">{vars.slice(2).map((x) => <Chip key={x.t} {...x} />)}</div>
        </div>
      </div>
    </section>
  );
}

export function Research() {
  const cards = [
    { Icon: SlidersHorizontal, t: "Control", d: "Create controlled experimental conditions." },
    { Icon: LayoutGrid, t: "Modularity", d: "Modify parts of the system without redesigning the entire platform." },
    { Icon: Activity, t: "Data", d: "Observe and compare how plants respond." },
  ];
  return (
    <section id="research" className={sec}>
      <div className="wrap">
        <Head n="04 / 04" t="Research platform" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map(({ Icon, t, d }) => (
            <article key={t} className="flex min-h-[320px] flex-col justify-between rounded-2xl border border-navy/15 bg-paper p-8 shadow-[0_1px_2px_rgba(23,26,28,.05)]">
              <div className="grid-bg grid h-24 w-24 place-items-center rounded-xl border border-navy/15 text-navy">
                <Icon size={34} strokeWidth={1.2} />
              </div>
              <div>
                <h3 className="text-xl font-medium uppercase tracking-[0.14em]">{t}</h3>
                <p className="mt-3 text-base text-ink/70">{d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Final() {
  return (
    <section id="about" className="grid-bg border-t border-navy/15 py-28 md:py-40">
      <div className="wrap text-center">
        <LabIllustration className="mx-auto mb-16 w-full max-w-3xl" />
        <h2 className="mx-auto max-w-3xl text-[clamp(2rem,4.2vw,3.5rem)] font-medium leading-[1.08] tracking-tight">
          Designing the laboratory before designing the farm.
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg text-ink/70">
          A physical platform for studying what it takes to grow plants in a lunar environment.
        </p>
        <Link href="/experimentation" className="label mt-10 inline-flex items-center gap-2 rounded-md bg-navy px-7 py-4 text-paper transition hover:bg-navy/90">
          Explore the system <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
