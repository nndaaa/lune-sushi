import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

export default function CommanderPage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader />
      <main className="flex flex-col flex-1 bg-blush">
        <section className="mx-auto w-full max-w-3xl px-6 py-20 sm:px-10">
          <h1 className="font-serif-display text-5xl font-medium tracking-tight text-wine sm:text-6xl">
            Commander
          </h1>
          <p className="mt-3 font-sans-clean text-[17px] text-muted">
            Choisissez votre mode de commande et préparez votre panier.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <OrderCard
              title="À emporter"
              description="Récupérez votre commande à l'heure choisie."
              cta={{ label: "Préparer", href: "/carte/" }}
            />
            <OrderCard
              title="Livraison"
              description="Livré chez vous dans Paris et proche banlieue."
              cta={{ label: "Préparer", href: "/carte/" }}
            />
            <OrderCard
              title="Sur place"
              description="Réservez votre table pour le midi ou le soir."
              cta={{ label: "Appeler", href: "tel:+33184802290" }}
            />
          </div>

          <div className="mt-14 rounded-2xl border border-line bg-ivory p-8 sm:p-10">
            <h2 className="font-serif-display text-2xl font-medium tracking-tight text-wine">
              Une question ?
            </h2>
            <p className="mt-3 font-sans-clean text-[15px] text-ink/85">
              Notre équipe vous répond au{" "}
              <a href="tel:+33184802290" className="font-semibold text-wine">
                01 84 80 22 90
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function OrderCard({
  title,
  description,
  cta,
}: {
  title: string;
  description: string;
  cta: { label: string; href: string };
}) {
  const isExternal = cta.href.startsWith("tel:") || cta.href.startsWith("http");
  return (
    <div className="flex flex-col rounded-xl border border-line bg-ivory p-7">
      <h3 className="font-serif-display text-2xl font-medium tracking-tight text-wine">
        {title}
      </h3>
      <p className="mt-3 flex-1 font-sans-clean text-[15px] leading-relaxed text-ink/80">
        {description}
      </p>
      {isExternal ? (
        <a
          href={cta.href}
          className="btn-wine mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 font-sans-clean text-sm font-semibold tracking-[0.18em] uppercase"
        >
          {cta.label}
        </a>
      ) : (
        <Link
          href={cta.href}
          className="btn-wine mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 font-sans-clean text-sm font-semibold tracking-[0.18em] uppercase"
        >
          {cta.label}
        </Link>
      )}
    </div>
  );
}