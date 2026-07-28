import { Link } from 'react-router-dom';

export default function ServicesNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group relative z-50">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center font-bold text-lg text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            AI
          </div>
          <div className="font-display font-bold text-xl tracking-wide flex flex-col leading-none">
            <span className="text-gray-900">Munwar</span>
            <span className="text-[#8B5CF6] text-sm">AI Labs</span>
          </div>
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-gray-500 hover:text-[#3B82F6] transition-colors text-sm font-medium">Back to Portfolio</Link>
          <a href="#contact" className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:opacity-90 text-white text-sm font-semibold transition-all shadow-md">Get Started</a>
        </div>
      </div>
    </nav>
  );
}