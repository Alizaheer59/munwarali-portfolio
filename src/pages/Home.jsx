import SEO from '../components/SEO';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import AIToolkit from '../components/AIToolkit';
import Experience from '../components/Experience';
import ImageGallery from '../components/ImageGallery';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import { faqData, generateFAQSchema } from '../data/faqData';

export default function Home() {
  const personSchema = {
    "@type": "Person",
    "name": "Mohammed Munwar Ali Zaheer",
    "url": "https://munwarali.in",
    "jobTitle": "AI-first digital marketing professional",
    "description": "Blending AI, Creativity, Automation & Modern Digital Strategy",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Visakhapatnam",
      "addressRegion": "Andhra Pradesh",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/in/munwaralizaheer"
    ]
  };

  const faqSchema = generateFAQSchema(faqData);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [personSchema, faqSchema]
  };

  return (
    <>
      <SEO 
        title="Mohammed Munwar Ali Zaheer | Digital Marketing & Generative ai professional" 
        description="Digital Marketing, SEO, GEO, AEO, AI Automation and Content Strategy Professional helping brands grow through AI-powered marketing systems."
        schema={combinedSchema}
      />
      <Hero />
      <About />
      <Skills />
      <AIToolkit />
      <Experience />
      <ImageGallery />
      <Education />
      <Certifications />
      <FAQ />
      <Contact />
    </>
  );
}
