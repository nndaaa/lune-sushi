import Image from "next/image";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader />
      <main className="flex flex-col flex-1">
        <HeroSection />
        <PromiseSection />
        <SaisonsSection />
      </main>
      <SiteFooter />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="grid w-full grid-cols-1 md:grid-cols-2">
      <div className="order-2 bg-blush px-6 py-12 sm:px-12 sm:py-16 md:order-1 md:px-16 md:py-24 lg:px-24 lg:py-28">
        <h1 className="font-serif-display text-4xl font-medium leading-[1.1] tracking-tight text-wine sm:text-5xl lg:text-[56px]">
          Cuisine japonaise
          <br />
          au parfum de Paris
        </h1>
        <p className="mt-8 max-w-md font-sans-clean text-base leading-relaxed text-ink/80 sm:text-[17px]">
          Des instants délicats, imaginés chaque
          <br className="hidden sm:block" />
          jour avec des produits choisis.
        </p>
        <p className="mt-10 font-serif-display text-xl italic text-gold sm:text-[22px]">
          L&rsquo;art du sushi, avec douceur.
        </p>
        <Link
          href="/carte/"
          className="btn-wine mt-10 inline-flex items-center rounded-full px-7 py-4 font-sans-clean text-sm font-semibold tracking-[0.18em] uppercase"
        >
          Découvrir la carte
        </Link>
        <p className="mt-10 font-sans-clean text-sm text-muted">
          Paris · Sur place · À emporter · Livraison
        </p>
      </div>
      <div className="relative order-1 aspect-[4/3] w-full overflow-hidden md:order-2 md:aspect-auto md:h-full md:min-h-[640px]">
        <Image
          src="/lune-sushi/images/hero-sushi.jpg"
          alt="Assortiment de sushi sur une assiette sombre avec baguettes"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}

function PromiseSection() {
  return (
    <section className="w-full bg-ivory px-6 py-20 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif-display text-3xl font-medium tracking-tight text-wine sm:text-4xl">
          Une table simple, une attention pour chaque détail.
        </h2>
        <p className="mt-4 font-sans-clean text-base text-muted sm:text-[17px]">
          Le midi, le soir, pour deux ou pour se faire plaisir.
        </p>
      </div>
    </section>
  );
}

function SaisonsSection() {
  return (
    <section className="grid w-full grid-cols-1 items-center gap-8 bg-ivory px-6 pb-24 sm:px-10 md:grid-cols-[1fr_minmax(220px,1fr)_1fr] md:gap-12 lg:px-16">
      <div className="w-full overflow-hidden rounded-sm bg-blush">
        <Image
          src="/lune-sushi/images/menu-sushi.jpg"
          alt="Plateau de maki sur un bateau en bois"
          width={1200}
          height={960}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="h-auto w-full object-contain"
        />
      </div>
      <div className="flex flex-col items-center text-center md:items-start md:px-4 md:text-left">
        <h3 className="font-serif-display text-3xl font-medium tracking-tight text-wine sm:text-4xl">
          Saisons
          <br />
          et saveurs
        </h3>
        <p className="mt-5 max-w-xs font-sans-clean text-[15px] leading-relaxed text-muted">
          Une carte courte,
          <br />
          fraîche et sensible.
        </p>
        <Link
          href="/maison/"
          className="btn-gold mt-7 inline-flex items-center rounded-full px-6 py-3 font-sans-clean text-sm font-semibold tracking-[0.18em] uppercase"
        >
          Notre histoire
        </Link>
      </div>
      <div className="w-full overflow-hidden rounded-sm bg-blush">
        <Image
          src="/lune-sushi/images/season-sushi.jpg"
          alt="Sushi saumon sur planche de bois"
          width={1800}
          height={3197}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="h-auto w-full object-contain"
        />
      </div>
    </section>
  );
}