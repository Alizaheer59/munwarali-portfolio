export default function FinalCTA() {
  return (
    <section className="py-24 bg-[#0B1020] text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#3B82F6]/10 to-transparent"></div>
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Let's Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6]">AI-Powered Future</span></h2>
        <p className="text-xl text-gray-400 mb-10">Schedule a free consultation and discover how AI can transform your business.</p>
        <a href="#contact" className="inline-block px-10 py-5 rounded-2xl bg-white text-[#0B1020] font-black text-lg hover:bg-gray-200 transition-colors shadow-2xl">Book Your Free Consultation</a>
      </div>
    </section>
  );
}