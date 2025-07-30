import { useTranslation } from 'react-i18next';

export default function ProductCatalog() {
  const { t } = useTranslation();
  
  const allProducts = [
    {
      name: t('products.items.vermigro.name'),
      category: t('products.categories.soilRootEnhancer'),
      description: t('products.items.vermigro.description'),
      benefits: t('products.items.vermigro.benefits', { returnObjects: true }) as string[],
      image: "/api/placeholder/300/200",
    },
    {
      name: t('products.items.jumbogrip.name'),
      category: t('products.categories.soilRootEnhancer'),
      description: t('products.items.jumbogrip.description'),
      benefits: t('products.items.jumbogrip.benefits', { returnObjects: true }) as string[],
      image: "/api/placeholder/300/200",
    },
    {
      name: t('products.items.rewardN.name'),
      category: t('products.categories.fungalControl'),
      description: t('products.items.rewardN.description'),
      benefits: t('products.items.rewardN.benefits', { returnObjects: true }) as string[],
      image: "/api/placeholder/300/200",
    },
    {
      name: t('products.items.orthogrip18.name'),
      category: t('products.categories.fungalControl'),
      description: t('products.items.orthogrip18.description'),
      benefits: t('products.items.orthogrip18.benefits', { returnObjects: true }) as string[],
      image: "/api/placeholder/300/200",
    },
    {
      name: t('products.items.technovit.name'),
      category: t('products.categories.stressWeatherProtection'),
      description: t('products.items.technovit.description'),
      benefits: t('products.items.technovit.benefits', { returnObjects: true }) as string[],
      image: "/api/placeholder/300/200",
    },
    {
      name: t('products.items.microgrip.name'),
      category: t('products.categories.micronutrientSupplement'),
      description: t('products.items.microgrip.description'),
      benefits: t('products.items.microgrip.benefits', { returnObjects: true }) as string[],
      image: "/api/placeholder/300/200",
    },
    {
      name: t('products.items.setterDF.name'),
      category: t('products.categories.fruitGrowthQualityEnhancer'),
      description: t('products.items.setterDF.description'),
      benefits: t('products.items.setterDF.benefits', { returnObjects: true }) as string[],
      image: "/api/placeholder/300/200",
    },
    {
      name: t('products.items.goldHut98.name'),
      category: t('products.categories.flowerFruitDevelopment'),
      description: t('products.items.goldHut98.description'),
      benefits: t('products.items.goldHut98.benefits', { returnObjects: true }) as string[],
      image: "/api/placeholder/300/200",
    },
    {
      name: t('products.items.flowerStart.name'),
      category: t('products.categories.flowerFruitDevelopment'),
      description: t('products.items.flowerStart.description'),
      benefits: t('products.items.flowerStart.benefits', { returnObjects: true }) as string[],
      image: "/api/placeholder/300/200",
    },
  ];

  return (
    <section
      id="products"
      className="pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-br from-gray-50 to-green-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
            style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
          >
            {t('products.title')}
          </h2>
          <p
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-5xl mx-auto px-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {t('products.subtitle')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {allProducts.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image Placeholder */}
              <div className="h-32 sm:h-40 lg:h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl text-green-600">📦</span>
                  </div>
                  <p className="text-gray-500 text-sm">{t('products.productImage')}</p>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                {/* Category Badge */}
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3">
                  {product.category}
                </span>

                <h4
                  className="text-sm sm:text-lg lg:text-xl font-bold text-green-800 mb-2 sm:mb-3"
                  style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                >
                  {product.name}
                </h4>
                <p
                  className="text-gray-700 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {product.description}
                </p>

                <div className="space-y-1 sm:space-y-2">
                  <h5 className="font-semibold text-green-700 text-xs sm:text-sm">
                    {t('products.keyBenefits')}
                  </h5>
                  <ul className="space-y-1">
                    {product.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-xs sm:text-sm text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-1 sm:gap-2 mt-3 sm:mt-4">
                  <button className="flex-1 bg-green-600 text-white py-1.5 sm:py-2 px-2 sm:px-3 rounded-md hover:bg-green-700 transition-colors duration-200 text-xs sm:text-sm font-medium">
                    {t('products.learnMore')}
                  </button>
                  <button className="flex-1 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-1.5 sm:py-2 px-2 sm:px-3 rounded-md transition-colors duration-200 text-xs sm:text-sm font-medium">
                    {t('products.getQuote')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
