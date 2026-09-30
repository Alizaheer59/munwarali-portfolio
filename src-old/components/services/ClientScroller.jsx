import { motion } from 'framer-motion';

const clients = [
  "Homeoshots",
  "Jayalakshmi Management Services",
  "Transformix Global LLP",
  "SDI Visakhaptnam"
];

export default function ClientScroller() {
  // Duplicate the array multiple times to ensure a seamless infinite scroll on wide screens
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="py-10 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-sm font-semibold text-gray-400 tracking-widest uppercase">Trusted by forward-thinking organizations</p>
      </div>
      
      <div className="relative flex w-full overflow-hidden">
        {/* Left and Right Fade Masks for a premium look */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-scroll-text whitespace-nowrap items-center py-4">
          {duplicatedClients.map((client, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center mx-8 md:mx-16"
            >
              <span className="text-xl md:text-2xl font-bold text-gray-300 transition-colors duration-300 hover:text-[#3B82F6]">
                {client}
              </span>
              <span className="ml-16 md:ml-32 w-2 h-2 rounded-full bg-gray-200"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}