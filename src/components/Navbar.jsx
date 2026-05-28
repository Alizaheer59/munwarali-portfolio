import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group relative z-50">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00d2ff] to-[#aa3bff] flex items-center justify-center font-bold text-lg text-white shadow-[0_0_15px_rgba(170,59,255,0.5)]">
            MA
          </div>
          <div className="font-display font-bold text-xl tracking-wide flex items-center">
            <span className="text-white mr-1.5">Munwar</span>
            <div className="relative overflow-hidden h-8 w-10 flex items-center">
              <motion.span 
                animate={{ y: ["0%", "-100%", "-100%", "0%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.5, 0.7, 1] }}
                className="text-white absolute left-0 flex items-center h-full"
              >
                Ali
              </motion.span>
              <motion.span 
                animate={{ y: ["100%", "0%", "0%", "100%", "100%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.5, 0.7, 1] }}
                className="text-gradient absolute left-0 flex items-center h-full font-black drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              >
                AI
              </motion.span>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00d2ff] to-[#aa3bff] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a href="/Mohammed_Munwar_Ali_Zaheer_Resume.png" download="Mohammed_Munwar_Ali_Zaheer_Resume.png" className="ml-4 px-5 py-2 rounded-xl bg-gradient-to-r from-[#00d2ff] to-[#aa3bff] text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(0,210,255,0.3)] flex items-center gap-2">
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -20 }}
        className={`lg:hidden fixed inset-0 bg-[#050505]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-6 ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {navLinks.map((link, i) => (
          <motion.a 
            key={link.name} 
            href={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 20 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-bold text-gray-300 hover:text-white hover:text-gradient transition-all"
          >
            {link.name}
                    </motion.a>
        ))}
        <motion.a
          href="/Mohammed_Munwar_Ali_Zaheer_Resume.png" download="Mohammed_Munwar_Ali_Zaheer_Resume.png"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 20 }}
          transition={{ delay: navLinks.length * 0.05 }}
          className="mt-4 px-8 py-3 rounded-xl bg-gradient-to-r from-[#00d2ff] to-[#aa3bff] text-white font-bold transition-all"
        >
          Download Resume
        </motion.a>
      </motion.div>
    </nav>
  );
}
