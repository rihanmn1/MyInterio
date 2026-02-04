import { motion } from 'framer-motion';
import { Shield, Gem, DollarSign, Clock, Users } from 'lucide-react';
import Section from '@/components/layout/Section';
import BlurText from '@/components/ui/blur-text';
import FloatingElement from '@/components/ui/floating-element';

const features = [
  {
    icon: Shield,
    title: '10-Year Warranty',
    description: 'Complete peace of mind with our comprehensive warranty on all installations and materials.',
  },
  {
    icon: Gem,
    title: 'Premium Materials',
    description: 'Only the finest quality materials sourced from trusted manufacturers worldwide.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden costs. Get detailed quotes upfront with complete breakdown of all expenses.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect your time with guaranteed project completion within agreed timelines.',
  },
  {
    icon: Users,
    title: 'Expert Designers',
    description: 'Work with our team of 50+ skilled designers with decades of combined experience.',
  },
];

export default function WhyUsSection() {
  return (
    <Section id="why-us" className="bg-primary text-primary-foreground overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement duration={10} distance={30} className="absolute -top-20 -left-20 opacity-20">
          <div className="w-80 h-80 rounded-full border-4 border-secondary" />
        </FloatingElement>
        <FloatingElement duration={12} distance={25} delay={2} className="absolute -bottom-20 -right-20 opacity-20">
          <div className="w-96 h-96 rounded-full border-4 border-secondary" />
        </FloatingElement>
        <FloatingElement duration={8} distance={20} delay={4} className="absolute top-1/2 left-1/4 opacity-10">
          <div className="w-64 h-64 rounded-full bg-secondary" />
        </FloatingElement>
      </div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2.5 bg-secondary text-foreground rounded-full text-sm font-semibold mb-6 shadow-lg"
          >
            Why Choose Us
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold mb-4">
            <BlurText text="The MyInterio" animateBy="words" delay={100} />{' '}
            <span className="text-secondary">
              <BlurText text="Difference" animateBy="letters" delay={60} direction="bottom" />
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-primary-foreground/80 max-w-2xl mx-auto"
          >
            Experience excellence in every detail with our commitment to quality, transparency, and customer satisfaction
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="text-center p-6 rounded-3xl bg-primary-foreground/10 backdrop-blur-sm border-2 border-secondary/30 hover:border-secondary hover:bg-primary-foreground/15 transition-all duration-300 group"
            >
              <motion.div 
                className="w-16 h-16 mx-auto rounded-2xl bg-secondary flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-8 h-8 text-primary" />
              </motion.div>
              
              <h3 className="text-lg font-display font-semibold mb-2 text-primary-foreground">
                {feature.title}
              </h3>
              
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
