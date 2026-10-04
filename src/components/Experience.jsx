import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const experiences = [
    {
      company: "Alphonytix AI",
      role: "AI Digital Marketing Lead",
      duration: "May 2026 – Present",
      desc: "Alphonytix AI is an AI-driven business solutions and digital transformation initiative focused on helping startups, businesses, and professionals leverage artificial intelligence, automation, content systems, and growth strategies.",
      focus: "Founder’s Office, Startup Operations, AI Automation, Business Systems, Growth Strategy, Digital Transformation",
      points: [
        "Supporting business strategy and operational execution.",
        "Developing AI-powered productivity systems and workflows.",
        "Designing business automation solutions and internal processes.",
        "Supporting business development and growth initiatives.",
        "Managing websites, digital assets, and tech infrastructure.",
        "Researching emerging AI tools and business applications.",
        "Supporting founder-level priorities across growth, tech, and operations."
      ]
    },
    {
      company: "Transformix Global LLP",
      role: "Founder’s Office Associate",
      duration: "Jan 2026 – Mar 2026",
      desc: "Key Learning: Understanding startup execution across technology, growth, operations, and business systems.",
      points: [
        "Designed and launched company website.",
        "Managed Google Workspace ecosystem.",
        "Supported employee onboarding and IT infrastructure.",
        "Led GTM initiatives and implemented AI-powered workflows.",
        "Improved operational efficiency and supported leadership operations."
      ]
    },
    {
      company: "HPCL – Skill Development Institute",
      role: "Digital Marketing Executive",
      duration: "Jan 2024 – Dec 2025",
      desc: "Key Learning: Using technology and digital channels to drive organizational growth and visibility.",
      points: [
        "Managed website and SEO initiatives.",
        "Led branding and digital marketing activities.",
        "Supported growth and visibility initiatives.",
        "Leveraged AI tools for productivity enhancement.",
        "Worked closely with leadership teams on strategic initiatives."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black/40">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Professional <span className="text-gradient">Experience</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF3366] to-[#7C3AED] mx-auto rounded-full"></div>
        </motion.div>
        <div className="relative border-l-2 border-[#7C3AED]/30 ml-4 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div key={index} initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.2 }} className="mb-12 ml-8 relative">
              <div className="absolute -left-[41px] top-1 w-6 h-6 bg-[#050505] border-2 border-[#FF3366] rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(255,51,102,0.6)]">
                <div className="w-2 h-2 bg-[#7C3AED] rounded-full"></div>
              </div>
              <div className="glass-card p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
                <span className="text-sm font-mono text-[#FF3366] bg-[#FF3366]/10 px-3 py-1 rounded-full">{exp.duration}</span>
                <h3 className="text-2xl font-bold text-white mt-4 mb-1">{exp.role}</h3>
                <h4 className="text-lg text-[#7C3AED] mb-4">{exp.company}</h4>
                <p className="text-gray-400 mb-4 text-sm italic">{exp.desc}</p>
                {exp.focus && <p className="text-gray-300 font-semibold mb-4 text-sm">Focus: <span className="font-normal">{exp.focus}</span></p>}
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2 text-sm md:text-base"><span className="text-[#FF3366] mt-1">▹</span> {point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
