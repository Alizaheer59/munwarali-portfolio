import { useEffect } from 'react';
import ServicesNavbar from '../components/services/ServicesNavbar';
import HeroSection from '../components/services/HeroSection';
import AIServicesGrid from '../components/services/AIServicesGrid';
import IndustriesGrid from '../components/services/IndustriesGrid';
import ProcessTimeline from '../components/services/ProcessTimeline';
import WhyChooseUs from '../components/services/WhyChooseUs';
import FeaturedSolutions from '../components/services/FeaturedSolutions';
import TechExpertise from '../components/services/TechExpertise';
import CaseStudies from '../components/services/CaseStudies';
import Testimonials from '../components/services/Testimonials';
import ServicesFAQ from '../components/services/ServicesFAQ';
import ContactForm from '../components/services/ContactForm';
import FinalCTA from '../components/services/FinalCTA';
import ServicesFooter from '../components/services/ServicesFooter';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0B1020] min-h-screen text-white selection:bg-[#3B82F6] selection:text-white font-sans">
      <ServicesNavbar />
      <HeroSection />
      <AIServicesGrid />
      <IndustriesGrid />
      <ProcessTimeline />
      <WhyChooseUs />
      <FeaturedSolutions />
      <TechExpertise />
      <CaseStudies />
      <Testimonials />
      <ServicesFAQ />
      <ContactForm />
      <FinalCTA />
      <ServicesFooter />
    </div>
  );
}