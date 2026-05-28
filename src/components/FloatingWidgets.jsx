import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingWidgets() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello Mohammed Munwar Ali Zaheer, I visited your portfolio website and would like to connect with you.");
    window.open(`https://wa.me/916303822359?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        onClick={handleWhatsApp}
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] relative group"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-75"></div>
        <MessageCircle size={28} className="relative z-10" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 bg-black/80 backdrop-blur text-sm px-3 py-1.5 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
        </div>
      </motion.button>
    </div>
  );
}
