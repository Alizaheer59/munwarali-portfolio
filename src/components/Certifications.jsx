import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, CheckCircle } from 'lucide-react';

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const certs = [
    {
      title: "AI Tools Workshop Certification",
      issuer: "Be 10x",
      tag: "AI & Productivity"
    },
    {
      title: "Generative AI Mastermind Certificate",
      issuer: "Outskill Academy",
      tag: "Generative AI"
    },
    {
      title: "Web Development with AI Certification",
      issuer: "Coursera",
      tag: "Web & AI"
    },
    {
      title: "Digital Marketing Certification",
      issuer: "Skill Development Institute",
      tag: "Digital Marketing"
    }
  ];

  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF3366] bg-[#FF3366]/10 px-3 py-1 rounded-full">
            Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3 mb-4">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF3366] to-[#7C3AED] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 rounded-3xl relative group overflow-hidden hover:border-[#FF3366]/40 transition-colors"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FF3366]/10 to-[#7C3AED]/10 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-[#FF3366] transition-colors">
                  <Award className="text-[#FF3366] w-7 h-7 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-mono text-[#7C3AED] bg-[#7C3AED]/10 px-2.5 py-0.5 rounded-full inline-block mb-2">
                    {cert.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#FF3366] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium flex items-center gap-1.5">
                    <CheckCircle size={15} className="text-green-400" /> Issued by: {cert.issuer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
