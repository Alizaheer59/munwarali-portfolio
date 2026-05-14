import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Network, Bot, Sparkles } from 'lucide-react';

export default function AISystems() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const systems = [
    {
      icon: <Bot className="w-8 h-8 text-[#00d2ff]" />,
      title: "AI Agents & Automation",
      desc: "Building autonomous systems to handle repetitive tasks, enhancing productivity and streamlining digital workflows."
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#aa3bff]" />,
      title: "Prompt Engineering",
      desc: "Crafting precise, highly-effective prompts to unlock the full potential of LLMs for content creation and logic."
    },
    {
      icon: <Network className="w-8 h-8 text-[#00d2ff]" />,
      title: "GEO & AEO Systems",
      desc: "Architecting discoverability for AI models—ensuring content is cited by ChatGPT, Claude, and Perplexity."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#aa3bff]" />,
      title: "AI Creativity",
      desc: "Merging human vision with generative tools for unprecedented design, video, and audio production."
    }
  ];

  return (
    <section id="ai-systems" className="py-24 relative overflow-hidden">
      {/* Holographic Neural Network Background Placeholder */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
           <defs>
             <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
               <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#aa3bff" strokeWidth="0.5" />
             </pattern>
           </defs>
           <rect width="100%" height="100%" fill="url(#grid)" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">AI <span className="text-gradient">Systems</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d2ff] to-[#aa3bff] mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">Future-proofing marketing through AI-assisted workflows, discoverability systems, and generative intelligence.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {systems.map((sys, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-[#aa3bff]/20 hover:border-[#00d2ff]/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 box-glow">
                {sys.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{sys.title}</h3>
              <p className="text-gray-400 leading-relaxed">{sys.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
