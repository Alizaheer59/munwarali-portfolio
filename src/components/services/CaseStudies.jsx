import { motion } from 'framer-motion';

const cases = [
  { title: "Automated Customer Support", metric: "85%", desc: "Reduction in support response times utilizing a fine-tuned LLM agent." },
  { title: "Document Data Extraction", metric: "10x", desc: "Faster processing of legal contracts using RAG and OCR pipelines." },
  { title: "Sales Outreach Automation", metric: "300%", desc: "Increase in qualified leads generated through autonomous email agents." }
];

export default function CaseStudies() {
  return (
    <section className="py-24 bg-[#0B1020]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">Proven <span className="text-[#3B82F6]">Impact</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#141B2D] p-8 rounded-3xl border border-[#3B82F6]/20 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#3B82F6]/10 rounded-full blur-2xl"></div>
              <div className="text-5xl font-black text-[#3B82F6] mb-4">{c.metric}</div>
              <h3 className="text-xl font-bold text-white mb-3">{c.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}