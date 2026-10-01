import InnerPage from "@/components/InnerPage";

export default function Page() {
  return (
    <InnerPage
      eyebrow="Experimentation / Design"
      title="Experiment Design"
      intro="Placeholder: outline how experiments are planned."
      tone="green"
      sections={[
        { title: "Variables", body: "Placeholder text. Replace with your own content." },
        { title: "Configurations", body: "Placeholder text. Replace with your own content." },
        { title: "Controls", body: "Placeholder text. Replace with your own content." },
      ]}
    />
  );
}
