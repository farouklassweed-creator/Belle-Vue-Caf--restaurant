import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    src: '/hero-restaurant.jpg',
    alt: 'Terrasse avec vue sur la mer',
    category: 'Extérieur'
  },
  {
    src: '/interior.jpg',
    alt: 'Intérieur élégant du restaurant',
    category: 'Intérieur'
  },
  {
    src: '/breakfast.jpg',
    alt: 'Petit-déjeuner complet',
    category: 'Plats'
  },
  {
    src: '/seafood-pasta.jpg',
    alt: 'Pasta aux fruits de mer',
    category: 'Plats'
  },
  {
    src: '/grilled-meat.jpg',
    alt: 'Grillade mixte',
    category: 'Plats'
  },
  {
    src: '/salad.jpg',
    alt: 'Salade fraîche',
    category: 'Plats'
  },
  {
    src: '/cocktails.jpg',
    alt: 'Cocktails colorés',
    category: 'Boissons'
  },
  {
    src: '/couscous.jpg',
    alt: 'Couscous traditionnel',
    category: 'Plats'
  },
  {
    src: '/grilled-fish.jpg',
    alt: 'Poisson grillé',
    category: 'Plats'
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-gradient-to-b from-white to-amber-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">Galerie</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-6">
            L'Ambiance Belle Vue
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Découvrez l'atmosphère chaleureuse et les délices culinaires qui vous attendent chez Belle Vue.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => openLightbox(index)}
            >
              <div className={`${index === 0 ? 'aspect-square md:aspect-auto md:h-full' : 'aspect-square'}`}>
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs uppercase tracking-wider bg-amber-500/80 px-2 py-1 rounded">
                    {image.category}
                  </span>
                  <p className="mt-2 font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 bg-white/10 rounded-full"
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 bg-white/10 rounded-full"
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div 
            className="max-w-5xl max-h-[85vh] px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={galleryImages[selectedImage].src} 
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">
              {galleryImages[selectedImage].alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
