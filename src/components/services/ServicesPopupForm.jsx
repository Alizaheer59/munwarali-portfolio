import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function ServicesPopupForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-services-popup', handleOpen);
    
    // Auto-open after 5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => {
      window.removeEventListener('open-services-popup', handleOpen);
      clearTimeout(timer);
    };
  }, []);

  // Prevent scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
          ></motion.div>

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] p-6 text-white text-center relative">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              <h3 className="text-2xl font-bold mb-1 font-display">Get a Free Quote</h3>
              <p className="text-white/80 text-sm">Let's discuss how we can grow your business.</p>
            </div>

            <div className="p-6 md:p-8">
              <form action="https://formspree.io/f/xlgqkwjw" method="POST" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-[#3B82F6] focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <input 
                    type="tel" 
                    name="mobile" 
                    required 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-[#3B82F6] focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all" 
                    placeholder="+1 (555) 000-0000" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-[#3B82F6] focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all" 
                    placeholder="john@example.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">What do you need help with?</label>
                  <select 
                    name="service" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-[#3B82F6] focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all"
                  >
                    <option value="Digital Marketing">Digital Marketing & SEO</option>
                    <option value="Web Development">Website Development</option>
                    <option value="AI Automation">AI Business Automation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-bold text-lg hover:shadow-[0_10_20px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 transition-all"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
