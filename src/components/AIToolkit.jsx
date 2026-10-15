import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, LineChart, Code2, Layers } from 'lucide-react';

export default function AIToolkit() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const categories = [
    { 
      title: "AI & Prompting", 
      icon: Bot, 
      tools: ["ChatGPT", "Claude", "Gemini", "Perplexity", "Midjourney", "Prompt Engineering"] 
    },
    { 
      title: "Marketing & SEO", 
      icon: LineChart, 
      tools: ["Google Search Console", "Google Analytics", "Ahrefs", "SEMrush", "Meta Ads Manager"] 
    },
    { 
      title: "Design & Web", 
      icon: Code2, 
      tools: ["WordPress", "Webflow", "Canva", "Figma", "HTML5 & CSS3"] 
    },
    { 
      title: "Systems & Productivity", 
      icon: Layers, 
      tools: ["Google Workspace", "MS Office", "Notion", "Zapier", "Data Analysis"] 
    }
  ];

  return (
    <section id="toolkit" className="py-24 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          ref={ref} 
          initial={{ opacity: 0, y: 30 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }} 
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF3366] bg-[#FF3366]/10 px-3 py-1 rounded-full">
            Stack & Tools
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3 mb-4">
            Toolkit & <span className="text-gradient">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF3366] to-[#7C3AED] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }} 
                animate={inView ? { opacity: 1, y: 0 } : {}} 
                transition={{ duration: 0.4, delay: idx * 0.1 }} 
                className="glass-card p-6 md:p-8 rounded-3xl hover:border-[#FF3366]/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF3366]/10 to-[#7C3AED]/10 flex items-center justify-center text-[#FF3366] mb-5">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.tools.map((t, i) => (
                    <span key={i} className="text-xs py-1.5 px-3 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
