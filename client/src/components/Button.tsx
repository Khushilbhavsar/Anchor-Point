import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary" | "accent";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-dark focus-visible:outline-primary",
  secondary:
    "border border-border bg-transparent text-foreground hover:bg-surface-alt focus-visible:outline-primary",
  accent:
    "bg-accent text-white hover:brightness-110 focus-visible:outline-accent",
};

export default function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    // Hash links use plain <a> for correct scroll behaviour
    if (href.startsWith("#")) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
