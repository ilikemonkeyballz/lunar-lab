import InnerPage from "@/components/InnerPage";

export default function Page() {
  return (
    <InnerPage
      eyebrow="References"
      title="Sources and further reading."
      intro="Placeholder: list your citations here."
      tone="blue"
      sections={[
        { title: "[1]", body: "Placeholder reference. Author, year, title, source." },
        { title: "[2]", body: "Placeholder reference. Author, year, title, source." },
        { title: "[3]", body: "Placeholder reference. Author, year, title, source." },
        { title: "[4]", body: "Placeholder reference. Author, year, title, source." },
      ]}
    />
  );
}
