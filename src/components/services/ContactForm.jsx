export default function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-[#141B2D]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-[#0B1020] p-8 md:p-12 rounded-3xl border border-[#3B82F6]/20 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">Start Your AI Journey</h2>
          <p className="text-gray-400 text-center mb-8">Tell us about your business challenges.</p>
          <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
            <div><label className="text-sm text-gray-400 mb-2 block">Name</label><input type="text" className="w-full bg-[#141B2D] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#3B82F6] focus:outline-none" placeholder="John Doe" /></div>
            <div><label className="text-sm text-gray-400 mb-2 block">Email</label><input type="email" className="w-full bg-[#141B2D] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#3B82F6] focus:outline-none" placeholder="john@company.com" /></div>
            <div><label className="text-sm text-gray-400 mb-2 block">Company</label><input type="text" className="w-full bg-[#141B2D] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#3B82F6] focus:outline-none" placeholder="Acme Corp" /></div>
            <div><label className="text-sm text-gray-400 mb-2 block">Phone</label><input type="tel" className="w-full bg-[#141B2D] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#3B82F6] focus:outline-none" placeholder="+1 (555) 000-0000" /></div>
            <div className="md:col-span-2"><label className="text-sm text-gray-400 mb-2 block">Business Challenge / Message</label><textarea rows="4" className="w-full bg-[#141B2D] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#3B82F6] focus:outline-none" placeholder="How can we help you automate?"></textarea></div>
            <div className="md:col-span-2"><button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white font-bold hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">Send Inquiry</button></div>
          </form>
        </div>
      </div>
    </section>
  );
}