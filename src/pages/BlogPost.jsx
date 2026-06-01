import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogData';

// Simple markdown parser for our specific blog data
function renderContent(markdown) {
  const lines = markdown.trim().split('\n');
  return lines.map((line, idx) => {
    if (line.startsWith('### ')) {
      return <h3 key={idx} className="text-2xl font-bold text-white mt-8 mb-4">{line.replace('### ', '')}</h3>;
    } else if (line.startsWith('## ')) {
      return <h2 key={idx} className="text-3xl font-bold text-[#00d2ff] mt-10 mb-6">{line.replace('## ', '')}</h2>;
    } else if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ')) {
      return <li key={idx} className="ml-6 mb-2 text-gray-300 leading-relaxed"><strong className="text-white">{line.split('**')[1] || ''}</strong>{line.split('**')[2] || line.substring(3)}</li>;
    } else if (line.trim() === '') {
      return null;
    } else {
      // Bold text handling
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

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": new Date(post.date).toISOString()
  };

  return (
    <article className="pt-32 pb-24 max-w-4xl mx-auto px-6">
      <SEO 
        title={post.title}
        description={post.excerpt}
        url={`https://munwarali.in/blog/${post.slug}`}
        type="article"
        schema={articleSchema}
      />
      
      <Link to="/blog" className="inline-flex items-center gap-2 text-[#00d2ff] hover:text-[#aa3bff] transition-colors mb-8">
        <ArrowLeft size={20} /> Back to Blog
      </Link>

      <header className="mb-12">
        <div className="text-[#aa3bff] font-semibold mb-4 tracking-wider uppercase text-sm">{post.category}</div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight">{post.title}</h1>
        <div className="flex items-center gap-4 text-gray-400">
          <span>By <strong className="text-white">{post.author}</strong></span>
          <span>•</span>
          <span>{post.date}</span>
        </div>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        {renderContent(post.content)}
      </div>
    </article>
  );
}
