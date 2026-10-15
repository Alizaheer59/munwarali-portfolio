import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, ArrowRight, Sparkles, Globe, Megaphone, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: "Munwar AI Boost – High Conversion Landing Page",
      category: "Web Design & Conversion",
      icon: Globe,
      liveUrl: "https://munwar-ai-boost.lovable.app/",
      tech: ["Web Designing", "Conversion Rate Optimization", "AI Copywriting", "Responsive UI"],
      description: "Designed a high-converting portfolio landing page built to turn visitors into leads and showcase effective conversion architectures."
    },
    {
      title: "AI-Powered Digital Marketing Campaign",
      category: "Digital Marketing & AI",
      icon: Megaphone,
      tech: ["AI Prompt Engineering", "Multi-Channel Ads", "Copywriting", "Performance Analytics"],
      description: "End-to-end digital marketing campaign utilizing AI prompt engineering for ad creatives, targeted copywriting, and higher CTR."
    },
    {
      title: "SEO & Content Optimization Architecture",
      category: "Search Engine Optimization",
      icon: Search,
      tech: ["On-Page SEO", "Content Clustering", "Competitor Research", "Schema.org"],
      description: "Data-backed search engine optimization and answer-engine structure that increased organic discoverability and search impressions."
    },
    {
      title: "AI Prompt Engineering & Workflow Automation",
      category: "AI Workflow",
      icon: Sparkles,
      tech: ["Prompt Engineering", "ChatGPT", "Claude", "Google Workspace", "Automation"],
      description: "Custom AI prompt templates and automated content generation workflows reducing manual marketing turnaround by 50%."
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
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF3366] bg-[#FF3366]/10 px-3 py-1 rounded-full">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3 mb-4">
            Highlighted <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF3366] to-[#7C3AED] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-3xl p-8 relative group hover:border-[#7C3AED]/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#FF3366] bg-[#FF3366]/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs font-semibold text-white bg-gradient-to-r from-[#FF3366] to-[#7C3AED] px-3 py-1 rounded-full flex items-center gap-1.5 hover:opacity-90 transition-opacity"
                      >
                        Live Demo <ExternalLink size={13} />
                      </a>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FF3366] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs py-1 px-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#FF3366] hover:text-[#7C3AED] flex items-center gap-2 transition-colors"
                    >
                      Visit Website <ArrowRight size={16} />
                    </a>
                  ) : (
                    <Link
                      to="/portfolio"
                      className="text-sm font-semibold text-[#FF3366] hover:text-[#7C3AED] flex items-center gap-2 transition-colors"
                    >
                      View Case Study <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl glass-card neon-border text-white font-semibold hover:bg-white/5 transition-colors"
          >
            Explore All Case Studies <ArrowRight size={18} className="text-[#FF3366]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
