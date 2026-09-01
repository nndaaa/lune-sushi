import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { DISHES, getDish } from "@/data/dishes";
import { DishInteractive } from "./DishInteractive";

export function generateStaticParams() {
  return DISHES.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dish = getDish(slug);
  if (!dish) return {};
  return {
    title: `${dish.name} — Lune Sushi`,
    description: dish.longDescription,
  };
}

export default async function DishPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dish = getDish(slug);
  if (!dish) notFound();

  return (
    <div className="flex flex-col flex-1">
      <SiteHeader />
      <main className="flex flex-col flex-1 bg-blush">
        <section className="mx-auto w-full max-w-6xl px-6 pb-20 pt-10 sm:px-10">
          {/* Breadcrumb */}
          <nav className="font-sans-clean text-sm text-muted" aria-label="Fil d'Ariane">
            <Link href="/carte/" className="hover:text-wine">
              La carte
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink">{dish.name}</span>
          </nav>

          {/* Desktop split */}
          <div className="mt-8 hidden gap-14 md:grid md:grid-cols-2">
            <DishImage image={dish.image} name={dish.name} badge={dish.badge} />
            <DishInfoStatic dish={dish} interactive={<DishInteractive price={dish.price} name={dish.name} />} />
          </div>

          {/* Mobile stack */}
          <div className="md:hidden">
            <DishImage image={dish.image} name={dish.name} badge={dish.badge} />
            <div className="mt-6">
              <DishInfoStatic dish={dish} interactive={<DishInteractive price={dish.price} name={dish.name} />} />
            </div>
          </div>

          {/* House note */}
          <div className="mt-14 rounded-2xl bg-blush p-8 sm:p-12">
            <h2 className="font-serif-display text-3xl font-medium tracking-tight text-wine">
              Le mot de la maison
            </h2>
            <p className="mt-4 max-w-xl font-sans-clean text-base text-ink/80">
              {dish.houseNote}
            </p>
            <p className="mt-8 font-sans-clean text-sm text-muted">
              Allergènes : {dish.allergens}
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function DishImage({
  image,
  name,
  badge,
}: {
  image: string;
  name: string;
  badge?: string;
}) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-blush">
      <Image
        src={image}
        alt={name}
        width={1200}
        height={900}
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="h-auto w-full object-contain"
      />
      {badge && (
        <span className="absolute left-4 top-4 inline-flex items-center rounded-md bg-wine px-3 py-1.5 font-sans-clean text-[11px] font-semibold tracking-[0.2em] text-ivory uppercase shadow">
          {badge}
        </span>
      )}
    </div>
  );
}

function DishInfoStatic({
  dish,
  interactive,
}: {
  dish: { name: string; pieces: string; price: number; longDescription: string; allergens: string };
  interactive: React.ReactNode;
}) {
  const tagline =
    dish.name === "Sushi saumon"
      ? ["La délicatesse du saumon,", "la simplicité du riz."]
      : dish.name === "Maki du jardin"
        ? ["La fraîcheur du jardin,", "la douceur du riz."]
        : dish.name === "Le plateau Lune"
          ? ["À partager,", "autour d'une table douce."]
          : ["Le meilleur de la saison,", "à savourer lentement."];
  return (
    <div className="flex flex-col">
      <h1 className="font-serif-display text-5xl font-medium leading-[1.1] tracking-tight text-wine sm:text-[56px]">
        {dish.name}
      </h1>
      <p className="mt-4 font-sans-clean text-[15px] text-muted">{dish.pieces}</p>
      <p className="mt-8 font-serif-display text-3xl font-medium tracking-tight text-wine">
        {dish.price.toFixed(2).replace(".", ",")} €
      </p>
      <p className="mt-8 font-serif-display text-2xl italic leading-snug text-wine">
        {tagline[0]}
        <br />
        {tagline[1]}
      </p>
      <p className="mt-5 max-w-md font-sans-clean text-[15px] leading-relaxed text-ink/80">
        {dish.longDescription}
      </p>
      {interactive}
      <p className="mt-8 font-sans-clean text-[13px] text-muted">
        Bon à savoir — Allergènes : {dish.allergens}
      </p>
    </div>
  );
}