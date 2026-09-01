import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

export default function MaisonPage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader />
      <main className="flex flex-col flex-1 bg-blush">
        <section className="mx-auto w-full max-w-3xl px-6 py-20 sm:px-10">
          <h1 className="font-serif-display text-5xl font-medium tracking-tight text-wine sm:text-6xl">
            La maison
          </h1>
          <p className="mt-6 font-serif-display text-2xl italic text-wine">
            L&rsquo;art du sushi, avec douceur.
          </p>
          <div className="mt-10 space-y-5 font-sans-clean text-[17px] leading-relaxed text-ink/85">
            <p>
              Lune Sushi est née d&rsquo;une idée simple : partager à Paris une cuisine japonaise
              préparée avec attention, sans esbroufe, dans le respect du produit et du rythme de
              chaque service.
            </p>
            <p>
              Notre poisson arrive chaque matin, nos légumes sont choisis chez nos producteurs
              franciliens, et notre riz est préparé à la maison. La carte est volontairement
              courte : quelques créations signatures, renouvelées au fil des saisons.
            </p>
            <p>
              Sur place, à emporter ou en livraison, nous voulons qu&rsquo;un repas chez Lune soit
              toujours un moment doux.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/carte/"
              className="btn-wine rounded-full px-7 py-4 font-sans-clean text-sm font-semibold tracking-[0.18em] uppercase"
            >
              Découvrir la carte
            </Link>
            <Link
              href="/infos/"
              className="rounded-full border border-line bg-ivory px-7 py-4 font-sans-clean text-sm font-semibold tracking-[0.18em] uppercase text-wine hover:border-wine"
            >
              Infos pratiques
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}