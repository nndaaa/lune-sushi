export type Dish = {
  slug: string;
  name: string;
  category: "sushi" | "maki" | "plateaux" | "vegetal";
  shortDescription: string;
  longDescription: string;
  pieces: string;
  ingredients: string;
  price: number;
  badge?: string;
  image: string;
  allergens: string;
  houseNote: string;
};

export const DISHES: Dish[] = [
  {
    slug: "sushi-saumon",
    name: "Sushi saumon",
    category: "sushi",
    shortDescription: "Préparé à la commande",
    longDescription:
      "Préparé au moment de votre commande, avec du poisson frais et une pointe de wasabi.",
    pieces: "8 pièces · Saumon frais, riz vinaigré, wasabi",
    ingredients: "Saumon frais, riz vinaigré, wasabi",
    price: 12.9,
    badge: "Création maison",
    image: "/images/dish-saumon.jpg",
    allergens: "poisson, soja, sésame",
    houseNote:
      "Un plat pensé pour être savouré lentement, sur place, à deux ou chez vous.",
  },
  {
    slug: "maki-du-jardin",
    name: "Maki du jardin",
    category: "maki",
    shortDescription: "Préparé à la commande",
    longDescription:
      "Un assortiment végétal, frais et coloré, préparé au moment du service.",
    pieces: "18 pièces · Légumes de saison, riz, algue nori",
    ingredients: "Concombre, avocat, carotte, radis, laitue, riz, nori",
    price: 10.5,
    image: "/images/dish-maki-jardin.jpg",
    allergens: "soja, sésame",
    houseNote:
      "Pour un déjeuner léger, ou à partager autour d'une table en terrasse.",
  },
  {
    slug: "plateau-lune",
    name: "Le plateau Lune",
    category: "plateaux",
    shortDescription: "Préparé à la commande",
    longDescription:
      "La signature de la maison : un plateau à partager pour deux ou trois convives.",
    pieces: "36 pièces · Sushi, maki, sashimi, temaki",
    ingredients: "Saumon, thon, daurade, avocat, concombre, riz, nori, wasabi",
    price: 29.9,
    badge: "Signature",
    image: "/images/dish-plateau-lune.jpg",
    allergens: "poisson, soja, sésame",
    houseNote:
      "Notre plateau signature, à partager au centre de la table, pour un soir doux.",
  },
  {
    slug: "vegetal-de-saison",
    name: "Végétal de saison",
    category: "vegetal",
    shortDescription: "Préparé à la commande",
    longDescription:
      "Une sélection végétale, suivant les arrivages et la saison parisienne.",
    pieces: "24 pièces · Légumes, herbes fraîches, riz vinaigré",
    ingredients: "Légumes de saison, herbes fraîches, riz vinaigré, algue nori",
    price: 11.9,
    image: "/images/dish-vegetal-saison.jpg",
    allergens: "soja, sésame",
    houseNote:
      "Une assiette qui change au fil des semaines, pour rester surpris et léger.",
  },
];

export function getDish(slug: string): Dish | undefined {
  return DISHES.find((d) => d.slug === slug);
}

export const CATEGORIES = [
  { id: "all", label: "Tout" },
  { id: "sushi", label: "Sushi" },
  { id: "maki", label: "Maki" },
  { id: "plateaux", label: "Plateaux" },
  { id: "vegetal", label: "Végétal" },
] as const;