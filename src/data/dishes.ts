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

const images = {
  saumon: "/lune-sushi/images/dish-saumon.jpg",
  maki: "/lune-sushi/images/dish-maki-jardin.jpg",
  plateau: "/lune-sushi/images/dish-plateau-lune.jpg",
  vegetal: "/lune-sushi/images/dish-vegetal-saison.jpg",
};

export const DISHES: Dish[] = [
  // Sushi
  {
    slug: "sushi-saumon", name: "Sushi saumon", category: "sushi", price: 12.9,
    shortDescription: "Préparé à la commande", longDescription: "Préparé au moment de votre commande, avec du saumon frais et une pointe de wasabi.",
    pieces: "8 pièces · Saumon frais, riz vinaigré, wasabi", ingredients: "Saumon frais, riz vinaigré, wasabi", badge: "Création maison", image: images.saumon, allergens: "poisson, soja, sésame", houseNote: "Un plat pensé pour être savouré lentement, sur place, à deux ou chez vous.",
  },
  {
    slug: "sushi-thon", name: "Sushi thon rouge", category: "sushi", price: 13.9,
    shortDescription: "Découpe du jour", longDescription: "Des tranches de thon rouge sélectionnées pour leur texture fondante, posées sur un riz tiède.",
    pieces: "8 pièces · Thon rouge, riz vinaigré, wasabi", ingredients: "Thon rouge, riz vinaigré, wasabi", image: images.saumon, allergens: "poisson, soja, sésame", houseNote: "Une création fine, pour les amateurs de goût franc et délicat.",
  },
  {
    slug: "sushi-daurade", name: "Sushi daurade", category: "sushi", price: 12.5,
    shortDescription: "Fraîcheur iodée", longDescription: "La daurade révèle une chair claire et douce, simplement accompagnée d'un riz parfumé.",
    pieces: "8 pièces · Daurade, riz vinaigré, yuzu", ingredients: "Daurade, riz vinaigré, yuzu, wasabi", image: images.saumon, allergens: "poisson, soja, sésame", houseNote: "Un sushi léger et lumineux, à savourer avec un thé japonais.",
  },
  {
    slug: "sushi-crevette", name: "Sushi crevette", category: "sushi", price: 11.9,
    shortDescription: "Douceur marine", longDescription: "Des crevettes tendres préparées à la commande, avec une touche de citron vert.",
    pieces: "8 pièces · Crevette, riz vinaigré, citron vert", ingredients: "Crevette, riz vinaigré, citron vert, wasabi", image: images.saumon, allergens: "crustacés, soja, sésame", houseNote: "Une assiette douce et généreuse, idéale pour commencer le repas.",
  },

  // Maki
  {
    slug: "maki-du-jardin", name: "Maki du jardin", category: "maki", price: 10.5,
    shortDescription: "Préparé à la commande", longDescription: "Un assortiment végétal, frais et coloré, préparé au moment du service.",
    pieces: "18 pièces · Légumes de saison, riz, algue nori", ingredients: "Concombre, avocat, carotte, radis, laitue, riz, nori", image: images.maki, allergens: "soja, sésame", houseNote: "Pour un déjeuner léger, ou à partager autour d'une table en terrasse.",
  },
  {
    slug: "maki-saumon-avocat", name: "Maki saumon avocat", category: "maki", price: 11.5,
    shortDescription: "Le classique doux", longDescription: "Le fondant du saumon et la douceur de l'avocat, roulés dans une feuille de nori croquante.",
    pieces: "18 pièces · Saumon, avocat, riz, nori", ingredients: "Saumon, avocat, riz vinaigré, algue nori", image: images.maki, allergens: "poisson, soja, sésame", houseNote: "Un incontournable, simple et rassurant, préparé juste avant votre arrivée.",
  },
  {
    slug: "maki-thon-epice", name: "Maki thon épicé", category: "maki", price: 12.5,
    shortDescription: "Une pointe de caractère", longDescription: "Du thon relevé avec une sauce maison délicatement pimentée et des herbes fraîches.",
    pieces: "18 pièces · Thon, sauce maison, sésame", ingredients: "Thon, mayonnaise maison, sriracha, sésame, riz, nori", image: images.maki, allergens: "poisson, œuf, soja, sésame", houseNote: "Pour celles et ceux qui aiment un peu de vivacité, sans masquer le poisson.",
  },
  {
    slug: "maki-croustillant", name: "Maki croustillant", category: "maki", price: 11.9,
    shortDescription: "Texture et fraîcheur", longDescription: "Un maki aux légumes frais et aux éclats croustillants, pour une bouchée pleine de contraste.",
    pieces: "18 pièces · Avocat, concombre, oignons frits", ingredients: "Avocat, concombre, carotte, oignons frits, riz, nori", image: images.maki, allergens: "gluten, soja, sésame", houseNote: "Une option généreuse qui plaît aux petits comme aux grands.",
  },

  // Plateaux
  {
    slug: "plateau-lune", name: "Le plateau Lune", category: "plateaux", price: 29.9,
    shortDescription: "Préparé à la commande", longDescription: "La signature de la maison : un plateau à partager pour deux ou trois convives.",
    pieces: "36 pièces · Sushi, maki, sashimi, temaki", ingredients: "Saumon, thon, daurade, avocat, concombre, riz, nori, wasabi", badge: "Signature", image: images.plateau, allergens: "poisson, soja, sésame", houseNote: "Notre plateau signature, à partager au centre de la table, pour un soir doux.",
  },
  {
    slug: "plateau-paris", name: "Le plateau Paris", category: "plateaux", price: 24.9,
    shortDescription: "Pour deux", longDescription: "Un assortiment équilibré de sushi et maki, imaginé pour un dîner à deux sans hésitation.",
    pieces: "28 pièces · Sushi, maki, california", ingredients: "Saumon, thon, crevette, avocat, concombre, riz, nori", image: images.plateau, allergens: "poisson, crustacés, soja, sésame", houseNote: "Le plateau du vendredi soir : varié, frais et prêt à partager.",
  },
  {
    slug: "plateau-sakura", name: "Le plateau Sakura", category: "plateaux", price: 39.9,
    shortDescription: "Pour trois à quatre", longDescription: "Un grand plateau de fête, coloré et généreux, pour réunir les amateurs de sushi.",
    pieces: "52 pièces · Sushi, maki, sashimi, végétal", ingredients: "Saumon, thon, daurade, crevette, légumes, riz, nori", badge: "À partager", image: images.plateau, allergens: "poisson, crustacés, soja, sésame", houseNote: "Une grande tablée, quelques bougies, et le plaisir de goûter à tout.",
  },
  {
    slug: "plateau-midi", name: "Le plateau du midi", category: "plateaux", price: 16.9,
    shortDescription: "Léger et complet", longDescription: "Une formule fraîche et équilibrée, pensée pour une pause déjeuner simple et raffinée.",
    pieces: "20 pièces · Sushi, maki, salade", ingredients: "Saumon, avocat, concombre, riz vinaigré, nori", image: images.plateau, allergens: "poisson, soja, sésame", houseNote: "Un déjeuner qui laisse de la place à l'après-midi, sans renoncer au plaisir.",
  },

  // Végétal
  {
    slug: "vegetal-de-saison", name: "Végétal de saison", category: "vegetal", price: 11.9,
    shortDescription: "Préparé à la commande", longDescription: "Une sélection végétale, suivant les arrivages et la saison parisienne.",
    pieces: "24 pièces · Légumes, herbes fraîches, riz vinaigré", ingredients: "Légumes de saison, herbes fraîches, riz vinaigré, algue nori", image: images.vegetal, allergens: "soja, sésame", houseNote: "Une assiette qui change au fil des semaines, pour rester surpris et léger.",
  },
  {
    slug: "avocat-sesame", name: "Avocat sésame", category: "vegetal", price: 9.9,
    shortDescription: "Onctueux et végétal", longDescription: "Un maki soyeux à l'avocat, relevé par la chaleur du sésame grillé.",
    pieces: "18 pièces · Avocat, sésame, riz, nori", ingredients: "Avocat, sésame grillé, riz vinaigré, algue nori", image: images.vegetal, allergens: "soja, sésame", houseNote: "Un grand classique végétal, d'une simplicité très gourmande.",
  },
  {
    slug: "concombre-menthe", name: "Concombre & menthe", category: "vegetal", price: 9.5,
    shortDescription: "Croquant et frais", longDescription: "Le concombre croquant rencontre la menthe fraîche dans un maki particulièrement léger.",
    pieces: "18 pièces · Concombre, menthe, riz, nori", ingredients: "Concombre, menthe fraîche, riz vinaigré, algue nori", image: images.vegetal, allergens: "soja, sésame", houseNote: "La fraîcheur idéale pour les journées lumineuses et les envies de légèreté.",
  },
  {
    slug: "patate-douce", name: "Patate douce rôtie", category: "vegetal", price: 10.9,
    shortDescription: "Doux et chaleureux", longDescription: "Une patate douce rôtie et fondante, associée à l'avocat et à une sauce sésame maison.",
    pieces: "18 pièces · Patate douce, avocat, sauce sésame", ingredients: "Patate douce rôtie, avocat, sésame, riz, nori", badge: "Nouveau", image: images.vegetal, allergens: "soja, sésame", houseNote: "Une bouchée végétale qui réchauffe le cœur, même les jours de pluie.",
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