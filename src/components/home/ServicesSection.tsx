import { motion } from 'framer-motion';
import { Paintbrush, Home, Sofa, LayoutGrid, Wrench, ArrowUpRight } from 'lucide-react';
import Section from '@/components/layout/Section';
import BlurText from '@/components/ui/blur-text';

// Import service images from assets
import interiorDesignImg from '@/assets/services/interior-design.jpg';
import modularKitchenImg from '@/assets/services/modular-kitchen.jpg';
import customFurnitureImg from '@/assets/services/custom-furniture.jpg';
import spacePlanningImg from '@/assets/services/space-planning.jpg';
import turnkeyExecutionImg from '@/assets/services/turnkey-execution.jpg';

const services = [
  {
    icon: Paintbrush,
    title: 'End-to-End Interior Design',
    description: 'Complete design solutions from concept development to final execution.',
    image: interiorDesignImg,
  },
  {
    icon: Home,
    title: 'Modular Kitchens',
    description: 'Custom modular kitchen designs that maximize space efficiency.',
    image: modularKitchenImg,
  },
  {
    icon: Sofa,
    title: 'Custom Furniture',
    description: 'Bespoke furniture crafted to your specifications.',
    image: customFurnitureImg,
  },
  {
    icon: LayoutGrid,
    title: 'Space Planning',
    description: 'Optimize your living spaces with intelligent layouts.',
    image: spacePlanningImg,
  },
  {
    icon: Wrench,
    title: 'Turnkey Execution',
    description: 'Hassle-free project management from start to finish.',
    image: turnkeyExecutionImg,
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{ y: -8 }}
      className="group relative bg-card rounded-3xl overflow-hidden shadow-lg border border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {/* Number Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full text-sm font-bold text-primary">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Icon */}
        <motion.div
          className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <service.icon className="w-5 h-5 text-primary-foreground" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {service.description}
        </p>
        
        {/* Learn More Link */}
        <motion.div 
          className="flex items-center gap-2 text-primary font-semibold text-sm"
          whileHover={{ x: 5 }}
        >
          Learn More
          <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
        </motion.div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <Section id="services" className="relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-secondary/50 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-foreground rounded-full text-sm font-semibold mb-6 shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            What We Offer
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold text-foreground mb-4">
            <BlurText text="Our" animateBy="words" delay={100} />{' '}
            <span className="text-primary">
              <BlurText text="Services" animateBy="letters" delay={60} direction="bottom" />
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Comprehensive interior design services tailored to transform your vision into reality
          </motion.p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t-2 border-secondary"
        >
          {[
            { value: '500+', label: 'Projects Completed' },
            { value: '15+', label: 'Years Experience' },
            { value: '98%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <motion.div 
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-3xl md:text-5xl font-display font-bold text-primary">{stat.value}</span>
              <p className="text-muted-foreground mt-2 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
