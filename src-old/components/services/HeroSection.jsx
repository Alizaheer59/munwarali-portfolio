import { motion } from 'framer-motion';
import { Network, Cpu, Shield, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#0B1020]">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 text-[#06B6D4] text-sm font-semibold mb-6">
            Local & SMB AI IT Services
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6]">Intelligent AI Solutions</span>
          </h1>
          <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
            We design, build, and deploy custom AI systems, intelligent automation, AI agents, and tailored software that help businesses save time, reduce operational costs, and improve productivity.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white font-bold hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all flex items-center gap-2">
              Book Free Consultation <ArrowRight size={18} />
            </a>
            <a href="#services" className="px-8 py-4 rounded-xl border border-white/10 hover:border-white/30 text-white font-bold transition-all bg-[#141B2D]">
              Explore Solutions
            </a>
          </div>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
          <div className="aspect-square rounded-3xl border border-white/5 bg-[#141B2D]/50 backdrop-blur-2xl p-8 relative shadow-2xl">
            {/* Dashboard Mockup Representation */}
            <div className="w-full h-full border border-white/10 rounded-2xl bg-[#0B1020] relative overflow-hidden flex flex-col p-6 gap-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                 <div className="w-32 h-4 bg-white/10 rounded-full animate-pulse"></div>
                 <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div></div>
              </div>
              <div className="grid grid-cols-2 gap-4 h-full">
                 <div className="bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-xl p-4 flex flex-col justify-between">
                   <Network className="text-[#3B82F6]" size={32} />
                   <div className="w-24 h-2 bg-[#3B82F6]/50 rounded-full mt-4"></div>
                 </div>
                 <div className="bg-[#06B6D4]/10 border border-[#06B6D4]/30 rounded-xl p-4 flex flex-col justify-between">
                   <Cpu className="text-[#06B6D4]" size={32} />
                   <div className="w-20 h-2 bg-[#06B6D4]/50 rounded-full mt-4"></div>
                 </div>
                 <div className="col-span-2 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-xl p-4 flex items-center gap-4">
                    <Shield className="text-[#8B5CF6]" size={32} />
                    <div className="flex-1 space-y-2">
                       <div className="w-full h-2 bg-[#8B5CF6]/30 rounded-full"></div>
                       <div className="w-3/4 h-2 bg-[#8B5CF6]/50 rounded-full"></div>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-6 -left-6 bg-[#141B2D] border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3">
               <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-500 font-bold">99%</div>
               <div className="text-sm text-gray-300">Accuracy</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}