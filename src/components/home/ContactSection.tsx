import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import Section from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import BlurText from '@/components/ui/blur-text';
import Magnet from '@/components/ui/magnet';
import FloatingElement from '@/components/ui/floating-element';

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: '✨ Thank you for contacting us!',
      description: 'Our team will reach out to you within 24 hours.',
    });

    setFormData({
      name: '',
      phone: '',
      email: '',
      city: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <Section id="contact" className="bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <FloatingElement duration={8} distance={20} className="absolute top-20 right-10 opacity-30">
        <div className="w-64 h-64 rounded-full bg-primary/30 blur-3xl" />
      </FloatingElement>
      <FloatingElement duration={10} distance={25} delay={2} className="absolute bottom-20 left-10 opacity-40">
        <div className="w-80 h-80 rounded-full bg-secondary blur-3xl" />
      </FloatingElement>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-foreground rounded-full text-sm font-semibold mb-6 shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              Get In Touch
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              <BlurText text="Let's Design Your" animateBy="words" delay={100} />{' '}
              <span className="text-primary">
                <BlurText text="Dream Home" animateBy="letters" delay={60} direction="bottom" />
              </span>
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground"
            >
              Ready to transform your space? Fill out the form and our design experts will get back to you within 24 hours with a free consultation.
            </motion.p>
          </div>

          <div className="space-y-6">
            {[
              { icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
              { icon: Mail, label: 'Email', value: 'hello@myinterio.com', href: 'mailto:hello@myinterio.com' },
              { icon: MapPin, label: 'Location', value: 'Mumbai, Delhi, Bangalore, Pune & more' },
            ].map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300 shadow-lg"
                >
                  <contact.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </motion.div>
                <div>
                  <div className="font-bold text-foreground">{contact.label}</div>
                  {contact.href ? (
                    <a href={contact.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {contact.value}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{contact.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-secondary"
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="h-12 rounded-xl border-2 border-secondary focus:border-primary transition-all duration-300"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="h-12 rounded-xl border-2 border-secondary focus:border-primary transition-all duration-300"
                  />
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="h-12 rounded-xl border-2 border-secondary focus:border-primary transition-all duration-300"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="city" className="block text-sm font-semibold text-foreground mb-2">
                    City *
                  </label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Mumbai"
                    className="h-12 rounded-xl border-2 border-secondary focus:border-primary transition-all duration-300"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Tell us about your project
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your interior design requirements..."
                  className="min-h-[120px] rounded-xl border-2 border-secondary focus:border-primary resize-none transition-all duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Magnet strength={0.2}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.svg 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="h-5 w-5" 
                          viewBox="0 0 24 24"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </motion.svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Get Free Consultation
                        <motion.span
                          className="inline-block"
                          whileHover={{ x: 5 }}
                        >
                          <Send className="w-5 h-5" />
                        </motion.span>
                      </span>
                    )}
                  </Button>
                </Magnet>
              </motion.div>

              <p className="text-sm text-center text-muted-foreground">
                By submitting, you agree to our privacy policy. We'll never share your data.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
