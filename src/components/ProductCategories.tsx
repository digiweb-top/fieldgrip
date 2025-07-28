import { useState, useRef } from 'react'

export default function ProductCategories() {
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const categories = [
    { name: "Nutrients", placeholder: "🌱" },
    { name: "Fungicides", placeholder: "🍄" },
    { name: "Insecticides", placeholder: "🐛" },
    { name: "Seeds", placeholder: "🌾" },
    { name: "Weedicides", placeholder: "🌿" },
    { name: "Tissue Culture", placeholder: "🧪" },
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-gray-50 py-4 mt-16 sm:mt-20">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex items-center justify-start sm:justify-center space-x-2 sm:space-x-4 lg:space-x-6 overflow-x-auto pb-2 scrollbar-hide"
            onScroll={handleScroll}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Categories */}
            {categories.map((category, index) => (
              <div key={index} className="text-center flex-shrink-0">
                {/* Light green rounded square - responsive sizing */}
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg sm:rounded-xl flex items-center justify-center mb-1 sm:mb-2 mx-auto"
                  style={{ backgroundColor: "#c8e6c9" }}
                >
                  <span className="text-sm sm:text-base lg:text-lg">{category.placeholder}</span>
                </div>
                {/* Category name */}
                <p className="text-xs sm:text-xs lg:text-sm font-medium text-gray-800 whitespace-nowrap" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {category.name}
                </p>
              </div>
            ))}
          </div>

          {/* Left Arrow - only show on mobile when needed */}
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200 z-10 sm:hidden"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Right Arrow - only show on mobile when needed */}
          {showRightArrow && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200 z-10 sm:hidden"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
