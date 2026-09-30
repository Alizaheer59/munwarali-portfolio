import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogData';

export default function BlogIndex() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <SEO 
        title="Blog | AI Automation & Digital Marketing Insights"
        url="https://munwarali.in/blog"
        description="Read the latest articles on Generative Engine Optimization (GEO), AI automation workflows, and modern digital marketing strategies."
      />
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">Latest <span className="text-gradient">Insights</span></h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Deep dives into AI, Automation, and the future of Digital Marketing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="glass-card p-8 rounded-3xl hover:border-[#00d2ff]/50 transition-colors group">
            <div className="text-[#00d2ff] text-sm font-semibold mb-3">{post.category}</div>
            <h2 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-colors">{post.title}</h2>
            <p className="text-gray-400 mb-6">{post.excerpt}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
