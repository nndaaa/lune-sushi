"use client";

import { useState } from "react";

export function DishInteractive({ price, name }: { price: number; name: string }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const total = (price * qty).toFixed(2).replace(".", ",");

  return (
    <>
      <div className="mt-10 flex items-center gap-6">
        <span className="font-sans-clean text-sm tracking-wide text-ink">Quantité</span>
        <div className="flex items-center gap-3 rounded-full border border-line bg-ivory px-4 py-2">
          <button
            type="button"
            onClick={() => setQty(Math.max(1, qty - 1))}
            aria-label="Diminuer la quantité"
            className="font-sans-clean text-xl leading-none text-wine hover:opacity-70"
          >
            −
          </button>
          <span className="w-8 text-center font-sans-clean text-base text-ink">{qty}</span>
          <button
            type="button"
            onClick={() => setQty(qty + 1)}
            aria-label="Augmenter la quantité"
            className="font-sans-clean text-xl leading-none text-wine hover:opacity-70"
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setAdded(true)}
        className="btn-wine mt-8 inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-sans-clean text-sm font-semibold tracking-[0.18em] uppercase"
      >
        {added ? "Ajouté · " : "Ajouter au panier · "}
        {total} €
      </button>
      <span className="sr-only">{name}</span>
    </>
  );
}