import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const faqData = [
  {
    question: "What is Generative Engine Optimization (GEO)?",
    answer: "GEO involves optimizing your digital presence so that AI models (like ChatGPT, Gemini, and Perplexity) accurately understand, summarize, and recommend your brand or services in their generated responses."
  },
  {
    question: "How is Answer Engine Optimization (AEO) different from traditional SEO?",
    answer: "Traditional SEO focuses on ranking links on search engine results pages. AEO optimizes content to be the direct, conversational answer provided by voice assistants, smart speakers, and AI chatbots."
  },
  {
    question: "Can AI automation improve my marketing ROI?",
    answer: "Yes. AI automation can streamline content creation, personalize customer journeys at scale, and optimize ad targeting in real-time, significantly reducing manual effort while improving conversion rates and overall ROI."
  },
  {
    question: "What services do you offer as an AI & Digital Marketing Professional?",
    answer: "I offer comprehensive digital marketing strategies, SEO/GEO/AEO consulting, AI-assisted content creation, brand positioning, and the implementation of AI workflow systems to accelerate growth."
  }
];

export function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 relative" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Frequently Asked <span className="text-gradient">Questions</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d2ff] to-[#aa3bff] mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400">Answer Engine Optimized (AEO) insights on Digital Marketing & AI.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="glass-card rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#00d2ff]' : 'text-gray-400'}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
