import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Megaphone, Search, Zap, Video, Palette, Globe } from 'lucide-react';

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    { icon: <Megaphone />, title: "Digital Marketing", desc: "Comprehensive campaigns for brand growth." },
    { icon: <Search />, title: "SEO / GEO / AEO", desc: "Search and Answer Engine Optimization." },
    { icon: <Zap />, title: "AI Automation", desc: "Streamlined AI-driven business workflows." },
    { icon: <Video />, title: "AI Video Editing", desc: "High-retention UGC and short-form content." },
    { icon: <Palette />, title: "Branding Strategy", desc: "Futuristic and modern brand identities." },
    { icon: <Globe />, title: "Website Design", desc: "Premium, fast, and SEO-optimized web experiences." }
  ];

  return (
    <section id="services" className="py-24 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Core <span className="text-gradient">Services</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d2ff] to-[#aa3bff] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl text-center group hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-[#aa3bff]/30"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#00d2ff]/20 to-[#aa3bff]/20 flex items-center justify-center text-[#00d2ff] mb-6 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
