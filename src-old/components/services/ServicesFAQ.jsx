import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "How long does a typical AI implementation take?", a: "Depending on complexity, standard integrations take 2-4 weeks, while custom business models can take 2-3 months from discovery to deployment." },
  { q: "Is our company data secure?", a: "Absolutely. We build private, siloed AI architectures. Your data is never used to train public models like ChatGPT." },
  { q: "Do we need an in-house tech team?", a: "No. We provide end-to-end development, deployment, and ongoing support, allowing your team to focus solely on business outcomes." }
];

export default function ServicesFAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-24 bg-[#0B1020]">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">Frequently Asked <span className="text-[#8B5CF6]">Questions</span></h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#141B2D] border border-white/5 rounded-2xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full px-6 py-5 text-left flex justify-between items-center text-white font-semibold">
                {faq.q}
                <ChevronDown className={`transform transition-transform ${open === i ? 'rotate-180 text-[#8B5CF6]' : 'text-gray-500'}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                    <div className="px-6 pb-5 text-gray-400 text-sm border-t border-white/5 pt-4">{faq.a}</div>
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