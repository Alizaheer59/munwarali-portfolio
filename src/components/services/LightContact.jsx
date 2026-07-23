export default function LightContact() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 md:p-12 rounded-[2.5rem] border border-blue-100/50 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 blur-3xl rounded-full"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">Ready to Transform Your Business?</h2>
            <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">Schedule a free consultation today to discuss your digital marketing and automation needs.</p>
            
            <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div><label className="text-sm text-gray-700 font-medium mb-2 block">Full Name</label><input type="text" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-[#3B82F6] focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all shadow-sm" placeholder="John Doe" /></div>
              <div><label className="text-sm text-gray-700 font-medium mb-2 block">Email Address</label><input type="email" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-[#3B82F6] focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all shadow-sm" placeholder="john@example.com" /></div>
              <div><label className="text-sm text-gray-700 font-medium mb-2 block">Business/Organization</label><input type="text" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-[#3B82F6] focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all shadow-sm" placeholder="Your Company Name" /></div>
              <div><label className="text-sm text-gray-700 font-medium mb-2 block">Phone Number</label><input type="tel" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-[#3B82F6] focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all shadow-sm" placeholder="+1 (555) 000-0000" /></div>
              <div className="md:col-span-2"><label className="text-sm text-gray-700 font-medium mb-2 block">How can we help you?</label><textarea rows="4" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-[#3B82F6] focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all shadow-sm" placeholder="Describe your project or challenges..."></textarea></div>
              <div className="md:col-span-2"><button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-bold text-lg hover:shadow-[0_10_20px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 transition-all">Book Free Consultation</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}