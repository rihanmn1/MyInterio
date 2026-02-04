import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlurText from '@/components/ui/blur-text';
import Magnet from '@/components/ui/magnet';
import ShinyText from '@/components/ui/shiny-text';

export default function HeroSection() {
  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center bg-background overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-20 left-[10%] w-2 h-2 rounded-full bg-primary"
        animate={{ y: [-20, 20, -20], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[30%] right-[15%] w-3 h-3 rounded-full bg-secondary"
        animate={{ y: [20, -20, 20], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute bottom-[25%] left-[20%] w-2 h-2 rounded-full bg-primary/60"
        animate={{ y: [-15, 15, -15], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-[40%] right-[10%] w-4 h-4 rounded-full border-2 border-secondary/50"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/80 backdrop-blur-sm text-foreground rounded-full text-sm font-medium border border-secondary">
              <Sparkles className="w-4 h-4 text-primary" />
              Premium Interior Design Studio
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="mb-6 md:mb-8 overflow-visible">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.2] tracking-tight">
              <BlurText 
                text="Transform Your" 
                animateBy="words"
                delay={100}
                className="block mb-2"
              />
              <span className="text-primary block py-1">
                <ShinyText text="Living Space" className="font-display font-bold" />
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-4"
          >
            Bespoke interior solutions crafted with precision. From concept to completion, 
            we create stunning spaces that reflect your unique personality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Magnet strength={0.2}>
              <Button
                size="lg"
                onClick={handleScrollToContact}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Magnet>
            
            <Magnet strength={0.2}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-foreground/20 hover:border-primary hover:bg-primary/5 text-foreground font-semibold text-base px-8 py-6 rounded-full transition-all duration-300"
              >
                <Link to="/designs">
                  Explore Our Work
                </Link>
              </Button>
            </Magnet>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-12 md:mt-16 pt-8 border-t border-foreground/10"
          >
            <p className="text-sm text-muted-foreground mb-4">Trusted by homeowners across India</p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-muted-foreground/60">
              {['2500+ Projects', '15+ Years', '50+ Designers', '4.9★ Rating'].map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1, duration: 0.4 }}
                  className="text-sm font-medium"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
