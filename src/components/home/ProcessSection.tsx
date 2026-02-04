import { motion } from 'framer-motion';
import { MessageSquare, Pencil, Palette, Hammer, Home } from 'lucide-react';
import Section from '@/components/layout/Section';
import BlurText from '@/components/ui/blur-text';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consultation',
    description: 'Share your vision with our experts in a free consultation session',
  },
  {
    number: '02',
    icon: Pencil,
    title: 'Design',
    description: 'Our designers create detailed 3D renders tailored to your preferences',
  },
  {
    number: '03',
    icon: Palette,
    title: 'Material Selection',
    description: 'Choose from our curated range of premium materials and finishes',
  },
  {
    number: '04',
    icon: Hammer,
    title: 'Execution',
    description: 'Expert craftsmen bring your design to life with precision',
  },
  {
    number: '05',
    icon: Home,
    title: 'Handover',
    description: 'Move into your beautifully transformed space with our support',
  },
];

export default function ProcessSection() {
  return (
    <Section id="process" className="overflow-hidden bg-background relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      </div>
      
      <div className="text-center mb-16 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-5 py-2.5 bg-secondary text-foreground rounded-full text-sm font-semibold mb-6 shadow-lg"
        >
          How It Works
        </motion.span>
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold text-foreground mb-4">
          <BlurText text="Our" animateBy="words" delay={100} />{' '}
          <span className="text-primary">
            <BlurText text="Process" animateBy="letters" delay={60} direction="bottom" />
          </span>
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          A seamless journey from your first call to your dream home
        </motion.p>
      </div>

      <div className="relative">
        {/* Connection Line - Desktop */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-secondary via-secondary to-primary/20 -translate-y-1/2 origin-left"
        />
        
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step Card */}
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 bg-card border-2 border-secondary rounded-3xl p-6 w-full hover:border-primary hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group"
              >
                {/* Number Badge */}
                <motion.div 
                  className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {step.number}
                </motion.div>
                
                <div className="mt-6 mb-4">
                  <motion.div 
                    className="w-16 h-16 mx-auto rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-300 shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </motion.div>
                </div>
                
                <h3 className="text-lg font-display font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="hidden lg:block absolute top-1/2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary rotate-45 -translate-y-1/2 z-20"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
