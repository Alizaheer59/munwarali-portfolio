import { useEffect } from 'react';
import ServicesNavbar from '../components/services/ServicesNavbar';
import LightHero from '../components/services/LightHero';
import ClientScroller from '../components/services/ClientScroller';
import ServiceCategories from '../components/services/ServiceCategories';
import LightFooter from '../components/services/LightFooter';
import ServicesPopupForm from '../components/services/ServicesPopupForm';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Meta Pixel Code
  useEffect(() => {
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    
    window.fbq('init', '349473887862209');
    window.fbq('track', 'PageView');
  }, []);


  return (
    <div className="bg-white min-h-screen text-gray-900 selection:bg-[#3B82F6] selection:text-white font-sans">
      <noscript>
        <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=349473887862209&ev=PageView&noscript=1" alt="" />
      </noscript>
      <ServicesNavbar />
      <LightHero />
      <ClientScroller />
      <ServiceCategories />
      <LightFooter />
      <ServicesPopupForm />
    </div>
  );
}