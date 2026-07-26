import Link from "next/link";

const productLinks = [
  { label: "How it works", href: "/#how" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

const communityLinks = [
  { label: "Anchor Point", href: "/anchor-point" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface-alt" role="contentinfo">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="text-lg font-bold tracking-tight text-foreground">
              stellar<span className="text-primary">IDE</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              The AI-native IDE for building Soroban smart contracts and dApps on Stellar.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
              Product
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
              Community
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {communityLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted">
          &copy; {new Date().getFullYear()} stellarIDE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
