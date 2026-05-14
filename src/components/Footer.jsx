export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 relative z-10 bg-black">
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#00d2ff] to-[#aa3bff] flex items-center justify-center font-bold text-xl text-white mb-6 shadow-[0_0_15px_rgba(170,59,255,0.5)]">
          MA
        </div>
        
        <p className="text-xl font-display font-medium text-white mb-2">Mohammed Munwar Ali Zaheer</p>
        <p className="text-gray-400 text-sm mb-8">Human creativity powered by Artificial Intelligence.</p>
        
        <div className="flex gap-6 mb-8">
          <a href="#home" className="text-sm text-gray-400 hover:text-white transition-colors">Home</a>
          <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
        
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} MunwarAli.in. All Rights Reserved. Designed with futuristic AI aesthetics.
        </p>
      </div>
    </footer>
  );
}
