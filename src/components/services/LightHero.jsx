import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function LightHero() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-white">
      {/* Soft Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3B82F6]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#8B5CF6]/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#3B82F6] text-sm font-semibold mb-8">
            <Sparkles size={16} /> Digital Marketing & AI Consulting
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-8 font-display">
            Accelerate Your Online <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]">Visibility & Scale</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            We empower local businesses, educational institutions, and organizations with cutting-edge digital marketing, automated workflows, and custom AI technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-services-popup')); }} href="#" className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-bold hover:shadow-[0_10_30px_rgba(59,130,246,0.3)] hover:-translate-y-1 transition-all flex items-center gap-2 text-lg">
              Book a Free Consultation <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}