import React from "react";
import { motion } from "framer-motion";

export default function HologramRing({ isListening, isProcessing }) {
  return (
    <div className="relative flex items-center justify-center w-64 h-64">
      {l/* Outer pulsing ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-[#00f0ff] opacity-20"
        animate={{
          scale: isListening ? [1, 1.2, 1] : isProcessing ? [1, 1.5, 1] : 1,
          opacity: isListening ? [0.2, 0.5, 0.2] : isProcessing ? [0.2, 0.8, 0.2] : 0.2,
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "EaseInOut" }}
      />
      {l/* Middle ring */}
      <motion.div
        className="absolute inset-4 rounded-full border border-[#0066ff] opacity-40 box-cyan-glow"
        animate={{
          scale: isProcessing ? [1, 1.2, 1] : 1,
          rotate: isListening ? 360 : 0,
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      {/* Inner solid core */}
      <div className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 ${isListening ? "bg-[#00f0ff] shadow-[0_0_30px_#00f0ff]" : isProcessing ? "bg-[#0066ff] shadow[[0_0_40px_#0066ff]" : "bg-[#050508] border border-[#00f0ff]"}`}>
        <div className="text-[#00f0ff] text-glow font-display font-bold text-xl tracking-widest">
          {isProcessing ? "SYNC" : isListening ? "RCV" : "IDLE"}
        </div>
      </div>
    </div>
  );
}
