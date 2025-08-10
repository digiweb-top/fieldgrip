import { useTranslation } from "react-i18next";
import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { t } = useTranslation();

  const handleLearnMore = () => {
    // TODO: Navigate to product detail page or open modal
    console.log("Learn more about:", product.name);
  };

  const handleGetQuote = () => {
    // TODO: Open contact form pre-filled with product name
    console.log("Get quote for:", product.name);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Product Image Placeholder */}
      <div className="h-32 sm:h-40 lg:h-48 bg-gray-200 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
            <span className="text-2xl text-green-600">📦</span>
          </div>
          <p className="text-gray-500 text-sm">{t("products.productImage")}</p>
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
            {t("products.keyBenefits")}
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
          <button
            onClick={handleLearnMore}
            className="flex-1 bg-green-600 text-white py-1.5 sm:py-2 px-2 sm:px-3 rounded-md hover:bg-green-700 transition-colors duration-200 text-xs sm:text-sm font-medium"
          >
            {t("products.learnMore")}
          </button>
          <button
            onClick={handleGetQuote}
            className="flex-1 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-1.5 sm:py-2 px-2 sm:px-3 rounded-md transition-colors duration-200 text-xs sm:text-sm font-medium"
          >
            {t("products.getQuote")}
          </button>
        </div>
      </div>
    </div>
  );
}
