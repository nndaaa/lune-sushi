import Link from "next/link";
import Image from "next/image";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { DISHES } from "@/data/dishes";

export default function PlateauxPage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader />
      <main className="flex flex-col flex-1 bg-blush">
        <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
          <h1 className="font-serif-display text-5xl font-medium tracking-tight text-wine sm:text-6xl">
            Nos plateaux
          </h1>
          <p className="mt-3 font-sans-clean text-[17px] text-muted">
            À partager, à deux ou à plusieurs, pour un soir doux.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
            {DISHES.filter((d) => d.category === "plateaux").map((dish) => (
              <article
                key={dish.slug}
                className="flex flex-col overflow-hidden rounded-xl border border-line bg-ivory"
              >
                <div className="w-full bg-blush">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="h-auto w-full object-contain"
                  />
                </div>
                <div className="flex items-end justify-between p-6">
                  <div>
                    <h3 className="font-serif-display text-2xl font-medium text-wine">
                      {dish.name}
                    </h3>
                    <p className="mt-1 font-sans-clean text-sm text-muted">{dish.pieces}</p>
                    <span className="mt-3 block font-serif-display text-xl font-medium text-wine">
                      {dish.price.toFixed(2).replace(".", ",")} €
                    </span>
                  </div>
                  <Link
                    href={`/carte/${dish.slug}/`}
                    className="btn-wine rounded-full px-5 py-2.5 font-sans-clean text-xs font-semibold tracking-[0.2em] uppercase"
                  >
                    Choisir
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/carte/"
              className="font-sans-clean text-[15px] font-semibold tracking-wider text-wine underline-offset-4 hover:underline"
            >
              Voir toute la carte →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}