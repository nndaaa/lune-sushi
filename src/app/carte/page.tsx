"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { DISHES, CATEGORIES, type Dish } from "@/data/dishes";

type FilterId = (typeof CATEGORIES)[number]["id"];

export default function CartePage() {
  const [filter, setFilter] = useState<FilterId>("all");

  const visible = useMemo<Dish[]>(
    () => (filter === "all" ? DISHES : DISHES.filter((d) => d.category === filter)),
    [filter],
  );

  return (
    <div className="flex flex-col flex-1">
      <SiteHeader />
      <main className="flex flex-col flex-1 bg-blush">
        <section className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:px-10 sm:pb-20 sm:pt-14">
          <h1 className="font-serif-display text-5xl font-medium tracking-tight text-wine sm:text-6xl">
            La carte
          </h1>
          <p className="mt-3 font-sans-clean text-base text-muted sm:text-[17px]">
            Quelques créations choisies pour les petites et grandes faims.
          </p>

          {/* Desktop: pill filters */}
          <div className="mt-10 hidden flex-wrap items-center gap-3 md:flex">
            {CATEGORIES.map((cat) => {
              const active = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setFilter(cat.id)}
                  className={[
                    "rounded-full border px-5 py-2 font-sans-clean text-sm transition-colors",
                    active
                      ? "btn-wine border-wine"
                      : "border-line bg-ivory text-ink hover:border-wine hover:text-wine",
                  ].join(" ")}
                  aria-pressed={active}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Mobile: native select */}
          <div className="mt-8 md:hidden">
            <label className="sr-only" htmlFor="carte-filter">
              Filtrer la carte
            </label>
            <select
              id="carte-filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value as FilterId)}
              className="w-full rounded-xl border border-line bg-ivory px-4 py-3 font-sans-clean text-[15px] text-ink"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.label === "Tout" ? "Toutes nos créations" : cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop grid */}
          <div className="mt-12 hidden grid-cols-1 gap-8 md:grid md:grid-cols-3 md:gap-10">
            {visible.map((dish) => (
              <DishCard key={dish.slug} dish={dish} />
            ))}
          </div>

          {/* Mobile stack */}
          <div className="mt-8 flex flex-col gap-5 md:hidden">
            {visible.map((dish) => (
              <DishCardMobile key={dish.slug} dish={dish} />
            ))}
          </div>

          <p className="mt-16 text-center font-sans-clean text-sm text-muted">
            Un conseil ? Appelez-nous, nous préparons votre commande avec vous.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function DishCard({ dish }: { dish: Dish }) {
  return (
    <article className="flex flex-col rounded-xl border border-line bg-ivory p-3 shadow-[0_2px_12px_rgba(45,41,38,0.04)]">
      <div className="relative aspect-[5/3] w-full overflow-hidden rounded-lg">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
        <h3 className="font-serif-display text-2xl font-medium tracking-tight text-wine">
          {dish.name}
        </h3>
        <p className="mt-1 font-sans-clean text-sm text-muted">{dish.shortDescription}</p>
        <div className="mt-4 flex items-end justify-between">
          <span className="font-serif-display text-xl font-medium text-wine">
            {dish.price.toFixed(2).replace(".", ",")} €
          </span>
          <Link
            href={`/carte/${dish.slug}/`}
            className="btn-wine rounded-full px-5 py-2.5 font-sans-clean text-xs font-semibold tracking-[0.2em] uppercase"
          >
            Choisir
          </Link>
        </div>
      </div>
    </article>
  );
}

function DishCardMobile({ dish }: { dish: Dish }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-ivory shadow-[0_2px_12px_rgba(45,41,38,0.04)]">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="flex items-end justify-between gap-3 px-5 py-5">
        <div className="min-w-0">
          <h3 className="font-serif-display text-2xl font-medium tracking-tight text-wine">
            {dish.name}
          </h3>
          <p className="mt-1 font-sans-clean text-sm text-muted">{dish.shortDescription}</p>
          <span className="mt-3 block font-serif-display text-xl font-medium text-wine">
            {dish.price.toFixed(2).replace(".", ",")} €
          </span>
        </div>
        <Link
          href={`/carte/${dish.slug}/`}
          className="btn-wine shrink-0 rounded-full px-5 py-2.5 font-sans-clean text-xs font-semibold tracking-[0.2em] uppercase"
        >
          Choisir
        </Link>
      </div>
    </article>
  );
}