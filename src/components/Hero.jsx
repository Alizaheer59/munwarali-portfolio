import { motion } from 'framer-motion';
import { Mail, ArrowRight, Folder, FileText, Sparkles } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const highlights = [
    "Digital Marketing Campaigns",
    "AI Prompt Engineering",
    "SEO & Content Optimization",
    "Social Media Marketing",
    "Web Designing",
    "Data Analysis & Copywriting"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden text-center">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7C3AED]/20 rounded-full blur-[120px] animate-blob pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF3366]/20 rounded-full blur-[120px] animate-blob pointer-events-none" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-tr from-[#7C3AED]/20 to-[#FF3366]/20 rounded-full blur-[150px] animate-pulse-slow pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center justify-center gap-6">
          
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase bg-gradient-to-r from-[#FF3366]/10 to-[#7C3AED]/10 text-white border border-[#FF3366]/30 shadow-[0_0_15px_rgba(255,51,102,0.2)]">
              <Sparkles size={16} className="text-[#FF3366]" />
              Digital Marketing Specialist | AI Prompt Engineer
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="overflow-hidden">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-extrabold font-display leading-[1.1] tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#FF3366] via-white to-[#7C3AED]">
              Mohammed Munwar Ali Zaheer
            </h1>
            <p className="mt-3 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200 font-display">
              Digital Marketing Specialist <span className="text-[#FF3366]">&</span> AI Prompt Engineer
            </p>
          </motion.div>
          
          {/* Subtitle */}
          <motion.div variants={itemVariants} className="overflow-hidden max-w-3xl">
            <p className="mt-4 text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Driving brand growth through high-converting digital marketing campaigns, data-backed SEO, modern web design, and cutting-edge AI prompt engineering workflows that accelerate business outcomes.
            </p>
          </motion.div>

          {/* Skill Pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 max-w-2xl mt-2">
            {highlights.map((item, idx) => (
              <span key={idx} className="px-3 py-1 text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-gray-300">
                {item}
              </span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mt-8">
            <a 
              href="#projects" 
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#FF3366] to-[#7C3AED] text-white font-semibold flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,51,102,0.4)]"
            >
              <Folder size={18} /> View Projects
            </a>
            <a 
              href="/Mohammed_Munwar_Ali_Zaheer_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-7 py-3.5 rounded-xl glass-card neon-border text-white font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <FileText size={18} className="text-[#FF3366]" /> View Resume
            </a>
            <a 
              href="#contact" 
              className="px-7 py-3.5 rounded-xl glass-card border border-white/10 text-gray-200 font-semibold flex items-center gap-2 hover:bg-white/5 transition-colors group"
            >
              Let's Connect <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-[#7C3AED]" />
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
