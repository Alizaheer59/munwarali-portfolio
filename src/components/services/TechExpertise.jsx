
const tech = ['Large Language Models', 'AI Agents', 'RAG (Retrieval-Augmented Generation)', 'Workflow Automation', 'API Integration', 'Databases', 'Cloud Infrastructure', 'Web Applications', 'Mobile Applications', 'Data Analytics', 'Machine Learning', 'Enterprise Integrations'];

export default function TechExpertise() {
  return (
    <section className="py-24 bg-[#141B2D]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Technology <span className="text-[#8B5CF6]">Expertise</span></h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">We leverage the most advanced, production-ready technologies to ensure your systems are robust, scalable, and secure.</p>
        <div className="flex flex-wrap justify-center gap-4">
          {tech.map((t, i) => (
            <div key={i} className="px-6 py-3 rounded-xl bg-[#0B1020] border border-white/5 text-gray-300 font-semibold shadow-inner">
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}