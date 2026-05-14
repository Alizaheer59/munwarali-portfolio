import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const eduData = [
    {
      institution: "Andhra University",
      degree: "MCA (Online)",
      duration: "2024–2026",
      details: "Master of Computer Applications focused on advanced computing."
    },
    {
      institution: "Aditya Degree College",
      degree: "BSc Computer Science",
      duration: "2019–2022",
      details: "CGPA: 7.58"
    },
    {
      institution: "Sri Prakash Junior College",
      degree: "Intermediate",
      duration: "2017–2019",
      details: "CGPA: 8.56"
    },
    {
      institution: "Sri Prakash Vidya Niketan",
      degree: "SSC",
      duration: "2016–2017",
      details: "CGPA: 10.0"
    }
  ];

  return (
    <section className="py-24 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Academic <span className="text-gradient">Journey</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d2ff] to-[#aa3bff] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eduData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#aa3bff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="text-[#00d2ff] font-mono text-sm mb-2">{item.duration}</div>
              <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
              <h4 className="text-md text-[#aa3bff] font-medium mb-4">{item.institution}</h4>
              <p className="text-gray-400 text-sm">{item.details}</p>
              
              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#00d2ff] to-[#aa3bff] w-0 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
