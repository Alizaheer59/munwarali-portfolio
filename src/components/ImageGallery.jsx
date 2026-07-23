import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ImageGallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const images = [
    '/gallery/workshop_1.jpg',
    '/gallery/workshop_2.jpg',
    '/gallery/workshop_3.jpg',
    '/gallery/workshop_4.jpg',
    '/gallery/workshop_5.jpg'
  ];

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-gradient-to-r from-[#00d2ff]/10 to-[#aa3bff]/10 blur-[100px] pointer-events-none -z-10"></div>
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Workshops & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d2ff] to-[#aa3bff] mx-auto rounded-full"></div>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden py-10">
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-[200%] md:w-[150%] animate-scroll-gallery hover:[animation-play-state:paused]">
          {[...images, ...images].map((src, index) => (
            <div key={index} className="flex-none w-[300px] md:w-[450px] mx-4 rounded-2xl overflow-hidden glass-card p-2 group">
              <div className="relative w-full h-[200px] md:h-[300px] rounded-xl overflow-hidden">
                <img src={src} alt={`Workshop Highlights ${index}`} loading="lazy" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
