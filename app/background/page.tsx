import type { ReactNode } from "react";
import { ExternalLink } from "lucide-react";

/* ===== EXISTING SOLUTIONS TABLE =====
   Each block is one table row. Edit the text inside the quotes.
   To link a solution name, put a URL in `href` (leave "" for no link).
   To add a row, copy a whole { ... }, block and paste it below the last one. */
const solutions = [
  {
    name: "Bench Heating",
    href: "https://www.extension.purdue.edu/extmedia/HO/HO-327-W.pdf",
    works: "Provides an optimal growing temperature.",
    fails: "Requires heating the water supply.",
    learn: "Power efficiency must be evaluated against the energy budget of our system.",
    verify:
      "Compare against other heating methods to determine which best supports plant growth while minimizing power consumption.",
  },
  {
    name: "University of Arizona / NASA Prototype Lunar Greenhouse",
    href: "https://cales.arizona.edu/lunargreenhouse",
    works:
      "Uses a cable-supported hydroponic nutrient film technique to feed crops and fully integrates gas and water loops with human habitats.",
    fails: "Relies on ceiling-mounted cables for structural support.",
    learn: "High lighting and power demands necessitate solar collectors or specialized-spectrum LEDs.",
    verify:
      "Build a 24 in × 24 in scale frame mock-up. Measure LED power draw and test floor-anchored racks with vertical hydroponic channels.",
  },
  {
    name: "DLR EDEN ISS Antarctic Mobile Test Facility",
    href: "https://elib.dlr.de/135984",
    works: "Aeroponic and vertical hydroponic systems maximize volumetric crop yield.",
    fails: "High-power HVAC systems consume substantial energy to remove plant transpiration moisture.",
    learn: "Decontaminating air streams prevents fungal and bacterial growth in high-humidity environments.",
    verify: "Test a closed-loop air handling system in a sealed grow box.",
  },
  {
    name: "In-Situ Regolith Agriculture",
    href: "https://doi.org/10.1371/journal.pone.0103138",
    works:
      "Using local lunar regolith avoids launch costs. Its angular, volcanic-rock particle structure provides mechanical anchoring for roots.",
    fails: "Raw regolith is highly alkaline (pH 9–10.5), lacks nutrients, and contains no organic matter.",
    learn:
      "Substrate cultivation is best suited to dedicated experiment beds, reserving vertical hydroponics for core crop production.",
    verify: "Conduct a growth trial comparing 1 kg of lunar regolith simulant against potting soil.",
  },
];

/* Layout helper only. `wide` puts the heading above the content (used for the table). */
function Sub({ n, title, bg, wide, children }: { n: string; title: string; bg: string; wide?: boolean; children: ReactNode }) {
  const heading = (
    <>
      <p className="label text-navy/60">{n}</p>
      <h2 className="mt-3 text-2xl font-medium leading-tight text-navy md:text-3xl">{title}</h2>
    </>
  );
  return (
    <section className={`border-b border-navy/15 ${bg}`}>
      {wide ? (
        <div className="wrap py-16 md:py-20">
          {heading}
          <div className="mt-8 space-y-8">{children}</div>
        </div>
      ) : (
        <div className="wrap grid gap-8 py-16 md:py-20 lg:grid-cols-12">
          <div className="lg:col-span-4">{heading}</div>
          <div className="space-y-5 lg:col-span-8">{children}</div>
        </div>
      )}
    </section>
  );
}

const body = "text-lg leading-relaxed text-ink/70";
const item = "border-l-2 border-leaf pl-4";
const itemTitle = "text-base font-semibold text-navy";
const itemText = "mt-1 text-base text-ink/70";
const dot = "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf";
const li = "flex gap-3 text-base text-ink/70";
const th = "label px-5 py-4 font-medium";
const td = "px-5 py-5 align-top text-sm leading-relaxed text-ink/75";

export default function Page() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="grid-bg border-b border-navy/15 bg-tint-green">
        <div className="wrap py-16 md:py-24">
          <p className="label mb-5 text-navy/70">Background research</p>
          <span className="mb-6 block h-1 w-12 rounded-full bg-navy" />
          <h1 className="max-w-3xl text-[clamp(2.2rem,4.6vw,3.5rem)] font-medium leading-[1.06] tracking-tight text-navy">
            What is already known, and what is still open.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink/70">Write your background summary here.</p>
        </div>
      </header>

      {/* ===== 01 EXISTING SOLUTIONS ===== */}
      <Sub n="01" title="Existing Solutions" bg="bg-paper" wide>
        <p className={`${body} max-w-3xl`}></p>
        <div className="overflow-x-auto rounded-2xl border border-navy/15">
          <table className="w-full min-w-[980px] border-collapse text-left">
            <thead className="bg-navy text-paper">
              <tr>
                <th className={`${th} w-[200px]`}>Existing Solution</th>
                <th className={th}>What Works</th>
                <th className={th}>What Fails or Does Not Fit</th>
                <th className={th}>What We Can Learn</th>
                <th className={th}>How We Could Verify This</th>
              </tr>
            </thead>
            <tbody>
              {solutions.map((s) => (
                <tr key={s.name} className="border-t border-navy/15 odd:bg-tint-blue/50 even:bg-paper">
                  <td className={`${td} font-medium text-navy`}>
                    {s.href ? (
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-start gap-1.5 underline decoration-navy/30 underline-offset-4 hover:decoration-navy"
                      >
                        <span>{s.name}</span>
                        <ExternalLink size={13} className="mt-1 shrink-0" />
                      </a>
                    ) : (
                      s.name
                    )}
                  </td>
                  <td className={td}>{s.works}</td>
                  <td className={td}>{s.fails}</td>
                  <td className={td}>{s.learn}</td>
                  <td className={td}>{s.verify}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Sub>

      {/* ===== 02 RESEARCH GAPS ===== */}
      <Sub n="02" title="Research Gaps" bg="bg-tint-blue">
        <p className={body}>Write your intro to research gaps here.</p>
        <div className="grid gap-6 pt-2">
          <div className={item}>
            <h3 className={itemTitle}>Rapid Modular Reconfiguration</h3>
            <p className={itemText}>Most grow chambers are either rigid, permanent installations or flimsy temporary setups.</p>
          </div>
          <div className={item}>
            <h3 className={itemTitle}>Isolation and Multi-Variable Control Chambers</h3>
            <p className={itemText}>Testing factors like optimal light spectrum, nutrient mix, or regolith toxicity requires isolate control groups.</p>
          </div>
          <div className={item}>
            <h3 className={itemTitle}>Real-Time Root and Substrate Diagnostics</h3>
            <p className={itemText}>Researchers need non-destructive ways to monitor root growth and water retention.</p>
          </div>
        </div>
      </Sub>

      {/* ===== 03 OPEN QUESTIONS ===== */}
      <Sub n="03" title="Open Questions" bg="bg-paper">
        <p className={body}>Relevant questions that influence the engineering process.</p>
        <ul className="space-y-3 pt-2">
          <li className={li}><span className={dot} /><span>How do we prioritize plant species based on nutritional density versus biomass waste?
</span></li>
          <li className={li}><span className={dot} /><span>How can we optimize the greenhouse layout to maximize usable space and ease of movement while still accommodating all the necessary equipment and infrastructure for efficient operation? 
</span></li>

        </ul>
      </Sub>
    </>
  );
}