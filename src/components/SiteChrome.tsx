import Link from "next/link";

const NAV = [
  { href: "/carte/", label: "La carte" },
  { href: "/plateaux/", label: "Nos plateaux" },
  { href: "/maison/", label: "La maison" },
  { href: "/infos/", label: "Infos pratiques" },
];

export function SiteHeader() {
  return (
    <header className="w-full bg-ivory">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 sm:px-10 sm:py-10">
        <Link href="/" className="flex items-baseline gap-3" aria-label="Lune Sushi">
          <span className="font-serif-display text-3xl font-medium tracking-wide text-wine sm:text-4xl">
            LUNE
          </span>
          <span className="font-sans-clean text-[11px] uppercase tracking-[0.35em] text-gold">
            SUSHI
          </span>
        </Link>
        <nav className="hidden items-center gap-10 md:flex" aria-label="Navigation principale">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans-clean text-[15px] text-ink transition-colors hover:text-wine"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+33184802290"
            className="font-sans-clean text-[15px] font-semibold tracking-wide text-wine"
          >
            01 84 80 22 90
          </a>
          <Link
            href="/commander/"
            className="btn-wine inline-flex items-center rounded-full px-6 py-3 font-sans-clean text-sm font-semibold tracking-wider uppercase"
          >
            Commander
          </Link>
        </nav>
        <Link
          href="/commander/"
          className="btn-wine rounded-full px-5 py-3 font-sans-clean text-sm font-semibold tracking-wider uppercase md:hidden"
        >
          Commander
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter({ message }: { message?: string }) {
  return (
    <footer className="mt-auto w-full bg-ivory pb-12 pt-6 text-center">
      <p className="font-sans-clean text-[13px] tracking-wider text-muted">
        LUNE SUSHI · 12 rue des Fleurs, Paris · 01 84 80 22 90
      </p>
      {message && (
        <p className="mt-3 font-sans-clean text-[13px] text-muted">{message}</p>
      )}
    </footer>
  );
}