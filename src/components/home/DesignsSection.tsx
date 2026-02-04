import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Section from '@/components/layout/Section';
import BlurText from '@/components/ui/blur-text';

// Design category images
import kitchenImg from '@/assets/designs/kitchen/image-1.jpg';
import livingRoomImg from '@/assets/designs/living-room/image-1.jpg';
import diningImg from '@/assets/designs/dining/image-1.jpg';
import bedroomImg from '@/assets/designs/bedroom/image-1.jpg';
import officeImg from '@/assets/designs/office/image-1.jpg';

const designCategories = [
  {
    id: 'kitchen',
    title: 'Kitchen',
    description: 'Sleek, functional kitchens tailored to your cooking style',
    image: kitchenImg,
    href: '/designs/kitchen',
  },
  {
    id: 'living-room',
    title: 'Living',
    description: 'Elegant spaces for memorable family moments',
    image: livingRoomImg,
    href: '/designs/living-room',
  },
  {
    id: 'dining',
    title: 'Dining',
    description: 'Stunning dining spaces for cherished gatherings',
    image: diningImg,
    href: '/designs/dining',
  },
  {
    id: 'bedroom',
    title: 'Bedroom',
    description: 'Serene sanctuaries designed for ultimate comfort',
    image: bedroomImg,
    href: '/designs/bedroom',
  },
  {
    id: 'office',
    title: 'Office',
    description: 'Professional workspaces that inspire productivity',
    image: officeImg,
    href: '/designs/office',
  },
];

export default function DesignsSection() {
  return (
    <Section id="designs" className="bg-secondary/40 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="text-center mb-16 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold mb-6 shadow-lg"
        >
          Our Portfolio
        </motion.span>
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold text-foreground mb-4">
          <BlurText text="Explore Our" animateBy="words" delay={100} />{' '}
          <span className="text-primary">
            <BlurText text="Design" animateBy="letters" delay={50} direction="bottom" />
          </span>{' '}
          <BlurText text="Categories" animateBy="words" delay={100} />
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Discover our curated collection of stunning interior designs crafted for modern living
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
        {designCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}
          >
            <Link
              to={category.href}
              className="group block relative h-[300px] md:h-[380px] rounded-3xl overflow-hidden shadow-xl border-2 border-transparent hover:border-primary/50 transition-all duration-500"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />

              {/* Hover Color Overlay */}
              <motion.div
                className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-all duration-500"
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex items-end justify-between"
                >
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-background mb-2">
                      {category.title}
                    </h3>
                    <p className="text-background/80 text-sm md:text-base max-w-xs">
                      {category.description}
                    </p>
                  </div>

                  <motion.div
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-lg group-hover:bg-primary transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 45 }}
                  >
                    <ArrowUpRight className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Top Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 bg-secondary/90 backdrop-blur-sm rounded-full text-sm font-semibold text-foreground shadow-lg">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Link
          to="/designs"
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full shadow-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 group"
        >
          View All Designs
          <motion.span whileHover={{ x: 5 }}>
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </motion.span>
        </Link>
      </motion.div>
    </Section>
  );
}
