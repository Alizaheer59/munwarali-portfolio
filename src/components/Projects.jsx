import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Code, MonitorPlay } from 'lucide-react';

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: "AI-Powered Marketing Campaign",
      category: "Digital Marketing",
      tech: ["AI Copywriting", "Midjourney", "Ad Automation"],
      description: "End-to-end marketing campaign using generative AI for ad copy and creatives, achieving 40% higher CTR."
    },
    {
      title: "SEO & AEO Architecture",
      category: "Search Optimization",
      tech: ["Structured Data", "Schema.org", "Content Strategy"],
      description: "Built an answer-engine optimized content structure improving featured snippet visibility by 60%."
    },
    {
      title: "Automated Social Media Pipeline",
      category: "AI Workflow",
      tech: ["Make.com", "ChatGPT API", "Canva Auto"],
      description: "Automated content scheduling and generation pipeline for rapid social media growth."
    },
    {
      title: "AI Short-Form Video Generator",
      category: "Video Editing",
      tech: ["ElevenLabs", "Runway", "CapCut"],
      description: "Created high-retention short-form UGC videos leveraging AI voiceovers and dynamic captions."
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d2ff] to-[#aa3bff] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group hover:border-[#aa3bff]/50 transition-colors"
            >
              {/* Thumbnail Placeholder */}
              <div className="h-48 bg-gray-900 relative overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#00d2ff]/10 to-[#aa3bff]/10 opacity-50"></div>
                 <MonitorPlay className="w-12 h-12 text-white/20 group-hover:scale-110 transition-transform duration-500" />
                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white backdrop-blur-md transition-colors">
                      <ExternalLink size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white backdrop-blur-md transition-colors">
                      <Code size={18} />
                    </button>
                 </div>
              </div>
              
              <div className="p-6">
                <div className="text-xs font-mono text-[#00d2ff] mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs py-1 px-2 rounded-md bg-white/5 border border-white/10 text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
