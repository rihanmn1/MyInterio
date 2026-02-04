import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import Section from '@/components/layout/Section';

// Category metadata (titles and descriptions)
const categoryMetadata: Record<string, { title: string; description: string }> = {
  kitchen: {
    title: 'Modular Kitchen',
    description: 'Discover our collection of sleek, functional modular kitchens designed to transform your cooking experience. From contemporary minimalist designs to warm traditional styles.',
  },
  bedroom: {
    title: 'Bedroom',
    description: 'Create your perfect sanctuary with our stunning bedroom designs. From luxurious master suites to cozy guest rooms, find inspiration for restful spaces.',
  },
  'living-room': {
    title: 'Living Room',
    description: 'Transform your living space into an elegant haven for family gatherings and relaxation. Explore designs that blend comfort with sophisticated style.',
  },
  wardrobe: {
    title: 'Wardrobe',
    description: 'Maximize your storage with our custom wardrobe solutions. From walk-in closets to space-saving designs, organize your life in style.',
  },
  office: {
    title: 'Office Interiors',
    description: 'Create productive workspaces that inspire creativity and drive success. From home offices to corporate spaces, discover designs that work.',
  },
  dining: {
    title: 'Dining Room',
    description: 'Stunning dining spaces designed for cherished gatherings and memorable meals with loved ones.',
  },
};

// Import all design images
const designImages = import.meta.glob('@/assets/designs/**/*.jpg', { eager: true, query: '?url', import: 'default' });

export default function DesignCategory() {
  const { category } = useParams<{ category: string }>();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Get images for current category
  const images = useMemo(() => {
    if (!category) return [];

    // Filter images that belong to this category folder
    const categoryPath = `/src/assets/designs/${category}/`;
    return Object.keys(designImages)
      .filter(path => path.includes(categoryPath))
      .map((path, index) => ({
        id: index,
        src: designImages[path],
        title: `${categoryMetadata[category]?.title || 'Design'} ${index + 1}`
      }));
  }, [category]);

  const metadata = category ? categoryMetadata[category] : null;

  if (!metadata || images.length === 0) {
    return (
      <Layout>
        <Section>
          <div className="text-center py-20">
            <h1 className="text-3xl font-display font-bold text-foreground mb-4">
              {!metadata ? 'Category Not Found' : 'No Designs Found'}
            </h1>
            <p className="text-muted-foreground mb-8">
              {!metadata ? "The category you're looking for doesn't exist." : "We're currently adding designs to this category."}
            </p>
            <Link to="/designs" className="text-primary hover:underline">
              ← Back to Designs
            </Link>
          </div>
        </Section>
      </Layout>
    );
  }

  // Use the first image as hero, or a specific fallback
  const heroImage = images[0]?.src;

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={metadata.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              to="/designs"
              className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Designs
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
              {metadata.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              {metadata.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedImage(index)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-5xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].title}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <Section className="bg-secondary/30">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Love What You See?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let our design experts create a personalized {metadata.title.toLowerCase()} design just for you.
          </p>
          <Link
            to="/#contact"
            onClick={() => {
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
          >
            Get Free Consultation
          </Link>
        </div>
      </Section>
    </Layout>
  );
}
