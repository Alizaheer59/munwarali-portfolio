import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Megaphone, Bot, Layout, BarChart3 } from "lucide-react";

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const skillCategories = [
    {
      icon: Megaphone,
      title: "Digital Marketing & Growth",
      items: [
        "Digital Marketing Campaigns",
        "Content Marketing",
        "SEO & Content Optimization",
        "Social Media Marketing",
        "Email Marketing (Basic)"
      ]
    },
    {
      icon: Bot,
      title: "AI & Prompt Engineering",
      items: [
        "AI Prompt Engineering",
        "AI Marketing Automation",
        "Generative AI & LLMs",
        "AI Content Creation",
        "Python Basics & AI Workflows"
      ]
    },
    {
      icon: Layout,
      title: "Web & Copywriting",
      items: [
        "Web Designing",
        "Landing Page Copywriting",
        "Marketing Assets Creation",
        "Digital Presence Optimization",
        "Website Management"
      ]
    },
    {
      icon: BarChart3,
      title: "Analytics & Strategy",
      items: [
        "Marketing Analytics (GA4 Basics)",
        "Campaign Performance Tracking",
        "Competitor Research",
        "Documenting & Reporting",
        "Google Workspace & MS Office"
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          ref={ref} 
          initial={{ opacity: 0, y: 30 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }} 
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF3366] bg-[#FF3366]/10 px-3 py-1 rounded-full">
            Expertise Matrix
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3 mb-4">
            Core <span className="text-gradient">Skillset</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF3366] to-[#7C3AED] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }} 
                animate={inView ? { opacity: 1, y: 0 } : {}} 
                transition={{ duration: 0.4, delay: index * 0.1 }} 
                className="glass-card p-8 rounded-3xl group hover:border-[#7C3AED]/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF3366]/10 to-[#7C3AED]/10 flex items-center justify-center text-[#FF3366] group-hover:text-white group-hover:bg-[#FF3366] transition-colors mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-[#FF3366] transition-colors">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item, idx) => (
                    <li key={idx} className="text-gray-300 font-medium flex items-center gap-2 text-sm md:text-base">
                      <span className="text-[#FF3366] text-xs">▹</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
