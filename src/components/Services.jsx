import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Settings, Cpu, TrendingUp, Layers, Rocket } from 'lucide-react';

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const services = [
    {
      icon: <Briefcase size={32} />,
      title: "Founder's Office",
      points: ["Strategic Execution", "Business Operations", "Leadership Support", "Project Coordination", "Cross-functional Collaboration", "Documentation & Reporting"]
    },
    {
      icon: <Settings size={32} />,
      title: "Startup Operations",
      points: ["Process Improvement", "SOP Development", "Internal Systems", "Team Coordination", "Workflow Optimization", "Operational Excellence"]
    },
    {
      icon: <Cpu size={32} />,
      title: "AI & Automation",
      points: ["Prompt Engineering", "AI Workflow Design", "AI Tool Integration", "Process Automation", "AI Productivity Systems", "Business Automation"]
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Growth & GTM",
      points: ["Go-To-Market Execution", "SEO", "Content Strategy", "Digital Growth", "Brand Visibility", "Marketing Analytics"]
    },
    {
      icon: <Layers size={32} />,
      title: "Business Systems",
      points: ["Google Workspace Admin", "Website Development", "Digital Infrastructure", "Knowledge Management", "Internal Tools Setup", "Documentation Systems"]
    },
    {
      icon: <Rocket size={32} />,
      title: "Technology & Innovation",
      points: ["AI Adoption", "Emerging Technologies", "SaaS Evaluation", "Business Transformation", "Productivity Optimization", "Digital Enablement"]
    }
  ];

  return (
    <section id="expertise" className="py-24 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Core <span className="text-gradient">Expertise</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF3366] to-[#7C3AED] mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: idx * 0.1 }} className="glass-card p-8 rounded-2xl group border border-white/5 hover:border-[#7C3AED]/30">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF3366]/20 to-[#7C3AED]/20 flex items-center justify-center text-[#FF3366] mb-6 group-hover:text-white transition-colors duration-300">
                {svc.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{svc.title}</h3>
              <ul className="space-y-2">
                {svc.points.map((pt, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-center gap-2"><span className="text-[#FF3366] text-xs">▹</span>{pt}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
