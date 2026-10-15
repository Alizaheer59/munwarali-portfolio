import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const eduData = [
    { 
      institution: "Andhra University", 
      degree: "MCA (online)", 
      duration: "2024–2026",
      score: "Pursuing",
      desc: "Master of Computer Applications focusing on advanced computing, software systems, and data technologies."
    },
    { 
      institution: "Aditya Degree College", 
      degree: "BSc Computer Science", 
      duration: "2019–2022",
      score: "CGPA: 7.58",
      desc: "Core foundations in computer science, software engineering, databases, and analytical problem solving."
    },
    { 
      institution: "Sri Prakash Junior College", 
      degree: "Intermediate", 
      duration: "2017–2019",
      score: "CGPA: 8.56",
      desc: "Higher secondary education with a strong emphasis on mathematics and science."
    },
    { 
      institution: "Sri Prakash Vidya Niketan", 
      degree: "Secondary School Certificate (SSC)", 
      duration: "2016–2017",
      score: "CGPA: 10.0",
      desc: "Completed secondary school education with a perfect 10.0 grade point average."
    }
  ];

  return (
    <section className="py-24 relative bg-black/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          ref={ref} 
          initial={{ opacity: 0, y: 30 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }} 
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF3366] bg-[#FF3366]/10 px-3 py-1 rounded-full">
            Academic Background
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3 mb-4">
            Education <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF3366] to-[#7C3AED] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {eduData.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }} 
              animate={inView ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              className="glass-card p-8 rounded-3xl relative group hover:border-[#7C3AED]/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#FF3366] bg-[#FF3366]/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Calendar size={13} /> {item.duration}
                </span>
                <span className="text-xs font-semibold text-[#7C3AED] bg-[#7C3AED]/10 px-3 py-1 rounded-full flex items-center gap-1">
                  <Award size={13} /> {item.score}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1.5 flex items-center gap-2">
                <GraduationCap size={22} className="text-[#FF3366]" /> {item.degree}
              </h3>
              <h4 className="text-lg text-gray-200 font-semibold mb-3">{item.institution}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
