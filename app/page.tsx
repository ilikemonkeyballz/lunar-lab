import Hero from "@/components/Hero";
import { Strip, Idea, HowItWorks, Experiment, Research, Final } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Strip />
      <Idea />
      <HowItWorks />
      <Experiment />
      <Research />
      <Final />
    </>
  );
}
