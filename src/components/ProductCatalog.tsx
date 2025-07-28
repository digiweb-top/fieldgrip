export default function ProductCatalog() {
  const allProducts = [
    {
      name: "Vermigro",
      category: "Soil & Root Enhancer",
      description:
        "Increases the number of useful microbes in soil, improves yield, and enhances plant health",
      benefits: [
        "Enhanced soil microbes",
        "Improved yield",
        "Better plant health",
      ],
      image: "/api/placeholder/300/200",
    },
    {
      name: "Jumbogrip",
      category: "Soil & Root Enhancer",
      description:
        "Significantly increases fruit size and weight, enhances quality for various crops",
      benefits: ["Larger fruits", "Better quality", "Higher weight"],
      image: "/api/placeholder/300/200",
    },
    {
      name: "Reward-N",
      category: "Fungal Control",
      description:
        "Controls rot and diseases in ginger and turmeric; recommended for drip or drenching",
      benefits: ["Disease control", "Rot prevention", "Crop protection"],
      image: "/api/placeholder/300/200",
    },
    {
      name: "Orthogrip 18",
      category: "Fungal Control",
      description:
        "Reduces abiotic stress from temperature, excess rain, or disease",
      benefits: [
        "Stress reduction",
        "Weather protection",
        "Disease resistance",
      ],
      image: "/api/placeholder/300/200",
    },
    {
      name: "Technovit",
      category: "Stress/Weather Protection",
      description:
        "Helps plants withstand environmental changes and relieves stress. Increases branches and improves plant health",
      benefits: ["Stress relief", "More branches", "Environmental resistance"],
      image: "/api/placeholder/300/200",
    },
    {
      name: "Microgrip",
      category: "Micronutrient Supplement",
      description:
        "Contains all essential minor nutrients as per government standard; increases yield by 30–40%",
      benefits: [
        "Essential nutrients",
        "30-40% yield increase",
        "Government standard",
      ],
      image: "/api/placeholder/300/200",
    },
    {
      name: "Setter DF",
      category: "Fruit Growth & Quality Enhancer",
      description:
        "Specialized formulation for enhanced fruit setting and development",
      benefits: [
        "Better fruit setting",
        "Enhanced development",
        "Quality improvement",
      ],
      image: "/api/placeholder/300/200",
    },
    {
      name: "Gold Hut-98",
      category: "Flower/Fruit Development",
      description:
        "Increases the number of white roots, improves plant quality and production",
      benefits: ["More white roots", "Better quality", "Higher production"],
      image: "/api/placeholder/300/200",
    },
    {
      name: "Flower Start",
      category: "Flower/Fruit Development",
      description:
        "Flower induction booster for enhanced flowering and fruit set",
      benefits: ["Flower induction", "Enhanced flowering", "Better fruit set"],
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
            Our Products
          </h2>
          <p
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-5xl mx-auto px-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Complete range of specialized agricultural products designed to
            maximize your crop potential
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
                  <p className="text-gray-500 text-sm">Product Image</p>
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
                    Key Benefits:
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
                    Learn More
                  </button>
                  <button className="flex-1 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-1.5 sm:py-2 px-2 sm:px-3 rounded-md transition-colors duration-200 text-xs sm:text-sm font-medium">
                    Get Quote
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
