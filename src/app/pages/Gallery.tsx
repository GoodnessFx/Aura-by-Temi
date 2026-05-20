import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Masonry from 'react-responsive-masonry';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { id: 1, category: 'nails', url: '/images/NEW AURA 1.jpeg', alt: 'Featured Aura signature nail set', type: 'image' },
  { id: 2, category: 'nails', url: '/images/temi1.jpeg', alt: 'Luxury nail set with polished detail work', type: 'image' },
  { id: 3, category: 'nails', url: '/images/temi2.jpeg', alt: 'Custom nail design with a clean salon finish', type: 'image' },
  { id: 4, category: 'henna', url: '/images/temi3.jpeg', alt: 'Detailed henna artistry for special occasions', type: 'image' },
  { id: 5, category: 'bridal', url: '/images/temi4.jpeg', alt: 'Elegant bridal or event-ready beauty styling', type: 'image' },
  { id: 6, category: 'eid', url: '/images/temi5.jpg', alt: 'Soft luxury design perfect for Eid celebrations', type: 'image' },
  { id: 7, category: 'nails', url: '/images/gallery/NEW AURA 2.mp4', alt: 'Aura by Temi video showcase', type: 'video' },
];

type FilterType = 'all' | 'nails' | 'henna' | 'bridal' | 'eid';

export function Gallery() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = filter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);
  const selectedMedia = filteredImages.find(img => img.id === selectedImage);

  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'nails', label: 'Nails' },
    { value: 'henna', label: 'Henna' },
    { value: 'bridal', label: 'Bridal' },
    { value: 'eid', label: 'Eid' },
  ];

  const handlePrevious = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
      setSelectedImage(filteredImages[prevIndex].id);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
      setSelectedImage(filteredImages[nextIndex].id);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl mb-4" style={{ color: 'var(--emerald)' }}>
            Gallery
          </h1>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--gold)' }} />
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
            Explore our portfolio of stunning nail art and henna designs
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`px-6 py-2 rounded-sm tracking-wider transition-all duration-300 ${
                filter === tab.value ? 'shadow-lg' : 'border-2 hover:border-gold'
              }`}
              style={
                filter === tab.value
                  ? { backgroundColor: 'var(--emerald)', color: 'var(--ivory)' }
                  : { borderColor: 'var(--border)', color: 'var(--matte-black)' }
              }
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry Gallery - Desktop */}
        <div className="hidden md:block">
          <Masonry columnsCount={3} gutter="16px">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedImage(image.id)}
                className="cursor-pointer rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {image.type === 'video' ? (
                  <video
                    src={image.url}
                    className="w-full h-auto"
                    muted
                    loop
                    playsInline
                    autoPlay
                    controls
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={image.url}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-auto"
                  />
                )}
              </motion.div>
            ))}
          </Masonry>
        </div>

        {/* Masonry Gallery - Mobile */}
        <div className="md:hidden">
          <Masonry columnsCount={1} gutter="16px">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedImage(image.id)}
                className="cursor-pointer rounded-sm overflow-hidden shadow-lg transition-all duration-300"
              >
                {image.type === 'video' ? (
                  <video
                    src={image.url}
                    className="w-full h-auto"
                    muted
                    loop
                    playsInline
                    autoPlay
                    controls
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={image.url}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-auto"
                  />
                )}
              </motion.div>
            ))}
          </Masonry>
        </div>

        {/* Instagram Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center p-8 rounded-sm"
          style={{ backgroundColor: 'var(--muted)' }}
        >
          <h3 className="text-3xl mb-4" style={{ color: 'var(--emerald)' }}>
            Follow Us on Instagram
          </h3>
          <p className="mb-6" style={{ color: 'var(--muted-foreground)' }}>
            @aurabytemi for daily inspiration
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <a
              href="https://instagram.com/aurabytemi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-sm tracking-wider transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: 'var(--gold)', color: 'var(--matte-black)' }}
            >
              View on Instagram
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X size={32} color="var(--ivory)" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <ChevronLeft size={40} color="var(--ivory)" />
            </button>

            {selectedMedia?.type === 'video' ? (
              <motion.video
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={selectedMedia.url}
                className="max-w-full max-h-[90vh] object-contain rounded-sm"
                onClick={(e) => e.stopPropagation()}
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                Your browser does not support the video tag.
              </motion.video>
            ) : (
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={selectedMedia?.url}
                alt={selectedMedia?.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-sm"
                onClick={(e) => e.stopPropagation()}
              />
            )}

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <ChevronRight size={40} color="var(--ivory)" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
