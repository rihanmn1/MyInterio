import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import DesignsSection from '@/components/home/DesignsSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import ProcessSection from '@/components/home/ProcessSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactSection from '@/components/home/ContactSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <DesignsSection />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
