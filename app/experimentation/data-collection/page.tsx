import InnerPage from "@/components/InnerPage";

export default function Page() {
  return (
    <InnerPage
      eyebrow="Experimentation / Data"
      title="Data Collection"
      intro="Placeholder: describe what is measured and how."
      tone="blue"
      sections={[
        { title: "Measurements", body: "Placeholder text. Replace with your own content." },
        { title: "Schedule", body: "Placeholder text. Replace with your own content." },
        { title: "Storage", body: "Placeholder text. Replace with your own content." },
      ]}
    />
  );
}
