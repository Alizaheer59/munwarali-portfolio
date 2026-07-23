import { CheckCircle2 } from 'lucide-react';

const reasons = [
  'Tailored AI Solutions', 'Business-Focused Development', 'Secure Architecture', 'Scalable Systems',
  'Fast Deployment', 'Continuous Support', 'Transparent Communication', 'Future-Ready Technology'
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#141B2D]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Choose <span className="text-[#3B82F6]">Us</span></h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            We don't just write code; we solve complex business problems. Our enterprise-grade solutions are designed to scale with your growth while maintaining bank-level security and privacy.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-[#3B82F6]" size={20} />
                <span className="text-gray-300 font-medium">{r}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 to-[#06B6D4]/20 blur-3xl rounded-full"></div>
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" alt="Secure Server Infrastructure" className="rounded-2xl relative z-10 border border-white/10 shadow-2xl grayscale opacity-80 hover:grayscale-0 transition-all duration-700 object-cover aspect-[4/3]" />
        </div>
      </div>
    </section>
  );
}