import InnerPage from "@/components/InnerPage";

export default function Page() {
  return (
    <InnerPage
      eyebrow="Problem statement"
      title="The problem this platform is built to address."
      intro="Placeholder: state the problem in two or three sentences."
      tone="blue"
      sections={[
        { title: "The challenge", body: "Placeholder text. Replace with your own content." },
        { title: "Current gaps", body: "Placeholder text. Replace with your own content." },
        { title: "Project goal", body: "Placeholder text. Replace with your own content." },
        { title: "Scope", body: "Placeholder text. Replace with your own content." },
      ]}
      figure="Figure placeholder / problem diagram"
    />
  );
}
