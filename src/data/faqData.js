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