import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

export default function InfosPage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader />
      <main className="flex flex-col flex-1 bg-blush">
        <section className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-10">
          <h1 className="font-serif-display text-5xl font-medium tracking-tight text-wine sm:text-6xl">
            Infos pratiques
          </h1>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <InfoCard
              title="Adresse"
              lines={[
                "Lune Sushi",
                "12 rue des Fleurs",
                "75008 Paris",
              ]}
            />
            <InfoCard
              title="Horaires"
              lines={[
                "Lundi — Samedi : 12h00 — 14h30 · 19h00 — 22h30",
                "Dimanche : 19h00 — 22h30",
                "Fermé les jours fériés",
              ]}
            />
            <InfoCard
              title="Réservation & commande"
              lines={[
                "Téléphone : 01 84 80 22 90",
                "Sur place · À emporter · Livraison",
                "Commande en ligne via notre site",
              ]}
            />
            <InfoCard
              title="Allergènes"
              lines={[
                "Notre équipe vous indique la liste complète",
                "Allergènes principaux : poisson, soja, sésame, gluten",
                "N&rsquo;hésitez pas à nous prévenir à la commande",
              ]}
            />
          </div>

          <div className="mt-14 rounded-2xl bg-blush p-8 sm:p-12">
            <h2 className="font-serif-display text-3xl font-medium tracking-tight text-wine">
              Mentions légales
            </h2>
            <p className="mt-4 font-sans-clean text-[15px] leading-relaxed text-ink/80">
              Site prototype réalisé pour démonstration. Toutes les informations sont indicatives.
              Pour toute question, contactez-nous au 01 84 80 22 90.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function InfoCard({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="rounded-xl border border-line bg-ivory p-7">
      <h2 className="font-serif-display text-2xl font-medium tracking-tight text-wine">
        {title}
      </h2>
      <div className="mt-4 space-y-2 font-sans-clean text-[15px] leading-relaxed text-ink/85">
        {lines.map((l, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: l }} />
        ))}
      </div>
    </div>
  );
}