import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, Link, MapPin, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Website design',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const services = [
    "Website design",
    "Digital marketing",
    "Social Media Management",
    "Video and Content Creation"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // Send as text/plain to avoid CORS preflight issues with Google Apps Script
      await fetch('https://script.google.com/macros/s/AKfycbxPi29kuEjSG_NbMiECgnOoDhLLUuQEFcEQ1YqMFLAaeh9rhtVzo7NU4gU2E_E4urw/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });
      
      // With mode: no-cors, we can't read the response properly, but if it doesn't throw, it likely succeeded.
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', service: 'Website design', message: '' });
      
    } catch (error) {
      console.error("Error submitting form", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-[#00d2ff]/5 skew-y-[-3deg] transform origin-top-right -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Let's <span className="text-gradient">Connect</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d2ff] to-[#aa3bff] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group hover:border-[#00d2ff]/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-[#00d2ff]/10 flex items-center justify-center text-[#00d2ff] group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm">Phone</h4>
                <a href="tel:+916303822359" className="text-xl font-semibold text-white hover:text-[#00d2ff] transition-colors">+91 6303822359</a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group hover:border-[#aa3bff]/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-[#aa3bff]/10 flex items-center justify-center text-[#aa3bff] group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm">Email</h4>
                <a href="mailto:alizaheermohammed@gmail.com" className="text-xl font-semibold text-white hover:text-[#aa3bff] transition-colors break-all">alizaheermohammed@gmail.com</a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group hover:border-[#00d2ff]/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-[#00d2ff]/10 flex items-center justify-center text-[#00d2ff] group-hover:scale-110 transition-transform">
                <Link size={24} />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm">LinkedIn</h4>
                <a href="https://www.linkedin.com/in/munwaralizaheer" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-white hover:text-[#00d2ff] transition-colors">munwaralizaheer</a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group hover:border-[#aa3bff]/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-[#aa3bff]/10 flex items-center justify-center text-[#aa3bff] group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm">Location</h4>
                <p className="text-xl font-semibold text-white">Visakhapatnam, Andhra Pradesh</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-[#00d2ff] to-[#aa3bff] rounded-3xl opacity-20 blur-xl"></div>
            
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6 text-green-400">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-400">Thank you for reaching out. I'll get back to you shortly.</p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="mt-8 px-6 py-2 rounded-xl border border-white/20 hover:bg-white/5 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-5" 
                    onSubmit={handleSubmit}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Name *</label>
                        <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00d2ff] transition-colors" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Phone *</label>
                        <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#aa3bff] transition-colors" placeholder="+91 9876543210" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Email *</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00d2ff] transition-colors" placeholder="john@example.com" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Service Required *</label>
                      <select required name="service" value={formData.service} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#aa3bff] transition-colors appearance-none">
                        {services.map(service => (
                          <option key={service} value={service} className="bg-[#050505] text-white">{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Message *</label>
                      <textarea required rows="4" name="message" value={formData.message} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00d2ff] transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-red-400 text-sm">
                        <AlertCircle size={16} />
                        <span>There was an error sending your message. Please try again.</span>
                      </div>
                    )}

                    <button 
                      disabled={status === 'submitting'}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00d2ff] to-[#aa3bff] text-white font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group box-glow disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
