import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden text-center">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7C3AED]/20 rounded-full blur-[120px] animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF3366]/20 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-tr from-[#7C3AED]/20 to-[#FF3366]/20 rounded-full blur-[150px] animate-pulse-slow"></div>

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center gap-6"
        >
          {/* Animated Name */}
          <motion.div variants={itemVariants} className="overflow-hidden">
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold font-display leading-tight tracking-tight uppercase">
              MOHAMMED <br />
              MUNWAR ALI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3366] to-[#7C3AED]">ZAHEER</span>
            </h1>
          </motion.div>
          
          {/* Animated Headline */}
          <motion.div variants={itemVariants} className="overflow-hidden max-w-3xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light mt-4 leading-relaxed">
              Digital Marketing Professional <span className="text-[#FF3366] font-medium">&</span> Media Content Specialist
            </h2>
            <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Blending creativity, AI automation, and modern digital strategies to build unforgettable brand experiences and drive growth.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mt-10">
            <a href="#contact" className="px-8 py-4 rounded-xl bg-white text-black font-semibold flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,51,102,0.3)]">
              <Mail size={20} /> Contact Me
            </a>
            <a href="#experience" className="px-8 py-4 rounded-xl glass-card neon-border font-semibold flex items-center gap-2 hover:bg-white/5 transition-colors group">
              View Experience <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
