import { useEffect } from 'react';
import ServicesNavbar from '../components/services/ServicesNavbar';
import LightHero from '../components/services/LightHero';
import ServiceCategories from '../components/services/ServiceCategories';
import LightContact from '../components/services/LightContact';
import LightFooter from '../components/services/LightFooter';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen text-gray-900 selection:bg-[#3B82F6] selection:text-white font-sans">
      <ServicesNavbar />
      <LightHero />
      <ServiceCategories />
      <LightContact />
      <LightFooter />
    </div>
  );
}