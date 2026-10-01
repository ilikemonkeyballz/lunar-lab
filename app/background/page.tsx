import InnerPage from "@/components/InnerPage";

export default function Page() {
  return (
    <InnerPage
      eyebrow="Background research"
      title="What is already known, and what is still open."
      intro="Placeholder: summarize the background in two or three sentences."
      tone="green"
      sections={[
        { title: "Lunar environment", body: "Placeholder text. Replace with your own content." },
        { title: "Plant growth systems", body: "Placeholder text. Replace with your own content." },
        { title: "Existing platforms", body: "Placeholder text. Replace with your own content." },
        { title: "Open questions", body: "Placeholder text. Replace with your own content." },
      ]}
    />
  );
}
