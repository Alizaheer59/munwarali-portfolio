import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const experiences = [
    {
      company: "Skill Development Institute, Visakhapatnam",
      role: "Digital Marketing Associate",
      duration: "2024–2025",
      points: [
        "Created marketing creatives and promotional materials",
        "Managed institutional branding and website management",
        "Improved online visibility and social media engagement",
        "Assisted CEO as a Corporate Co-trainer"
      ]
    },
    {
      company: "Transformix Global LLP",
      role: "AI Generalist",
      duration: "Jan 2026 – March 2026",
      points: [
        "Leveraged AI systems for optimized workflows",
        "Assisted in content systems and automation processes",
        "Explored and implemented cutting-edge AI tools"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black/40">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Professional <span className="text-gradient">Experience</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d2ff] to-[#aa3bff] mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-[#3a7bd5]/30 ml-4 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 ml-8 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-1 w-6 h-6 bg-[#050505] border-2 border-[#00d2ff] rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(0,210,255,0.6)]">
                <div className="w-2 h-2 bg-[#aa3bff] rounded-full"></div>
              </div>

              <div className="glass-card p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
                <span className="text-sm font-mono text-[#aa3bff] bg-[#aa3bff]/10 px-3 py-1 rounded-full">{exp.duration}</span>
                <h3 className="text-2xl font-bold text-white mt-4 mb-1">{exp.role}</h3>
                <h4 className="text-lg text-[#00d2ff] mb-4">{exp.company}</h4>
                
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2 text-sm md:text-base">
                      <span className="text-[#00d2ff] mt-1">▹</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
