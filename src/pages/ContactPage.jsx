import React from 'react';
import SEO from '../components/SEO';
import Contact from '../components/Contact';
import CalendlyEmbed from '../components/CalendlyEmbed';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <SEO 
        title="Contact & Schedule | Hire a Digital Marketing Professional"
        url="https://munwarali.in/contact"
        description="Get in touch or schedule a consultation with Mohammed Munwar Ali Zaheer to discuss AI automation, SEO, and digital marketing strategies."
      />
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">Let's <span className="text-gradient">Collaborate</span></h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Ready to scale your brand with AI-powered marketing systems? Book a direct consultation below or drop me a message.
        </p>
      </div>

      <div className="mb-24">
        <h2 className="text-2xl font-bold mb-8 text-center">Schedule a Discovery Call</h2>
        <CalendlyEmbed url="https://calendly.com/alizaheermohammed/30min?background_color=050505&text_color=ffffff&primary_color=00d2ff" />
      </div>

      <Contact />
    </div>
  );
}
