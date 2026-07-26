import Section from "@/components/Section";
import Button from "@/components/Button";

export default function RSVP() {
  return (
    <Section id="rsvp">
      <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Reserve your spot
      </h2>
      <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-border bg-surface p-8">
        {/* ────────────────────────────────────────────────────
            TODO: Replace the placeholder below with your Luma embed.
            Paste the <iframe> or <script> from Luma between the
            opening and closing <div> tags, or swap this entire
            <div> for the embed code.
            ──────────────────────────────────────────────────── */}
        <div className="flex min-h-[300px] items-center justify-center rounded-lg border border-dashed border-border bg-surface-alt text-sm text-muted">
          Luma embed goes here — paste your embed code in place of this
          placeholder.
        </div>
        <div className="mt-6 text-center">
          {/* TODO: Replace YOUR_EVENT_ID with your actual Luma event slug */}
          <Button href="https://lu.ma/YOUR_EVENT_ID" variant="accent">
            Open in Luma
          </Button>
        </div>
      </div>
    </Section>
  );
}
