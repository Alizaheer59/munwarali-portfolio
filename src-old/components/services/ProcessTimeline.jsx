import { motion } from 'framer-motion';

const steps = [
  { step: '01', title: 'Discovery', desc: 'Understanding your business challenges.' },
  { step: '02', title: 'Analysis', desc: 'Data and workflow audit.' },
  { step: '03', title: 'Design', desc: 'Architecting the AI solution.' },
  { step: '04', title: 'Development', desc: 'Building custom models & software.' },
  { step: '05', title: 'Testing', desc: 'Rigorous QA and security checks.' },
  { step: '06', title: 'Deployment', desc: 'Seamless integration into production.' },
  { step: '07', title: 'Training', desc: 'Empowering your team to use AI.' },
  { step: '08', title: 'Support', desc: 'Continuous optimization and updates.' }
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-[#0B1020]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">Our <span className="text-[#8B5CF6]">Process</span></h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative pl-6 border-l-2 border-[#8B5CF6]/30 pb-8">
              <div className="absolute top-0 -left-[11px] w-5 h-5 rounded-full bg-[#8B5CF6] border-4 border-[#0B1020]"></div>
              <div className="text-[#8B5CF6] font-bold text-sm mb-2">STEP {s.step}</div>
              <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}