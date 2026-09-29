import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import {
  Strip, Idea, Platform, HowItWorks, Experiment, Research, Final,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Strip />
        <Idea />
        <Platform />
        <HowItWorks />
        <Experiment />
        <Research />
        <Final />
      </main>
      <footer className="border-t border-navy/15 py-8">
        <div className="wrap label flex flex-wrap justify-between gap-2 text-navy/60">
          <span>Lunar Agricultural Lab</span>
          <span>Controlled environment / Research platform</span>
        </div>
      </footer>
    </>
  );
}