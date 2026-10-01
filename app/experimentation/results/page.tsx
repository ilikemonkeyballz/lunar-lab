import InnerPage from "@/components/InnerPage";

export default function Page() {
  return (
    <InnerPage
      eyebrow="Experimentation / Results"
      title="Results & Analysis"
      intro="Placeholder: summarize findings once they exist."
      tone="green"
      sections={[
        { title: "Observations", body: "Placeholder text. Replace with your own content." },
        { title: "Comparisons", body: "Placeholder text. Replace with your own content." },
        { title: "Interpretation", body: "Placeholder text. Replace with your own content." },
      ]}
      figure="Chart placeholder"
    />
  );
}
