import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillsList = [
    { name: "Digital Marketing", level: 90 },
    { name: "Social Media Marketing", level: 85 },
    { name: "SEO & Content Optimization", level: 92 },
    { name: "AI Prompt Engineering", level: 95 },
    { name: "AI Agents & Automation", level: 88 },
    { name: "AI Video Editing", level: 82 }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-[#aa3bff]/5 skew-y-3 transform origin-top-left -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Core <span className="text-gradient">Competencies</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d2ff] to-[#aa3bff] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsList.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card p-6 rounded-2xl neon-border flex items-center justify-between group"
            >
              <span className="font-medium text-gray-200 group-hover:text-white transition-colors">{skill.name}</span>
              
              {/* Circular Indicator Placeholder for premium feel */}
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-gray-700"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <motion.path
                    initial={{ strokeDasharray: "0, 100" }}
                    animate={inView ? { strokeDasharray: `${skill.level}, 100` } : {}}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="text-[#00d2ff]"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00d2ff" />
                      <stop offset="100%" stopColor="#aa3bff" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="absolute text-xs font-bold text-white">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
