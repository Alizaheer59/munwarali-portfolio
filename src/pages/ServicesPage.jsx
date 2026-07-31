import { useEffect } from 'react';
import ServicesNavbar from '../components/services/ServicesNavbar';
import LightHero from '../components/services/LightHero';
import ClientScroller from '../components/services/ClientScroller';
import ServiceCategories from '../components/services/ServiceCategories';
import LightContact from '../components/services/LightContact';
import LightFooter from '../components/services/LightFooter';
import ServicesPopupForm from '../components/services/ServicesPopupForm';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen text-gray-900 selection:bg-[#3B82F6] selection:text-white font-sans">
      <ServicesNavbar />
      <LightHero />
      <ClientScroller />
      <ServiceCategories />
      <LightContact />
      <LightFooter />
      <ServicesPopupForm />
    </div>
  );
}