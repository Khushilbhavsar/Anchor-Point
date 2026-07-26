import Section from "@/components/Section";

const audiences = [
  {
    label: "Web2 developers",
    detail: "Curious about smart contracts but not sure where to start.",
  },
  {
    label: "Founders exploring Stellar",
    detail: "Building something and need hands-on guidance.",
  },
  {
    label: "Ecosystem contributors",
    detail: "Already building — want to connect and ship faster.",
  },
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
      <div className="mx-auto mt-10 grid max-w-2xl gap-6 sm:grid-cols-3">
        {audiences.map((a) => (
          <div key={a.label} className="text-center">
            <h3 className="text-base font-semibold text-foreground">
              {a.label}
            </h3>
            <p className="mt-1 text-sm text-muted">{a.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
