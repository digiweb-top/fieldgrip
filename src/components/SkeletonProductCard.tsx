// src/components/SkeletonProductCard.tsx

export default function SkeletonProductCard() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg animate-pulse">
      {/* Image Placeholder */}
      <div className="h-48 sm:h-56 lg:h-64 bg-gray-300"></div>

      <div className="p-4 sm:p-6">
        {/* Category Badge Placeholder */}
        <div className="h-5 w-24 bg-gray-300 rounded-full mb-3"></div>

        {/* Title Placeholder */}
        <div className="h-6 w-3/4 bg-gray-300 rounded mb-3"></div>
        
        {/* Description Placeholder */}
        <div className="h-4 bg-gray-300 rounded mb-1"></div>
        <div className="h-4 w-5/6 bg-gray-300 rounded mb-4"></div>

        {/* Benefits Placeholder */}
        <div className="h-5 w-28 bg-gray-300 rounded mb-3"></div>
        <div className="space-y-2">
          <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
        </div>

        {/* Button Placeholder */}
        <div className="mt-6 h-10 bg-gray-300 rounded-md"></div>
      </div>
    </div>
  );
}
