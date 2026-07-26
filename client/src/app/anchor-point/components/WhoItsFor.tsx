import Section from "@/components/Section";

const audiences = [
  "Web2 developers",
  "Founders exploring Stellar",
  "Ecosystem contributors",
];

export default function WhoItsFor() {
  return (
    <Section>
      <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Who it&apos;s for
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-lg text-muted">
        You don&apos;t need Rust, a wallet, or a whitepaper.
      </p>
      <p className="mx-auto mt-8 max-w-2xl text-center text-base text-muted">
        {audiences.join(" \u00b7 ")}
      </p>
    </Section>
  );
}
