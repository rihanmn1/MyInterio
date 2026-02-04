import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Crown, Diamond, Star, Sparkles, CheckCircle, ArrowRight, Shield, Gem, Award, Heart } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import Section from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import BlurText from '@/components/ui/blur-text';
import FloatingElement from '@/components/ui/floating-element';
import CountUp from '@/components/ui/count-up';
import ShinyText from '@/components/ui/shiny-text';

const premiumFeatures = [
  {
    icon: Diamond,
    title: 'Exclusive Materials',
    description: 'Access to rare imported materials, premium Italian marble, exotic woods, and designer fabrics not available elsewhere.',
  },
  {
    icon: Crown,
    title: 'Personal Design Concierge',
    description: 'A dedicated senior designer assigned exclusively to your project, available 24/7 for consultations and updates.',
  },
  {
    icon: Shield,
    title: 'Lifetime Warranty',
    description: 'Complete peace of mind with our comprehensive lifetime warranty on all premium installations and materials.',
  },
  {
    icon: Gem,
    title: 'Bespoke Furniture',
    description: 'Custom-crafted furniture designed and built specifically for your space by master artisans.',
  },
  {
    icon: Award,
    title: 'Priority Execution',
    description: 'Fast-tracked project timelines with dedicated teams ensuring your dream home is ready when you need it.',
  },
  {
    icon: Heart,
    title: 'White Glove Service',
    description: 'Complete project management, including site supervision, vendor coordination, and post-installation support.',
  },
];

const premiumPackages = [
  {
    name: 'Premium Essential',
    price: '₹2,999',
    unit: 'per sq. ft.',
    features: [
      'Senior Designer Consultation',
      'Premium Material Selection',
      '3D Visualization',
      '2 Year Warranty',
      'Project Management',
      '30-Day Completion Guarantee',
    ],
    popular: false,
  },
  {
    name: 'Premium Elite',
    price: '₹4,499',
    unit: 'per sq. ft.',
    features: [
      'Personal Design Concierge',
      'Imported Italian Materials',
      'Virtual Reality Walkthrough',
      '5 Year Warranty',
      'Dedicated Project Manager',
      'Smart Home Integration',
      'Custom Furniture Design',
      'Priority Support',
    ],
    popular: true,
  },
  {
    name: 'Premium Luxe',
    price: '₹6,999',
    unit: 'per sq. ft.',
    features: [
      'Award-Winning Designer',
      'Exclusive Global Materials',
      'Full Home Automation',
      'Lifetime Warranty',
      'White Glove Service',
      'Art & Decor Curation',
      'Bespoke Furniture Collection',
      '24/7 Concierge Support',
      'Annual Maintenance Package',
    ],
    popular: false,
  },
];

const premiumStats = [
  { value: 500, suffix: '+', label: 'Premium Projects' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 25, suffix: '+', label: 'Design Awards' },
];

export default function Premium() {
  const navigate = useNavigate();

  const handleScrollToContact = () => {
    const element = document.getElementById('premium-contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewPortfolio = () => {
    navigate('/designs');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-amber-950/20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <FloatingElement delay={0} duration={8}>
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl" />
          </FloatingElement>
          <FloatingElement delay={2} duration={10}>
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
          </FloatingElement>
          <FloatingElement delay={4} duration={12}>
            <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-amber-400/5 blur-3xl" />
          </FloatingElement>
          
          {/* Sparkle particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-full px-6 py-2 mb-8"
            >
              <Crown className="w-5 h-5 text-amber-500" />
              <span className="text-amber-600 dark:text-amber-400 font-semibold">Exclusive Premium Experience</span>
              <Sparkles className="w-4 h-4 text-amber-500" />
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              <BlurText
                text="Where Luxury"
                className="text-foreground block"
                delay={100}
              />
              <span className="block bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                Meets Design
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Experience the pinnacle of interior design with our Premium collection. 
              Curated materials, bespoke craftsmanship, and unparalleled service for those who demand excellence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={handleScrollToContact}
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-full px-8 py-6 text-lg shadow-lg shadow-amber-500/25 group"
              >
                <Crown className="w-5 h-5 mr-2" />
                Schedule Premium Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={handleViewPortfolio}
                variant="outline"
                size="lg"
                className="border-2 border-amber-500/50 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10 rounded-full px-8 py-6 text-lg"
              >
                <Diamond className="w-5 h-5 mr-2" />
                View Portfolio
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-amber-500/20"
            >
              {premiumStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                    <CountUp to={stat.value} suffix={stat.suffix} duration={2.5} />
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Section className="bg-gradient-to-b from-background to-amber-950/5">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-amber-500/10 rounded-full px-4 py-2 mb-4"
          >
            <Star className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-amber-600 dark:text-amber-400">Premium Benefits</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            The <ShinyText text="Premium" className="text-amber-500" /> Difference
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover what sets MyInterio Premium apart from the rest
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {premiumFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-amber-500/50 transition-all duration-500"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-amber-600/0 group-hover:from-amber-500/5 group-hover:to-amber-600/10 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Pricing Section */}
      <Section className="bg-gradient-to-b from-amber-950/5 to-background">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-amber-500/10 rounded-full px-4 py-2 mb-4"
          >
            <Gem className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-amber-600 dark:text-amber-400">Premium Packages</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Choose Your <span className="text-amber-500">Premium</span> Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tailored packages designed to exceed your expectations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {premiumPackages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl ${
                pkg.popular
                  ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-white scale-105 shadow-2xl shadow-amber-500/30'
                  : 'bg-card border border-border'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-foreground text-background px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <h3 className={`text-xl font-display font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-foreground'}`}>
                {pkg.name}
              </h3>
              <div className="mb-6">
                <span className={`text-4xl font-display font-bold ${pkg.popular ? 'text-white' : 'text-amber-500'}`}>
                  {pkg.price}
                </span>
                <span className={`text-sm ${pkg.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {' '}{pkg.unit}
                </span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className={`w-5 h-5 shrink-0 ${pkg.popular ? 'text-white' : 'text-amber-500'}`} />
                    <span className={`text-sm ${pkg.popular ? 'text-white/90' : 'text-muted-foreground'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button
                className={`w-full rounded-full font-semibold ${
                  pkg.popular
                    ? 'bg-white text-amber-600 hover:bg-white/90'
                    : 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700'
                }`}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="premium-contact" className="bg-gradient-to-br from-amber-500 to-amber-600">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Crown className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Ready to Experience Premium?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
              Schedule a complimentary consultation with our premium design experts and discover how we can transform your space into a masterpiece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-amber-600 hover:bg-white/90 font-semibold rounded-full px-8 py-6 text-lg shadow-lg"
              >
                <Crown className="w-5 h-5 mr-2" />
                Schedule Premium Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-amber-600 rounded-full px-8 py-6 text-lg"
              >
                Call: +91 98765-43210
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
}
