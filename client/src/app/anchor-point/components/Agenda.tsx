import Section from "@/components/Section";

const rows = [
  { time: "18:00", item: "Doors open — grab a drink, find a seat" },
  { time: "18:15", item: "Welcome & intros" },
  { time: "18:30", item: "Build session: your first Soroban contract" },
  { time: "19:30", item: "Talks: two 10-minute lightning talks" },
  { time: "19:50", item: "Demo night: five-minute live demos" },
  { time: "20:15", item: "Open networking & wrap-up" },
];

export default function Agenda() {
  return (
    <Section id="agenda" className="bg-surface-alt">
      <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Agenda
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-sm text-muted">
        {/* TODO: Update with actual schedule */}
        Placeholder schedule — will be finalized closer to the event.
      </p>
      <div className="mx-auto mt-10 max-w-2xl">
        <dl className="divide-y divide-border">
          {rows.map((row) => (
            <div key={row.time} className="flex gap-6 py-4">
              <dt className="w-16 shrink-0 font-mono text-sm font-semibold text-accent">
                {row.time}
              </dt>
              <dd className="text-sm leading-relaxed text-foreground">
                {row.item}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
