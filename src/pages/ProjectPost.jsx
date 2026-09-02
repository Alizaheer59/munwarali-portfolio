import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import { portfolioProjects } from '../data/portfolioData';

function renderContent(markdown) {
  const lines = markdown.trim().split('\n');
  return lines.map((line, idx) => {
    if (line.startsWith('### ')) {
      return <h3 key={idx} className="text-2xl font-bold text-white mt-8 mb-4">{line.replace('### ', '')}</h3>;
    } else if (line.startsWith('## ')) {
      return <h2 key={idx} className="text-3xl font-bold text-[#00d2ff] mt-10 mb-6">{line.replace('## ', '')}</h2>;
    } else if (line.trim() === '') {
      return null;
    } else {
      const parts = line.split('**');
      if (parts.length > 1) {
        return (
          <p key={idx} className="text-gray-300 leading-relaxed mb-6 text-lg">
            {parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{part}</strong> : part)}
          </p>
        );
      }
      return <p key={idx} className="text-gray-300 leading-relaxed mb-6 text-lg">{line}</p>;
    }
  });
}

export default function ProjectPost() {
  const { slug } = useParams();
  const project = portfolioProjects.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <article className="pt-32 pb-24 max-w-4xl mx-auto px-6">
      <SEO 
        title={project.title}
        description={project.excerpt}
        url={`https://munwarali.in/portfolio/${project.slug}`}
      />
      
      <Link to="/portfolio" className="inline-flex items-center gap-2 text-[#00d2ff] hover:text-[#aa3bff] transition-colors mb-8">
        <ArrowLeft size={20} /> Back to Portfolio
      </Link>

      <header className="mb-12">
        <div className="text-[#aa3bff] font-semibold mb-4 tracking-wider uppercase text-sm">{project.category}</div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight">{project.title}</h1>
        <div className="flex items-center gap-4 text-gray-400">
          <span>By <strong className="text-white">{project.author}</strong></span>
          <span>•</span>
          <span>{project.date}</span>
        </div>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        {renderContent(project.content)}
      </div>
    </article>
  );
}
