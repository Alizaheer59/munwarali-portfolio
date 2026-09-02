import { Link } from 'react-router-dom';
import { ArrowRight, Code } from 'lucide-react';
import SEO from '../components/SEO';
import { portfolioProjects } from '../data/portfolioData';

export default function PortfolioPage() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <SEO 
        title="Portfolio & Case Studies | Generative AI Projects"
        url="https://munwarali.in/portfolio"
      />
      
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold font-display mb-6"><span className="text-gradient">Portfolio & Case Studies</span></h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Explore my latest projects, case studies, and experiments at the intersection of AI, Digital Marketing, and Web Development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioProjects.map((project) => (
          <Link to={`/portfolio/${project.slug}`} key={project.slug} className="group relative block">
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-[#00d2ff] to-[#aa3bff] rounded-3xl opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative h-full bg-[#050505] border border-white/10 rounded-3xl p-8 hover:bg-[#0a0a0a] transition-colors flex flex-col">
              <div className="w-12 h-12 bg-gradient-to-tr from-[#00d2ff]/20 to-[#aa3bff]/20 rounded-xl flex items-center justify-center mb-6 border border-white/5">
                <Code className="text-[#00d2ff]" size={24} />
              </div>
              <div className="text-[#aa3bff] font-semibold text-sm mb-3 tracking-wider uppercase">{project.category}</div>
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00d2ff] group-hover:to-[#aa3bff] transition-all">{project.title}</h2>
              <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                {project.excerpt}
              </p>
              <div className="flex items-center text-[#00d2ff] font-medium mt-auto group-hover:translate-x-2 transition-transform">
                Read Case Study <ArrowRight size={18} className="ml-2" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
