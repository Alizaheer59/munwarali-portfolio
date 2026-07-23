import { Link } from 'react-router-dom';

export default function ServicesNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1020]/90 backdrop-blur-md border-b border-white/5 py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group relative z-50">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3B82F6] to-[#06B6D4] flex items-center justify-center font-bold text-lg text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]">
            AI
          </div>
          <div className="font-display font-bold text-xl tracking-wide flex flex-col leading-none">
            <span className="text-white">Munwar</span>
            <span className="text-[#06B6D4] text-sm">AI Labs</span>
          </div>
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Back to Portfolio</Link>
          <a href="#contact" className="px-5 py-2 rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-semibold transition-colors">Get Started</a>
        </div>
      </div>
    </nav>
  );
}