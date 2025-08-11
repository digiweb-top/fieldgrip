// src/components/ImageModal.tsx

interface ImageModalProps {
  imageUrl: string;
  altText: string;
  onClose: () => void;
}

export default function ImageModal({ imageUrl, altText, onClose }: ImageModalProps) {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose} // Close modal on clicking the background
    >
      <div className="relative p-4">
        {/* Stop propagation so clicking the image doesn't close the modal */}
        <img 
          src={imageUrl} 
          alt={altText} 
          className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
        <button 
          onClick={onClose}
          className="absolute -top-2 -right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold hover:bg-gray-200"
          aria-label="Close image viewer"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
