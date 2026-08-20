import { motion } from 'framer-motion';
import { Download, Mail, MessageCircle, ArrowRight } from 'lucide-react';

export default function Hero() {
  const keywords = ["AI Automation", "Digital Marketing", "SEO", "GEO", "AEO", "AI Prompt Engineering", "AI Agents", "Content Strategy"];
  
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#aa3bff]/20 rounded-full blur-[120px] animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00d2ff]/20 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >

          <h1 className="text-5xl lg:text-7xl font-bold font-display leading-tight">
            MOHAMMED <br />
            MUNWAR ALI <br />
            <span className="text-gradient">ZAHEER</span>
          </h1>
          
          <h2 className="text-xl lg:text-2xl text-gray-300 font-light">
            AI-first digital marketing professional
          </h2>
          

          {/* Animated keywords */}
          <div className="h-8 overflow-hidden relative border-l-2 border-[#aa3bff] pl-4">
            <motion.div 
              animate={{ y: [0, -32 * (keywords.length - 1)] }}
              transition={{ repeat: Infinity, duration: keywords.length * 2, ease: "linear" }}
              className="flex flex-col"
            >
              {keywords.map((kw, i) => (
                <span key={i} className="h-8 flex items-center text-[#00d2ff] font-mono font-medium">
                  {kw}
                </span>
              ))}
              {/* Duplicate first element for seamless loop */}
              <span className="h-8 flex items-center text-[#00d2ff] font-mono font-medium">
                {keywords[0]}
              </span>
            </motion.div>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <a href="#contact" className="px-6 py-3 rounded-xl bg-white text-black font-semibold flex items-center gap-2 hover:scale-105 transition-transform">
              <Mail size={18} /> Contact Me
            </a>
            <a href="#experience" className="px-6 py-3 rounded-xl glass-card neon-border font-semibold flex items-center gap-2 hover:bg-white/5 transition-colors">
              <ArrowRight size={18} /> View Experience
            </a>
          </div>
        </motion.div>

        {/* 3D or abstract visual side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[500px] flex items-center justify-center"
        >
          <motion.div 
            whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
            className="relative w-full max-w-[400px] h-[400px] lg:h-[500px] mx-auto flex items-center justify-center transform-gpu cursor-pointer"
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
          >
             {/* Neon glow behind the image */}
             <div className="absolute inset-4 bg-gradient-to-tr from-[#aa3bff] to-[#00d2ff] rounded-3xl blur-2xl opacity-40 animate-pulse-slow"></div>
             
             {/* Image container */}
             <div className="absolute inset-0 glass-card rounded-3xl border-2 border-white/10 hover:border-[#00d2ff]/50 overflow-hidden transition-colors duration-500 flex items-center justify-center bg-black/40">
               <img 
                 src="/profile2.png" 
                 alt="Mohammed Munwar Ali Zaheer" 
                 className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-transform duration-700"
                 onError={(e) => {
                   e.target.onerror = null;
                   e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500"; // Fallback professional placeholder
                 }}
               />
               
               {/* Overlay gradient for futuristic depth */}
               <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 pointer-events-none"></div>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
