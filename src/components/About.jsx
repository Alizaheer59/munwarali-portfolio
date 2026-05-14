import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d2ff] to-[#aa3bff] mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-3xl relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-[#00d2ff] to-[#aa3bff] rounded-3xl opacity-20 blur-sm"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-semibold mb-6 text-[#00d2ff]">Creative & Results-Oriented</h3>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                I am a digital marketing professional with a deep passion for integrating AI into creative workflows. My expertise lies in digital branding, social media marketing, content creation, and leveraging AI-powered systems to enhance online visibility and audience engagement.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                By bridging human creativity with future technologies, I build growth-focused communication systems that redefine modern digital strategy.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
