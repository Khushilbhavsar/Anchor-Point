import Section from "@/components/Section";

export default function PastEditions() {
  return (
    <Section className="bg-surface-alt">
      <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Past editions
      </h2>
      <div className="mx-auto mt-10 max-w-md text-center">
        <p className="font-mono text-lg text-primary/30">001 — pending</p>
        <p className="mt-3 text-sm text-muted">
          Editions are recorded here as they happen.
        </p>
      </div>
    </Section>
  );
}
