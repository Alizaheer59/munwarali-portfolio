import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, Globe, HeartHandshake, Sparkles } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const traits = [
    "Project Management",
    "Problem Solving",
    "Teamwork",
    "Time Management",
    "Leadership",
    "Organizing"
  ];

  const languages = ["English", "Hindi", "Telugu", "Urdu"];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black/40">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          ref={ref} 
          initial={{ opacity: 0, y: 30 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }} 
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF3366] bg-[#FF3366]/10 px-3 py-1 rounded-full">
            Profile Overview
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3 mb-4">
            Digital Marketing & <span className="text-gradient">AI Prompt Engineering</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF3366] to-[#7C3AED] mx-auto rounded-full mb-10"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={inView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="glass-card p-8 md:p-12 rounded-3xl relative hover:border-[#7C3AED]/30 transition-colors duration-500"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-6 text-[#FF3366] flex items-center gap-2">
                <Sparkles size={24} /> Professional Profile
              </h3>
              
              <blockquote className="text-lg md:text-xl italic text-gray-200 mb-8 border-l-4 border-[#7C3AED] pl-6 text-left bg-white/5 py-4 rounded-r-xl">
                "Combining creative digital marketing campaigns, analytical precision, and cutting-edge AI prompt engineering to build scalable growth systems."
              </blockquote>

              <div className="space-y-5 text-gray-300 text-base md:text-lg leading-relaxed">
                <p>
                  I am a <strong className="text-white">Digital Marketing Specialist</strong> skilled in digital marketing campaigns, web designing, SEO and content optimization, social media marketing, copywriting, and AI prompt engineering.
                </p>
                <p>
                  Experienced in competitor research, data analysis, campaign performance tracking, and preparing documentation and reports to support data-driven marketing decisions.
                </p>
                <p>
                  Proficient in MS Office and Google Workspace, with the ability to create engaging marketing content, manage websites, optimize online visibility, and support business growth through AI-powered tools and effective digital marketing strategies.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Personality Traits & Languages Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Traits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-6 md:p-8 rounded-3xl"
            >
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <HeartHandshake size={22} className="text-[#FF3366]" /> Personality Traits
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {traits.map((trait, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-300 text-sm md:text-base">
                    <CheckCircle2 size={16} className="text-[#7C3AED] shrink-0" />
                    <span>{trait}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-6 md:p-8 rounded-3xl"
            >
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Globe size={22} className="text-[#7C3AED]" /> Languages
              </h4>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm md:text-base">
                    {lang}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs text-gray-400">
                Multilingual communication enabling seamless cross-functional teamwork and wide audience engagement.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
