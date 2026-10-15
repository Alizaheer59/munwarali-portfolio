import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Link, Globe } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Digital Marketing Campaigns',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const services = [
    'Digital Marketing Campaigns',
    'AI Prompt Engineering',
    'SEO & Content Optimization',
    'Social Media Marketing',
    'Web Designing',
    'Copywriting & Creative Content',
    'Competitor & Data Analysis'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('https://formspree.io/f/xbjnqkyk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', service: 'Digital Marketing Campaigns', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF3366] bg-[#FF3366]/10 px-3 py-1 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3 mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF3366] to-[#7C3AED] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Have a Project or Growth Goal?
            </h3>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-4">
              Whether you need strategic digital marketing campaigns, high-impact SEO, responsive web design, or custom AI prompt engineering workflows, I am here to help you scale.
            </p>

            {/* Phone */}
            <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group hover:border-[#FF3366]/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-[#FF3366]/10 flex items-center justify-center text-[#FF3366] group-hover:scale-110 transition-transform shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm">Phone</h4>
                <a href="tel:+916303822359" className="text-xl font-semibold text-white hover:text-[#FF3366] transition-colors">
                  +91 6303822359
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group hover:border-[#7C3AED]/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED] group-hover:scale-110 transition-transform shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm">Email</h4>
                <a href="mailto:alizaheermohammed@gmail.com" className="text-xl font-semibold text-white hover:text-[#7C3AED] transition-colors break-all">
                  alizaheermohammed@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group hover:border-[#FF3366]/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-[#FF3366]/10 flex items-center justify-center text-[#FF3366] group-hover:scale-110 transition-transform shrink-0">
                <Link size={24} />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm">LinkedIn</h4>
                <a href="https://www.linkedin.com/in/munwaralizaheer" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-white hover:text-[#FF3366] transition-colors">
                  linkedin.com/in/munwaralizaheer
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group hover:border-[#7C3AED]/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-[#7C3AED]/10 flex items-center justify-center text-[#7C3AED] group-hover:scale-110 transition-transform shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm">Location</h4>
                <p className="text-xl font-semibold text-white">Visakhapatnam, Andhra Pradesh, India</p>
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
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-[#FF3366] to-[#7C3AED] rounded-3xl opacity-20 blur-xl"></div>
            
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
                    <p className="text-gray-400">Thank you for reaching out. I will get back to you shortly.</p>
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
                        <label htmlFor="contact-name" className="block text-sm font-medium text-gray-400 mb-1">Name *</label>
                        <input id="contact-name" required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF3366] transition-colors" placeholder="Your Name" />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-400 mb-1">Phone *</label>
                        <input id="contact-phone" required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#7C3AED] transition-colors" placeholder="+91 6303822359" />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-gray-400 mb-1">Email *</label>
                      <input id="contact-email" required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF3366] transition-colors" placeholder="your@email.com" />
                    </div>

                    <div>
                      <label htmlFor="contact-service" className="block text-sm font-medium text-gray-400 mb-1">Service Required *</label>
                      <select id="contact-service" required name="service" value={formData.service} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#7C3AED] transition-colors appearance-none">
                        {services.map(service => (
                          <option key={service} value={service} className="bg-[#050505] text-white">{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium text-gray-400 mb-1">Message *</label>
                      <textarea id="contact-message" required rows="4" name="message" value={formData.message} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF3366] transition-colors resize-none" placeholder="Tell me about your project or marketing goals..."></textarea>
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-red-400 text-sm">
                        <AlertCircle size={16} />
                        <span>There was an error sending your message. Please try again.</span>
                      </div>
                    )}

                    <button 
                      disabled={status === 'submitting'}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF3366] to-[#7C3AED] text-white font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group box-glow disabled:opacity-50 disabled:cursor-not-allowed"
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
