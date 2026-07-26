import Section from "@/components/Section";

const cards = [
  {
    index: "01",
    title: "Build session",
    description:
      "Guided and hands-on. Ship a Soroban contract to Testnet before you leave.",
  },
  {
    index: "02",
    title: "Talks",
    description:
      "Short and technical, from people actually running things in the ecosystem.",
  },
  {
    index: "03",
    title: "Demo night",
    description:
      "Five minutes, live, anything you've built.",
  },
];

export default function WhatHappens() {
  return (
    <Section className="bg-surface-alt">
      <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        What happens
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.index}
            className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-primary/40 hover:shadow-[0_0_20px_rgba(129,140,248,0.1)]"
          >
            <span className="font-mono text-xs font-semibold tracking-widest text-primary/50">
              {card.index}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-foreground">
              {card.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
