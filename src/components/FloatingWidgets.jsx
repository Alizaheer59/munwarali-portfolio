import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, MessageCircle, X, FileText } from 'lucide-react';

export default function FloatingWidgets() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello Mohammed Munwar Ali Zaheer, I visited your portfolio website and would like to connect with you.");
    window.open(`https://wa.me/916303822359?text=${message}`, '_blank');
  };

  const handleDownload = () => {
    // In a real app, this would be a link to actual PDF
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Mohammed_Munwar_Ali_Zaheer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsResumeModalOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* Resume Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsResumeModalOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-[#aa3bff] to-[#00d2ff] flex items-center justify-center text-white shadow-[0_0_20px_rgba(170,59,255,0.4)] relative group"
        >
          <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-75"></div>
          <FileText size={24} className="relative z-10" />
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 bg-black/80 backdrop-blur text-sm px-3 py-1.5 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Download Resume
          </div>
        </motion.button>

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

      {/* Resume Modal */}
      <AnimatePresence>
        {isResumeModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-2xl bg-[#0a0a0f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative"
            >
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <FileText className="text-[#00d2ff]" /> Resume Preview
                </h3>
                <button onClick={() => setIsResumeModalOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-8 flex flex-col items-center justify-center min-h-[300px] text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#00d2ff]/20 to-[#aa3bff]/20 flex items-center justify-center mb-6">
                  <FileText size={40} className="text-[#aa3bff]" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Mohammed Munwar Ali Zaheer</h4>
                <p className="text-[#00d2ff] mb-6">Digital Marketing & Generative AI Professional</p>
                <p className="text-gray-400 text-sm max-w-md mx-auto mb-8">
                  Get full details of my experience, skills, and education by downloading the PDF version.
                </p>
                
                <button 
                  onClick={handleDownload}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00d2ff] to-[#aa3bff] text-white font-bold text-lg hover:opacity-90 transition-opacity flex items-center gap-3 box-glow"
                >
                  <Download size={20} />
                  Download PDF
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
