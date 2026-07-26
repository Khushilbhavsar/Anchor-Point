import Section from "@/components/Section";

export default function Partners() {
  return (
    <Section>
      <p className="text-center text-base text-muted">
        Interested in hosting or sponsoring an edition?{" "}
        <a
          href="mailto:hello@stellaride.dev"
          className="font-medium text-primary underline underline-offset-2 transition-colors hover:text-primary-light"
        >
          hello@stellaride.dev
        </a>
      </p>
    </Section>
  );
}
