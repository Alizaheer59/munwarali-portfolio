import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-[#00d2ff]/20 to-[#aa3bff]/20 blur-[100px] rounded-full"></div>

          <div className="relative z-10 flex items-center justify-center">
            {/* Animated Logo Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-[#00d2ff] to-[#aa3bff] p-[2px] shadow-[0_0_40px_rgba(170,59,255,0.4)]"
            >
              <div className="w-full h-full bg-[#050505] rounded-3xl flex items-center justify-center overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00d2ff]/10 to-[#aa3bff]/10"></div>
                
                <div className="font-display font-black text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-[#00d2ff] to-[#aa3bff] flex items-center gap-1 relative z-10 tracking-widest">
                  <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                  >
                    M
                  </motion.span>
                  <motion.span
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                  >
                    A
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, mt: 10 }}
            animate={{ opacity: 1, mt: 30 }}
            transition={{ delay: 0.8 }}
            className="text-gray-400 font-medium tracking-[0.3em] uppercase text-sm mt-8"
          >
            Loading...
          </motion.div>

          {/* Loading Bar */}
          <div className="w-48 h-1 bg-white/10 rounded-full mt-6 overflow-hidden relative">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#00d2ff] to-transparent"
            ></motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
