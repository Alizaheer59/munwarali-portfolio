import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#141B2D]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Client <span className="text-[#06B6D4]">Testimonials</span></h2>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-[#0B1020] p-10 rounded-3xl border border-white/5 relative">
          <p className="text-xl md:text-2xl text-gray-300 italic mb-8">
            "Munwar AI Labs completely transformed how we handle our internal knowledge base. Their RAG implementation saved our employees hundreds of hours in search time."
          </p>
          <div className="font-bold text-white">Director of Operations</div>
          <div className="text-[#06B6D4] text-sm">Local Logistics Co.</div>
        </motion.div>
      </div>
    </section>
  );
}