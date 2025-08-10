export interface Product {
  name: string;
  category: string;
  description: string;
  benefits: string[];
  image: string;
}

type TranslationFunction = {
  (key: string): string;
  (key: string, options: { returnObjects: true }): string[];
};

export const getProducts = (t: TranslationFunction): Product[] => [
  {
    name: t("products.items.vermigro.name"),
    category: t("products.categories.soilRootEnhancer"),
    description: t("products.items.vermigro.description"),
    benefits: t("products.items.vermigro.benefits", {
      returnObjects: true,
    }) as string[],
    image: "/api/placeholder/300/200",
  },
  {
    name: t("products.items.jumbogrip.name"),
    category: t("products.categories.soilRootEnhancer"),
    description: t("products.items.jumbogrip.description"),
    benefits: t("products.items.jumbogrip.benefits", {
      returnObjects: true,
    }) as string[],
    image: "/api/placeholder/300/200",
  },
  {
    name: t("products.items.rewardN.name"),
    category: t("products.categories.fungalControl"),
    description: t("products.items.rewardN.description"),
    benefits: t("products.items.rewardN.benefits", {
      returnObjects: true,
    }) as string[],
    image: "/api/placeholder/300/200",
  },
  {
    name: t("products.items.orthogrip18.name"),
    category: t("products.categories.fungalControl"),
    description: t("products.items.orthogrip18.description"),
    benefits: t("products.items.orthogrip18.benefits", {
      returnObjects: true,
    }) as string[],
    image: "/api/placeholder/300/200",
  },
  {
    name: t("products.items.technovit.name"),
    category: t("products.categories.stressWeatherProtection"),
    description: t("products.items.technovit.description"),
    benefits: t("products.items.technovit.benefits", {
      returnObjects: true,
    }) as string[],
    image: "/api/placeholder/300/200",
  },
  {
    name: t("products.items.microgrip.name"),
    category: t("products.categories.micronutrientSupplement"),
    description: t("products.items.microgrip.description"),
    benefits: t("products.items.microgrip.benefits", {
      returnObjects: true,
    }) as string[],
    image: "/api/placeholder/300/200",
  },
  {
    name: t("products.items.setterDF.name"),
    category: t("products.categories.fruitGrowthQualityEnhancer"),
    description: t("products.items.setterDF.description"),
    benefits: t("products.items.setterDF.benefits", {
      returnObjects: true,
    }) as string[],
    image: "/api/placeholder/300/200",
  },
  {
    name: t("products.items.goldHut98.name"),
    category: t("products.categories.flowerFruitDevelopment"),
    description: t("products.items.goldHut98.description"),
    benefits: t("products.items.goldHut98.benefits", {
      returnObjects: true,
    }) as string[],
    image: "/api/placeholder/300/200",
  },
  {
    name: t("products.items.flowerStart.name"),
    category: t("products.categories.flowerFruitDevelopment"),
    description: t("products.items.flowerStart.description"),
    benefits: t("products.items.flowerStart.benefits", {
      returnObjects: true,
    }) as string[],
    image: "/api/placeholder/300/200",
  },
];
