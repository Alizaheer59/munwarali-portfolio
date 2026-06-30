import { faqData } from '../data/faqData';
import {  useState  } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';





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
