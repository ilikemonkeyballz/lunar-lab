import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LabIllustration from "./LabIllustration";

export default function Hero() {
  return (
    <section id="top" className="grid-bg border-b border-navy/15">
      <div className="wrap grid items-center gap-12 py-16 lg:grid-cols-[45fr_55fr] lg:py-24">
        <div>
          <p className="label mb-6 flex items-center gap-3 text-navy/70">
            <span className="h-1.5 w-1.5 rounded-full bg-leaf" /> Lunar agricultural research
          </p>
          <h1 className="text-[clamp(2.5rem,5.2vw,4.5rem)] font-medium leading-[1.04] tracking-tight text-ink">
            Growing beyond Earth requires a better way to experiment.
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink/70">
            A modular research platform designed to help researchers study plant growth in lunar-relevant environments.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/problem" className="label rounded-md bg-navy px-6 py-3.5 text-paper transition hover:bg-navy/90">
              Explore the platform
            </Link>
            <Link href="/background" className="label inline-flex items-center gap-2 rounded-md border border-navy/40 px-6 py-3.5 text-navy transition hover:border-navy">
              Our approach <ArrowRight size={14} />
            </Link>
          </div>
        </div>
        <div className="relative">
          <span className="label absolute right-0 top-0 text-[10px] text-navy/50">System / 01</span>
          <LabIllustration className="w-full" />
        </div>
      </div>
    </section>
  );
}
