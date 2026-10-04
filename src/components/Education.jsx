import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const eduData = [
    { institution: "Andhra University", degree: "MCA (Pursuing)", duration: "2024–2026" },
    { institution: "Aditya Degree College", degree: "BSc Computer Science", duration: "2019–2022" }
  ];

  return (
    <section className="py-24 relative bg-black/40">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Academic <span className="text-gradient">Journey</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF3366] to-[#7C3AED] mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {eduData.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="glass-card p-8 rounded-3xl relative group">
              <div className="text-[#FF3366] font-mono text-sm mb-2">{item.duration}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{item.degree}</h3>
              <h4 className="text-lg text-[#7C3AED] font-medium">{item.institution}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
