import { useTranslation } from 'react-i18next';
import ProductCard from './ProductCard';
import { getProducts } from '../data/products';

export default function ProductCatalog() {
  const { t } = useTranslation();
  const allProducts = getProducts(t);

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
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
