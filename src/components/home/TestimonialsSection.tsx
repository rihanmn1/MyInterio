import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Section from '@/components/layout/Section';
import BlurText from '@/components/ui/blur-text';
import Magnet from '@/components/ui/magnet';

// Testimonial images
import priyaImg from '@/assets/testimonials/priya.jpg';
import rajeshImg from '@/assets/testimonials/rajesh.jpg';
import anitaImg from '@/assets/testimonials/anita.jpg';
import vikramImg from '@/assets/testimonials/vikram.jpg';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai',
    image: priyaImg,
    rating: 5,
    text: 'MyInterio transformed our 2BHK into a stunning modern home. The attention to detail and quality of work exceeded our expectations. Highly recommend their services!',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Delhi',
    image: rajeshImg,
    rating: 5,
    text: 'The team was professional from start to finish. Our modular kitchen is exactly what we envisioned. The 10-year warranty gives us complete peace of mind.',
  },
  {
    id: 3,
    name: 'Anita Desai',
    location: 'Bangalore',
    image: anitaImg,
    rating: 5,
    text: 'Working with MyInterio was a delightful experience. They understood our style preferences perfectly and delivered beyond our dreams. Our living room is now the talk of the neighborhood!',
  },
  {
    id: 4,
    name: 'Vikram Patel',
    location: 'Pune',
    image: vikramImg,
    rating: 5,
    text: 'The transparent pricing and on-time delivery were refreshing. No hidden costs, no delays. MyInterio delivered our complete home interior in just 45 days!',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section id="testimonials" className="bg-secondary/40 overflow-hidden relative">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
      
      <div className="text-center mb-16 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold mb-6 shadow-lg"
        >
          Testimonials
        </motion.span>
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold text-foreground mb-4">
          <BlurText text="What Our" animateBy="words" delay={100} />{' '}
          <span className="text-primary">
            <BlurText text="Clients" animateBy="letters" delay={60} direction="bottom" />
          </span>{' '}
          <BlurText text="Say" animateBy="words" delay={100} />
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Join thousands of happy homeowners who trusted us with their dream interiors
        </motion.p>
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-secondary relative"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Quote Icon */}
                <motion.div 
                  initial={{ rotate: -20, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="hidden md:flex absolute top-8 right-8 w-16 h-16 rounded-full bg-secondary items-center justify-center"
                >
                  <Quote className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex-shrink-0"
                >
                  <div className="relative">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-secondary shadow-xl"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Star className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-1 justify-center md:justify-start mb-4"
                  >
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-secondary text-secondary" />
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-xl text-foreground leading-relaxed mb-6"
                  >
                    "{testimonials[currentIndex].text}"
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="font-display font-bold text-foreground text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].location}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <Magnet strength={0.4}>
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:shadow-xl transition-all duration-300 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-foreground hover:text-primary-foreground" />
            </motion.button>
          </Magnet>

          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-10'
                    : 'bg-secondary hover:bg-primary/50 w-3'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Magnet strength={0.4}>
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:shadow-xl transition-all duration-300 shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-foreground hover:text-primary-foreground" />
            </motion.button>
          </Magnet>
        </div>
      </div>
    </Section>
  );
}
