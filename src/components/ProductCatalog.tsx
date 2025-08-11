// src/components/ProductCatalog.tsx

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ProductCard from './ProductCard';
import SkeletonProductCard from './SkeletonProductCard'; // Import the new component
import { supabase } from '../lib/supabaseClient';
import type { Product } from '../types';

export default function ProductCatalog() {
  const { t, i18n } = useTranslation();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndMapProducts = async () => {
      setLoading(true);
      setError(null);
      
      const { data: dbProducts, error: dbError } = await supabase
        .from('products')
        .select('*')
        .order('display_order', { ascending: true });

      if (dbError) {
        console.error('Error fetching products:', dbError);
        setError('Failed to load products.');
        setLoading(false);
        return;
      }

      if (dbProducts) {
        // --- NEW MAPPING LOGIC ---
        const currentLang = i18n.language; // 'en', 'hi', or 'mr'
        const fallbackLang = 'en'; // Our default language

        const mappedProducts = dbProducts.map(p => {
          // Helper to get translation with fallback
          const getTranslation = (field: any, lang: string) => field?.[lang] || field?.[fallbackLang] || '';
          
          return {
            name: getTranslation(p.name, currentLang),
            category: getTranslation(p.category, currentLang),
            description: getTranslation(p.description, currentLang),
            benefits: getTranslation(p.benefits, currentLang) || [], // Benefits is an array
            image: p.image_url || "/api/placeholder/300/200",
          };
        });
        setProducts(mappedProducts);
      }
      setLoading(false);
    };

    fetchAndMapProducts();
    i18n.on('languageChanged', fetchAndMapProducts);
    return () => {
      i18n.off('languageChanged', fetchAndMapProducts);
    };
  }, [i18n, t]); // Add i18n to dependency array

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
            Discover our range of premium agricultural solutions
          </p>
        </div>

        {/* --- MODIFIED LOADING/ERROR/CONTENT LOGIC --- */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {loading ? (
            // Show 6 skeleton cards while loading
            Array.from({ length: 6 }).map((_, index) => (
              <SkeletonProductCard key={index} />
            ))
          ) : error ? (
            // Show error message taking full width of the grid container
            <div className="col-span-2 lg:col-span-3 text-center py-10 bg-red-100 text-red-700 p-4 rounded-lg">
              <p>{error}</p>
            </div>
          ) : (
            // Show the actual product cards once loaded
            products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
