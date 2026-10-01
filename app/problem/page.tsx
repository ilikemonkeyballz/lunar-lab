import type { ReactNode } from "react";

/* Layout helper only. All text lives in the Page below, written directly in place. */
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

const body = "text-lg leading-relaxed text-ink/70";
const item = "border-l-2 border-leaf pl-4";
const itemTitle = "text-base font-semibold text-navy";
const itemText = "mt-1 text-base text-ink/70";
const dot = "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf";
const li = "flex gap-3 text-base text-ink/70";
const listTitle = "label mb-4 text-navy";

export default function Page() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="grid-bg border-b border-navy/15 bg-tint-blue">
        <div className="wrap py-16 md:py-24">
          <p className="label mb-5 text-navy/70">Problem statement</p>
          <span className="mb-6 block h-1 w-12 rounded-full bg-leaf" />
          <h1 className="max-w-3xl text-[clamp(2.2rem,4.6vw,3.5rem)] font-medium leading-[1.06] tracking-tight text-navy">
            An effective agricultural growth lab.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink/70">
            The astronauts living in the lunar habitat will need a way to test the efficacy and growth of plants through various methods on the moon and be able to transition to the cultivation of food and essential materials in a lunar environment in order for them to be self-sufficient because shipping materials are expensive. 
          </p>
        </div>
      </header>

      {/* ===== 01 THE CHALLENGE ===== */}
      <Sub n="01" title="The Challenge" bg="bg-paper">
        <p className={body}>Astronauts living in the lunar base on the moon need healthy food and other growable resources. In order to accomplish this, researchers need an effective way to experiment with different growth methods in a lunar environment.</p>
      </Sub>

      {/* ===== 02 ENVIRONMENTAL & ENGINEERING CONSEQUENCES ===== */}
      <Sub n="02" title="Environmental & Engineering Consequences" bg="bg-tint-green">
        <p className={body}>The environmental conditions on the Moon and Earth are vastly different.</p>
        <div className="grid gap-6 pt-2 sm:grid-cols-2">
          <div className={item}>
            <h3 className={itemTitle}>Gravity</h3>
            <p className={itemText}>Roots lose their normal directional growth. Furthermore, water is distributed irregularly near the root zone and nutrients cannot travel up roots as efficiently. </p>
          </div>
          <div className={item}>
            <h3 className={itemTitle}>Atmosphere and pressure</h3>
            <p className={itemText}>The moon has almost no atmosphere, so the greenhouse will have to create its own. Lower pressure can also increase plant water loss. </p>
          </div>
          <div className={item}>
            <h3 className={itemTitle}>Humidity</h3>
            <p className={itemText}>There is excess humidity from the greenhouse in the lunar base. This necessitates a way to control the amount of water vapor. </p>
          </div>
          <div className={item}>
            <h3 className={itemTitle}>Light and temperature cycle</h3>
            <p className={itemText}>The lab must have a source of artificial light due to the Moon's irregular light cycle. There are also severe temperature swings due to the lack of an atmosphere.</p>
          </div>
          <div className={item}>
            <h3 className={itemTitle}>Soil (regolith)</h3>
            <p className={itemText}>Lunar regolith has no organic material or essential nutrients for plant growth. It is also highly alkaline with a pH of around 9-10.5.</p>
          </div>
          <div className={item}>
            <h3 className={itemTitle}>Other factors</h3>
            <p className={itemText}>All parts of the lab must be accessible, which is difficult in a lunar environment. Many types of plants grow best in temperatures of around 80 to 90 degrees F, which would be uncomfortable for astronauts.</p>
          </div>
        </div>
      </Sub>

      {/* ===== 03 REQUIREMENTS AND CONSTRAINTS ===== */}
      <Sub n="03" title="Requirements and Constraints" bg="bg-paper">
        <div className="grid gap-10 pt-2 sm:grid-cols-2">
          <div>
            <h3 className={listTitle}>Requirements</h3>
            <ul className="space-y-3">
              <li className={li}><span className={dot} /><span>All plants should have clear value to astronauts or the moon base.</span></li>
              <li className={li}><span className={dot} /><span>2 or 3 growth styles should be demonstrated, such as hydroponics, soil growth, and aeroponics.</span></li>
              <li className={li}><span className={dot} /><span>At least 3 types of plants should be displayed and experimented with</span></li>
            </ul>
          </div>
          <div>
            <h3 className={listTitle}>Constraints</h3>
            <ul className="space-y-3">
              <li className={li}><span className={dot} /><span>The model should be 24 x 24 inches.</span></li>
              <li className={li}><span className={dot} /><span>Objects cannot be attached or hung to the ceiling or wall as this will damage the bladder.</span></li>
              <li className={li}><span className={dot} /><span>Make all the plants and the chamber available for maintenance.</span></li>
            </ul>
          </div>
        </div>
      </Sub>
    </>
  );
}