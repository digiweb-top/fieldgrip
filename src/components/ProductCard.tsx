import { useState } from 'react'; // Import useState
import { useTranslation } from "react-i18next";
import type { Product } from '../types'; // Updated import path
import ImageModal from './ImageModal'; // Import the new ImageModal

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { t } = useTranslation();
  const [isImageModalOpen, setIsImageModalOpen] = useState(false); // State for the modal

  // This handler ensures a smooth scroll even if the browser default is clunky
  const handleGetQuoteClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* --- MODIFIED IMAGE CONTAINER --- */}
      <div className="relative group aspect-square overflow-hidden">
        {/* The Image */}
        {product.image && product.image !== "/api/placeholder/300/200" ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl text-green-600">📦</span>
              </div>
              <p className="text-gray-500 text-sm">{t("products.productImage")}</p>
            </div>
          </div>
        )}
        
        {/* The Hover Overlay - only show for actual images */}
        {product.image && product.image !== "/api/placeholder/300/200" && (
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex justify-center items-center">
            <button
              onClick={() => setIsImageModalOpen(true)}
              className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300"
              aria-label="Expand image"
            >
              {/* Expand Icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5v4m0 0h4" />
              </svg>
            </button>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-6 flex-grow flex flex-col">
        {/* Category Badge */}
        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3 self-start">
          {product.category}
        </span>

        <h4
          className="text-sm sm:text-lg lg:text-xl font-bold text-green-800 mb-2 sm:mb-3"
          style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
        >
          {product.name}
        </h4>
        <p
          className="text-gray-700 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed flex-grow"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          {product.description}
        </p>

        <div className="space-y-1 sm:space-y-2 mb-4">
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
                
        {/* The change is here: A single, full-width button that is an anchor tag */}
        <div className="mt-auto pt-2">
           <a
            href="#contact"
            onClick={handleGetQuoteClick}
            className="block w-full text-center border border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-1.5 sm:py-2 px-2 sm:px-3 rounded-md transition-colors duration-200 text-xs sm:text-sm font-medium"
          >
            {t("products.getQuote")}
          </a>
        </div>
      </div>
      
      {/* Conditionally render the Image Modal */}
      {isImageModalOpen && (
        <ImageModal 
          imageUrl={product.image} 
          altText={product.name} 
          onClose={() => setIsImageModalOpen(false)} 
        />
      )}
    </div>
  );
}
