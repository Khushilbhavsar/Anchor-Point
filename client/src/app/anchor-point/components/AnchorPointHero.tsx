import Button from "@/components/Button";
import ConstellationCanvas from "./ConstellationCanvas";

export default function AnchorPointHero() {
  return (
    <section className="relative overflow-hidden bg-background px-6 pb-20 pt-24 md:pb-28 md:pt-32">
      {/* Grid overlay — 1px at ~4% opacity, fades toward bottom */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(129,140,248,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(129,140,248,0.04) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom,black 50%,transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom,black 50%,transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Constellation canvas */}
      <ConstellationCanvas />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* ⚓ decorative — exactly twice on the whole page (hero + CTA strip) */}
        <p aria-hidden="true" className="mb-4 text-4xl text-primary/20">
          ⚓
        </p>

        {/* Monospace eyebrow */}
        <p className="font-mono text-sm tracking-wider text-primary">
          // BY STELLARIDE
        </p>

        {/* h1 */}
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-foreground md:text-7xl">
          Anchor Point
        </h1>

        {/* Tagline */}
        <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
          Solid ground for builders shipping on Stellar.
        </p>

        {/* Monospace metadata row — contract-call style */}
        <div className="mx-auto mt-8 max-w-sm rounded-lg border border-primary/10 bg-surface/50 px-5 py-4 text-left font-mono text-sm">
          <div className="flex justify-between gap-8">
            <span className="text-muted">edition</span>
            <span className="text-primary/60">001</span>
          </div>
          <div className="flex justify-between gap-8">
            <span className="text-muted">network</span>
            <span className="text-primary/60">[CITY]</span>
          </div>
          <div className="flex justify-between gap-8">
            <span className="text-muted">block</span>
            <span className="text-primary/60">[DATE]</span>
          </div>
          <div className="flex justify-between gap-8">
            <span className="text-muted">status</span>
            <span className="text-cyan-400">OPEN</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="#rsvp" variant="primary">
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
