import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ── Homepage hero placeholder ────────────────────────── */}
      <section className="flex flex-1 flex-col items-center justify-center bg-surface-alt px-6 py-32 text-center">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          The AI-native IDE for
          <br />
          Soroban smart contracts
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Build, test, and deploy on Stellar — with an editor that understands
          your code.
        </p>
      </section>

      {/* ── Anchor Point CTA strip ───────────────────────────── */}
      <section className="border-t border-border bg-accent/5 px-6 py-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-sm font-medium text-foreground">
            <span aria-hidden="true">⚓</span>{" "}
            {/* TODO: Replace [CITY] and [DATE] with real event details */}
            Anchor Point Vol. 1 — [CITY], [DATE]
          </p>
          <Link
            href="/anchor-point"
            className="inline-flex items-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:brightness-110"
          >
            Reserve your spot
          </Link>
        </div>
      </section>
    </>
  );
}
