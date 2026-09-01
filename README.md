# Lune Sushi

Site officiel prototype du restaurant **Lune Sushi** (Paris).
Réalisé avec **Next.js + React + TypeScript + Tailwind CSS**.

## Pages

| URL | Contenu |
|---|---|
| `/` | Accueil — hero, promesse, saisons |
| `/carte/` | La carte — liste des créations (filtres Sushi / Maki / Plateaux / Végétal) |
| `/carte/sushi-saumon/` | Détail produit Sushi saumon (CRÉATION MAISON) |
| `/carte/maki-du-jardin/` | Détail produit Maki du jardin |
| `/carte/plateau-lune/` | Détail produit Le plateau Lune (SIGNATURE) |
| `/carte/vegetal-de-saison/` | Détail produit Végétal de saison |
| `/plateaux/` | Nos plateaux |
| `/maison/` | La maison (histoire) |
| `/infos/` | Infos pratiques (adresse, horaires, allergènes) |
| `/commander/` | Commander (à emporter / livraison / sur place) |

## Commandes

```bash
npm install
npm run dev        # serveur de dev sur http://localhost:3000
npm run build      # build statique dans ./out
npx http-server out -p 4173 -s   # prévisualisation du build
```

## Déploiement

Le site est déployé automatiquement via GitHub Actions sur GitHub Pages
chaque `git push origin main`. URL publique :

```
https://nndaaa.github.io/lune-sushi/
```