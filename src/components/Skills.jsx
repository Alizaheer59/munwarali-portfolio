import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const skillsList = [
    { cat: "Startup Operations", items: ["Business Operations", "Project Management", "Team Coordination", "Process Improvement", "Documentation"] },
    { cat: "AI & Automation", items: ["Prompt Engineering", "AI Workflows", "Automation", "Generative AI", "AI Research"] },
    { cat: "Growth", items: ["SEO", "Content Strategy", "Digital Marketing", "Marketing Analytics", "GTM Support"] },
    { cat: "Technology", items: ["WordPress", "Google Workspace", "GitHub", "Vercel", "Canva", "Notion"] }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Core <span className="text-gradient">Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF3366] to-[#7C3AED] mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsList.map((skillGroup, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: index * 0.1 }} className="glass-card p-8 rounded-3xl group">
              <h3 className="text-2xl font-bold text-[#FF3366] mb-6">{skillGroup.cat}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map((item, idx) => (
                  <li key={idx} className="text-gray-300 font-medium">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
