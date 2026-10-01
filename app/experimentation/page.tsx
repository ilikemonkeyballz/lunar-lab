import InnerPage from "@/components/InnerPage";

export default function Page() {
  return (
    <InnerPage
      eyebrow="Experimentation / Data"
      title="From experiment design to results."
      intro="Placeholder: describe how experiments and data fit together."
      tone="blue"
      links={[
        { label: "Experiment Design", href: "/experimentation/design", desc: "Placeholder description." },
        { label: "Data Collection", href: "/experimentation/data-collection", desc: "Placeholder description." },
        { label: "Results & Analysis", href: "/experimentation/results", desc: "Placeholder description." },
      ]}
    />
  );
}
