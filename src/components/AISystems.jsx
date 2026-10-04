import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Compass, Database, Activity, TrendingUp } from 'lucide-react';

export default function AISystems() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const systems = [
    {
      icon: <Compass className="w-8 h-8 text-[#FF3366]" />,
      title: "Strategy",
      desc: "Research, Planning, Analysis, Opportunity Assessment."
    },
    {
      icon: <Database className="w-8 h-8 text-[#7C3AED]" />,
      title: "Systems",
      desc: "Documentation, Automation, SOPs, Business Infrastructure."
    },
    {
      icon: <Activity className="w-8 h-8 text-[#FF3366]" />,
      title: "Execution",
      desc: "Projects, Operations, Coordination, Implementation."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#7C3AED]" />,
      title: "Growth",
      desc: "Marketing, SEO, Analytics, Optimization."
    }
  ];

  return (
    <section id="operating-system" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">My Startup <span className="text-gradient">Operating System</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF3366] to-[#7C3AED] mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {systems.map((sys, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="glass-card p-8 rounded-3xl border border-[#7C3AED]/20 hover:border-[#FF3366]/50 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 box-glow">
                {sys.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{sys.title}</h3>
              <p className="text-gray-400 leading-relaxed font-mono">{sys.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
