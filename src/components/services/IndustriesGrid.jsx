import { motion } from 'framer-motion';

const industries = ['Education', 'Healthcare', 'Retail', 'Manufacturing', 'Finance', 'Real Estate', 'Logistics', 'Legal', 'Hospitality', 'Small Businesses'];

export default function IndustriesGrid() {
  return (
    <section className="py-20 bg-[#0B1020]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-12">Industries <span className="text-[#06B6D4]">We Serve</span></h2>
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((ind, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-6 py-3 rounded-full bg-[#141B2D] border border-white/5 text-gray-300 font-medium hover:bg-[#3B82F6]/10 hover:text-[#3B82F6] hover:border-[#3B82F6]/30 transition-all cursor-pointer"
            >
              {ind}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}