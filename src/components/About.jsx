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
            className="glass-card p-8 rounded-3xl relative transform-gpu"
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-[#00d2ff] to-[#aa3bff] rounded-3xl opacity-20 blur-sm"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-semibold mb-6 text-[#00d2ff]">Creative & Results-Oriented</h3>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                Digital Marketing & Generative AI Professional passionate about building AI-powered digital experiences. Specialized in combining creativity, marketing, automation, and artificial intelligence to develop engaging content, optimize digital visibility, and create innovative growth-driven solutions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                Expertise includes Digital Marketing, SEO & Content Optimization, Social Media Marketing, AI Prompt Engineering, AI Agents & Automation, AI-assisted Content Creation, Branding, Website Management, Copywriting, AI Video Editing, and AI Workflow Systems. Skilled in leveraging modern AI tools and creative technologies to streamline workflows, enhance audience engagement, and build intelligent digital ecosystems.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Driven by innovation, creativity, and continuous learning, with a strong interest in the future of AI-powered marketing, automation, content systems, and next-generation digital experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
