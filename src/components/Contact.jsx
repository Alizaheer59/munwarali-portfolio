import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, Link, MapPin } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
            
            <div className="relative z-10 w-full h-[500px] rounded-xl overflow-hidden bg-black/30 border border-white/10">
              <zapier-interfaces-page-embed 
                page-id='cmpdy64e0002c4d8b09uonrbx' 
                test-id='cmpdy64e0002c4d8b09uonrbx-zapier-interfaces-page-embed-iframe' 
                no-background='false'  
                style={{ width: '100%', height: '100%', maxWidth: '100%' }}
              ></zapier-interfaces-page-embed>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
