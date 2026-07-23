import { motion } from 'framer-motion';
import { 
  MapPin, Globe, Video, Share2, Palette, MessageCircle, 
  Bot, Code, Briefcase, GraduationCap, CheckCircle2 
} from 'lucide-react';

const categories = [
  {
    icon: <MapPin />,
    title: "Google Business Profile",
    desc: "Dominate local search and attract more customers nearby.",
    items: ["Profile Setup & Verification", "Google Maps Ranking", "Review Management", "Local SEO", "Monthly Optimization"]
  },
  {
    icon: <Globe />,
    title: "Website Development",
    desc: "High-converting, responsive websites for any industry.",
    items: ["Business Websites", "Landing Pages", "School & College Websites", "Hospital & Clinic Websites", "Appointment Booking", "AI Chatbots", "CRM Integration"]
  },
  {
    icon: <Video />,
    title: "AI Video Advertising",
    desc: "Next-gen video content produced with artificial intelligence.",
    items: ["AI Product Ads", "CGI Ads", "AI Avatar Videos", "Promotional Videos", "Educational Videos", "Real Estate Ads"]
  },
  {
    icon: <Share2 />,
    title: "Social Media Management",
    desc: "Build a loyal audience and scale your brand presence.",
    items: ["Instagram", "Facebook", "LinkedIn", "YouTube Shorts", "Google Business Posts"]
  },
  {
    icon: <Palette />,
    title: "Branding & Design",
    desc: "Premium visual identities that make your business unforgettable.",
    items: ["Logo Design", "Brand Identity", "Business Stationery", "Brochures & Marketing Materials"]
  },
  {
    icon: <MessageCircle />,
    title: "WhatsApp Business Solutions",
    desc: "Connect directly with customers where they spend their time.",
    items: ["Business Setup", "Automation", "Broadcast Campaigns", "Lead Collection"]
  },
  {
    icon: <Bot />,
    title: "AI Business Automation",
    desc: "Eliminate repetitive tasks and operate efficiently 24/7.",
    items: ["AI Chatbots", "Appointment Automation", "Customer Support Automation", "Lead Qualification", "Voice AI Solutions"]
  },
  {
    icon: <Code />,
    title: "Custom Software Development",
    desc: "Tailored internal tools and management systems.",
    items: ["CRM", "School ERP", "Clinic Management", "Billing & Inventory", "POS Systems", "HRMS & Payroll", "LMS", "Appointment Management"]
  },
  {
    icon: <Briefcase />,
    title: "LinkedIn & Career Services",
    desc: "Stand out to recruiters, investors, and B2B clients.",
    items: ["LinkedIn Profile Optimization", "Resume Optimization", "Personal Branding", "Company Page Setup"]
  },
  {
    icon: <GraduationCap />,
    title: "Corporate & Educational Training",
    desc: "Upskill your team or faculty with modern AI workflows.",
    items: ["AI for Business", "AI Productivity", "Digital Marketing", "Prompt Engineering", "LinkedIn Workshops", "Resume Building", "Corporate Training", "College Workshops", "Faculty Development Programs", "AI for Educators", "AI Awareness Programs"]
  }
];

export default function ServiceCategories() {
  return (
    <section className="py-24 bg-slate-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display">Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]">Services</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Comprehensive, results-driven solutions designed to modernize your operations and scale your revenue.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-50 to-purple-50 text-[#3B82F6] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{cat.title}</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">{cat.desc}</p>
              
              <ul className="space-y-3">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle2 size={18} className="text-[#8B5CF6] shrink-0 mt-0.5" />
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}