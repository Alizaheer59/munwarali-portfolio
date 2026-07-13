import {  useEffect, useState  } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MessageSquareText, 
  Mic, 
  Video, 
  Image as ImageIcon, 
  Code, 
  TrendingUp, 
  CheckCircle,
  Sparkles
} from 'lucide-react';

const CategoryCard = ({ title, icon: Icon, tools, description, delay }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="glass-card p-8 rounded-3xl relative overflow-hidden group transform-gpu"
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00d2ff]/5 to-[#aa3bff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#00d2ff]/20 to-[#aa3bff]/20 flex items-center justify-center text-[#00d2ff] group-hover:scale-110 transition-transform duration-300">
            <Icon size={24} />
          </div>
          <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-colors duration-300">{title}</h3>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {tools.map((tool, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1 text-sm font-medium bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-white/10 hover:border-[#00d2ff]/50 transition-all"
            >
              {tool}
            </span>
          ))}
        </div>

        <p className="text-gray-400 leading-relaxed text-sm border-t border-white/5 pt-4">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default function AIToolkit() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const categories = [
    {
      title: "AI Content & Prompting",
      icon: MessageSquareText,
      tools: ["ChatGPT", "Claude AI", "Canva AI", "Gamma", "Notion AI"],
      description: "Created high-converting content, prompt engineering, marketing assets, business documentation, presentations, workflows, research, and productivity systems."
    },
    {
      title: "AI Avatar & Voice",
      icon: Mic,
      tools: ["HeyGen", "ElevenLabs", "Minimax"],
      description: "Generated realistic AI avatars, multilingual voiceovers, lip-sync videos, digital presenters, and AI-powered spokesperson videos."
    },
    {
      title: "AI Video Generation",
      icon: Video,
      tools: ["Kling AI", "Hailuo AI", "Veo 3", "Higgsfield AI"],
      description: "Created cinematic AI videos, product advertisements, social media reels, storytelling videos, promotional content, and commercial-quality visual assets."
    },
    {
      title: "AI Music & Images",
      icon: ImageIcon,
      tools: ["Suno AI", "Midjourney", "Nano Banana"],
      description: "Generate professional music, AI illustrations, concept art, advertising creatives, thumbnails, branding visuals, and marketing graphics."
    },
    {
      title: "Vibe Coding & Dev",
      icon: Code,
      tools: ["Lovable", "Replit", "Supabase", "Vercel", "Netlify", "GitHub", "VS Code", "Google Antigravity"],
      description: "Rapidly prototype, build, deploy, and iterate AI-powered applications, landing pages, SaaS products, automation systems, and full-stack web experiences."
    },
    {
      title: "Digital Marketing",
      icon: TrendingUp,
      tools: ["Meta Ads", "Google Ads", "Google Analytics", "Search Console", "Tag Manager", "Buffer", "WordPress", "Canva"],
      description: "Plan, execute, analyze, and optimize digital marketing campaigns, SEO, social media management, website performance, and lead generation."
    },
    {
      title: "Collaboration",
      icon: CheckCircle,
      tools: ["Notion", "Google Workspace", "Drive", "Docs", "Sheets", "Slides", "Zoom", "Slack", "Trello"],
      description: "Organize projects, collaborate with teams, manage documentation, client communication, and streamline business operations."
    }
  ];

  return (
    <section id="toolkit" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 -right-1/4 w-96 h-96 bg-[#00d2ff]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 -left-1/4 w-96 h-96 bg-[#aa3bff]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[#00d2ff]/30 text-[#00d2ff] text-sm font-semibold mb-6">
            <Sparkles size={16} /> AI Generalist & Strategist
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
            AI Toolkit & <span className="text-gradient">Technology Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The AI platforms, creative tools, and development technologies I use to design, automate, market, and build modern digital experiences.
          </p>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {categories.map((cat, index) => (
            <div key={index} className={index === 4 ? "md:col-span-2 lg:col-span-1" : ""}>
               <CategoryCard 
                  title={cat.title} 
                  icon={cat.icon} 
                  tools={cat.tools} 
                  description={cat.description} 
                  delay={index * 0.1} 
               />
            </div>
          ))}
        </div>

              </div>
    </section>
  );
}
