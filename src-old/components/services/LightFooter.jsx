export default function LightFooter() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 mb-8 border-b border-white/10 pb-8">
        <div className="col-span-2">
          <div className="font-display font-bold text-2xl text-white mb-4 flex flex-col leading-none">
            <span>Munwar</span>
            <span className="text-[#8B5CF6] text-sm">AI Labs</span>
          </div>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed">Helping local businesses, educational institutions, and organizations grow through intelligent digital marketing and custom automation.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/" className="hover:text-white transition-colors">Home Portfolio</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Munwar AI Labs. All rights reserved.
      </div>
    </footer>
  );
}