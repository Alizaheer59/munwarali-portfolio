import { motion } from 'framer-motion';
import { BrainCircuit, Workflow, MessageSquare, Briefcase, FileSearch, Database, Code, Plug } from 'lucide-react';

const services = [
  { icon: <BrainCircuit />, title: "AI Consulting & Strategy", desc: "Align AI capabilities with your business goals for maximum impact." },
  { icon: <Workflow />, title: "Workflow Automation", desc: "Eliminate manual tasks with intelligent robotic process automation." },
  { icon: <MessageSquare />, title: "AI Chatbots & Agents", desc: "Deploy 24/7 autonomous agents for customer support and sales." },
  { icon: <Briefcase />, title: "Enterprise AI Solutions", desc: "Custom AI infrastructure designed for massive scale and security." },
  { icon: <FileSearch />, title: "Document Intelligence", desc: "Extract, analyze, and process data from unstructured documents automatically." },
  { icon: <Database />, title: "Knowledge Management", desc: "Build private LLM systems (RAG) using your proprietary company data." },
  { icon: <Code />, title: "Custom AI Software", desc: "End-to-end development of AI-native SaaS and internal tools." },
  { icon: <Plug />, title: "AI Integrations", desc: "Seamlessly connect AI APIs into your existing tech stack (CRM, ERP)." }
];

export default function AIServicesGrid() {
  return (
    <section id="services" className="py-24 bg-[#0B1020]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our <span className="text-[#3B82F6]">AI Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Comprehensive artificial intelligence solutions tailored to modernize your operations.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#141B2D] border border-white/5 hover:border-[#3B82F6]/50 p-8 rounded-2xl group transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}