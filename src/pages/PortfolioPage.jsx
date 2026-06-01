import React from 'react';
import SEO from '../components/SEO';

export default function PortfolioPage() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <SEO 
        title="Portfolio & Case Studies | Generative AI Projects"
        url={`https://munwarali.in/${'portfolio'}`}
      />
      <div className="glass-card p-12 rounded-3xl relative overflow-hidden">
        <div className="absolute -inset-0.5 bg-gradient-to-tr from-[#00d2ff] to-[#aa3bff] rounded-3xl opacity-20 blur-sm"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6"><span className="text-gradient">Portfolio</span></h1>
          <p className="text-xl text-gray-300">
            Content coming soon. This section is being optimized for Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO).
          </p>
        </div>
      </div>
    </div>
  );
}
