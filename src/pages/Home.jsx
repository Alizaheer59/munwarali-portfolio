import SEO from '../components/SEO';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
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
    "jobTitle": "Digital Marketing Specialist | AI Prompt Engineer",
    "description": "Digital Marketing Specialist skilled in digital marketing campaigns, web designing, SEO and content optimization, copywriting, and AI prompt engineering.",
    "telephone": "+916303822359",
    "email": "mailto:alizaheermohammed@gmail.com",
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
        title="Mohammed Munwar Ali Zaheer | Digital Marketing Specialist & AI Prompt Engineer" 
        description="Digital Marketing Specialist & AI Prompt Engineer skilled in digital marketing campaigns, web designing, SEO, content optimization, and AI prompt engineering."
        schema={combinedSchema}
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
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
