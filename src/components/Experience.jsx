import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const experiences = [
    {
      company: "Transformix Global LLP",
      role: "AI Digital Marketing Lead",
      duration: "Jan 2026 – March 2026",
      location: "Visakhapatnam, AP",
      desc: "Spearheaded digital marketing initiatives, website design, and AI-driven process automation.",
      points: [
        "Designed and launched the company website and digital presence.",
        "Managed Google Workspace, employee onboarding, and IT infrastructure.",
        "Led digital marketing and go-to-market (GTM) initiatives.",
        "Implemented AI tools and process automation to improve operations."
      ]
    },
    {
      company: "HPCL – Skill Development Institute",
      role: "Digital Marketing Specialist",
      duration: "Jan 2024 – Dec 2025",
      location: "Visakhapatnam, AP",
      desc: "Drove digital marketing campaigns, creative branding, website content management, and audience growth.",
      points: [
        "Created marketing creatives for digital campaigns and branding.",
        "Managed website content and improved online visibility.",
        "Supported social media marketing and audience engagement.",
        "Developed marketing content and promotional materials.",
        "Used AI tools for content creation and marketing workflows.",
        "Collaborated with cross-functional teams on marketing projects."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black/40">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          ref={ref} 
          initial={{ opacity: 0, y: 30 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }} 
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF3366] bg-[#FF3366]/10 px-3 py-1 rounded-full">
            Work History
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3 mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF3366] to-[#7C3AED] mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-[#7C3AED]/30 ml-4 md:ml-0 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -30 }} 
              animate={inView ? { opacity: 1, x: 0 } : {}} 
              transition={{ duration: 0.6, delay: index * 0.2 }} 
              className="ml-8 relative"
            >
              <div className="absolute -left-[41px] top-1 w-6 h-6 bg-[#050505] border-2 border-[#FF3366] rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(255,51,102,0.6)]">
                <div className="w-2 h-2 bg-[#7C3AED] rounded-full"></div>
              </div>
              <div className="glass-card p-8 rounded-3xl hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="text-xs font-mono text-[#FF3366] bg-[#FF3366]/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Calendar size={13} /> {exp.duration}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <MapPin size={13} className="text-[#7C3AED]" /> {exp.location}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                <h4 className="text-lg font-semibold text-[#7C3AED] mb-3">{exp.company}</h4>
                <p className="text-gray-400 mb-5 text-sm italic">{exp.desc}</p>
                
                <ul className="space-y-2.5">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2.5 text-sm md:text-base">
                      <span className="text-[#FF3366] mt-1 shrink-0">▹</span>
                      <span>{point}</span>
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
