import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Settings, LineChart, Briefcase } from 'lucide-react';

export default function AIToolkit() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const categories = [
    { title: "AI Tools", icon: Bot, tools: ["ChatGPT", "Claude", "Gemini", "Perplexity", "Cursor"] },
    { title: "Automation", icon: Settings, tools: ["n8n", "Zapier", "Make", "Google Apps Script"] },
    { title: "Growth", icon: LineChart, tools: ["Google Analytics", "Search Console", "Google Tag Manager", "Ahrefs"] },
    { title: "Operations", icon: Briefcase, tools: ["Notion", "ClickUp", "Google Workspace", "Airtable"] }
  ];

  return (
    <section id="toolkit" className="py-24 relative overflow-hidden bg-black/40">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Tools <span className="text-gradient">I Use</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF3366] to-[#7C3AED] mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className="glass-card p-8 rounded-3xl relative group">
              <div className="flex items-center gap-4 mb-6">
                <cat.icon size={28} className="text-[#FF3366]" />
                <h3 className="text-2xl font-bold text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {cat.tools.map((tool, idx) => (
                  <span key={idx} className="px-4 py-2 text-sm font-medium bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:border-[#FF3366]/50 transition-colors">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
