import Button from "@/components/Button";

export default function AnchorPointHero() {
  return (
    <section className="relative overflow-hidden bg-surface-alt px-6 pb-20 pt-24 md:pb-28 md:pt-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          By stellarIDE
        </p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-foreground md:text-7xl">
          <span aria-hidden="true">⚓</span> Anchor Point
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
          Solid ground for builders shipping on Stellar.
        </p>
        <p className="mt-4 text-sm font-medium text-muted">
          {/* TODO: Replace with real event details */}
          [CITY] · [DATE] · [VENUE]
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="#rsvp" variant="accent">
            Reserve your spot
          </Button>
          <Button href="#agenda" variant="secondary">
            See the agenda
          </Button>
        </div>
      </div>
    </section>
  );
}
