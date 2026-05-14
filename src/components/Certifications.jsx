import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const certs = [
    "Google Digital Garage – Fundamentals of Digital Marketing",
    "HubSpot Content Marketing Certification",
    "Hootsuite Social Media Marketing Certification",
    "Digital Marketing Certification – Skill Development Institute",
    "Project Management Certification – Microsoft & LinkedIn"
  ];

  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Professional <span className="text-gradient">Certifications</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d2ff] to-[#aa3bff] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
              animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl relative group overflow-hidden perspective-1000 transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00d2ff]/20 to-[#aa3bff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center h-full justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#00d2ff] transition-colors duration-300">
                  <Award className="text-[#aa3bff] w-8 h-8 group-hover:text-[#00d2ff] transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">{cert}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
