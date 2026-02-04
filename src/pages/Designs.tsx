import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Section from '@/components/layout/Section';

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
    description: 'Sleek, functional kitchens tailored to your cooking style with premium materials and smart storage solutions.',
    image: kitchenImg,
    href: '/designs/kitchen',
    count: '120+ Designs',
  },
  {
    id: 'living-room',
    title: 'Living',
    description: 'Elegant spaces for memorable family moments featuring sophisticated furniture and lighting.',
    image: livingRoomImg,
    href: '/designs/living-room',
    count: '95+ Designs',
  },
  {
    id: 'dining',
    title: 'Dining',
    description: 'Stunning dining spaces designed for cherished gatherings and memorable meals with loved ones.',
    image: diningImg,
    href: '/designs/dining',
    count: '70+ Designs',
  },
  {
    id: 'bedroom',
    title: 'Bedroom',
    description: 'Serene sanctuaries designed for ultimate comfort with elegant wardrobes and cozy atmospheres.',
    image: bedroomImg,
    href: '/designs/bedroom',
    count: '85+ Designs',
  },
  {
    id: 'office',
    title: 'Office',
    description: 'Professional workspaces that inspire productivity and enhance business performance.',
    image: officeImg,
    href: '/designs/office',
    count: '45+ Designs',
  },
];

export default function Designs() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-br from-background to-accent/20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Explore Our <span className="text-primary">Design</span> Collections
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Discover hundreds of stunning interior designs crafted by our expert team.
              Each space tells a unique story of elegance and functionality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <Section animate={false}>
        <div className="space-y-8">
          {designCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={category.href}
                className={`group grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:direction-rtl' : ''
                  }`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden rounded-3xl ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300" />

                  {/* Count Badge */}
                  <div className="absolute top-4 right-4 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full text-sm font-medium">
                    {category.count}
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300">
                    Explore Collection
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Divider */}
              {index < designCategories.length - 1 && (
                <div className="border-b border-border mt-8" />
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-primary-foreground">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Book a free consultation with our design experts and get a personalized plan for your dream home.
          </p>
          <Link
            to="/#contact"
            onClick={() => {
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary-foreground/90 transition-colors"
          >
            Get Free Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </Section>
    </Layout>
  );
}
