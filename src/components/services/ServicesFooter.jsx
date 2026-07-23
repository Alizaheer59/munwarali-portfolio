export default function ServicesFooter() {
  return (
    <footer className="bg-[#0B1020] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 mb-8 border-b border-white/5 pb-8">
        <div className="col-span-2">
          <div className="font-display font-bold text-2xl text-white mb-4 flex flex-col leading-none">
            <span>Munwar</span>
            <span className="text-[#06B6D4] text-sm">AI Labs</span>
          </div>
          <p className="text-gray-400 max-w-sm text-sm">Empowering enterprises with intelligent automation and cutting-edge artificial intelligence systems.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-[#3B82F6]">About</a></li>
            <li><a href="#" className="hover:text-[#3B82F6]">Services</a></li>
            <li><a href="#" className="hover:text-[#3B82F6]">Case Studies</a></li>
            <li><a href="#" className="hover:text-[#3B82F6]">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-[#3B82F6]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#3B82F6]">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Munwar AI Labs. All rights reserved.
      </div>
    </footer>
  );
}