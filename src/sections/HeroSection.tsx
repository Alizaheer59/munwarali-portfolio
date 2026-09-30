import React from 'react';
import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col overflow-x-clip relative">
      <FadeIn delay={0} y={-20} duration={0.7}>
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 w-full z-20 relative">
          {['About', 'Price', 'Projects', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      <div className="flex-1 flex flex-col justify-between pt-10 sm:pt-14 relative z-0">
        <div className="overflow-hidden w-full text-center">
          <FadeIn delay={0.15} y={40} duration={0.8}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
              Hi, i&apos;m jack
            </h1>
          </FadeIn>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
          <FadeIn delay={0.6} y={30}>
            <Magnet padding={150} strength={3}>
              <img 
                src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" 
                alt="Jack portrait" 
                className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] object-contain pointer-events-none"
              />
            </Magnet>
          </FadeIn>
        </div>

        <div className="flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20 w-full relative pointer-events-none">
          <FadeIn delay={0.35} y={20}>
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
              a 3d creator driven by crafting striking and unforgettable projects
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <div className="pointer-events-auto">
              <ContactButton />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
