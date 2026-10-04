import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black/40">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">From Digital Growth to <span className="text-gradient">Startup Operations</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF3366] to-[#7C3AED] mx-auto rounded-full mb-10"></div>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="glass-card p-8 md:p-12 rounded-3xl relative transform-gpu hover:border-[#7C3AED]/30 transition-colors duration-500">
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-semibold mb-8 text-[#FF3366]">My Personal Philosophy</h3>
              <blockquote className="text-xl italic text-gray-200 mb-10 border-l-4 border-[#7C3AED] pl-6 text-left">
                "Technology alone does not create growth. Execution creates growth."
              </blockquote>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg text-left">
                I am a startup-focused professional with experience across Founder’s Office functions, AI implementation, startup operations, business systems, growth marketing, and digital transformation.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg text-left">
                My journey began in digital marketing and evolved into supporting business leaders through operational execution, technology adoption, process optimization, and AI-powered workflows. I enjoy solving business challenges where strategy, execution, technology, growth, and operations intersect.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg text-left">
                My goal is to help organizations scale efficiently by combining operational discipline, AI tools, business systems, and growth-focused execution. I believe the future belongs to professionals who can combine technology, AI, systems thinking, and operational excellence to solve business problems and create scalable outcomes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
