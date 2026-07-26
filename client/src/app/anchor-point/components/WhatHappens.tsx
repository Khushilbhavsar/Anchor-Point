import Section from "@/components/Section";
import Card from "@/components/Card";

const cards = [
  {
    title: "Build session",
    description:
      "Guided, hands-on. Ship a Soroban contract to Testnet before you leave.",
  },
  {
    title: "Talks",
    description:
      "Short, technical, from people actually running things in the ecosystem.",
  },
  {
    title: "Demo night",
    description:
      "Five minutes, live, anything you've built. Ship it or show it.",
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
          <Card key={card.title}>
            <h3 className="text-lg font-semibold text-foreground">
              {card.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {card.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
