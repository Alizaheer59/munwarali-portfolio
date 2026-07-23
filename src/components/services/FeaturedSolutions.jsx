import { motion } from 'framer-motion';

const solutions = ['Customer Support AI', 'HR Assistant', 'Sales Assistant', 'Internal Knowledge Assistant', 'Marketing Automation', 'Data Analysis', 'Meeting Assistant', 'Document Processing', 'Email Automation', 'AI Research Assistant'];

export default function FeaturedSolutions() {
  return (
    <section className="py-24 bg-[#0B1020]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">Featured <span className="text-[#06B6D4]">AI Solutions</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {solutions.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-[#141B2D] border border-white/5 hover:border-[#06B6D4]/50 p-6 rounded-2xl text-center group transition-all">
              <div className="text-gray-300 font-medium group-hover:text-white transition-colors">{s}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}