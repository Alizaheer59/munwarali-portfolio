import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LiveProjectButton from '../components/LiveProjectButton';

const projects = [
  {
    num: "01",
    label: "Client",
    title: "Nextlevel Studio",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
    ]
  },
  {
    num: "02",
    label: "Personal",
    title: "Aura Brand Identity",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
    ]
  },
  {
    num: "03",
    label: "Client",
    title: "Solaris Digital",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
    ]
  }
];

const ProjectCard = ({ project, i, progress }) => {
  const targetScale = 1 - ((projects.length - 1 - i) * 0.03);
  const scale = useTransform(progress, [0, 1], [1, targetScale]);
  
  return (
    <div className="h-[85vh] flex items-start justify-center sticky top-24 md:top-32" style={{ top: `calc(6rem + ${i * 28}px)` }}>
      <motion.div 
        style={{ scale }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 transform-gpu origin-top"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
          <div className="flex items-end gap-6">
            <span className="text-[#D7E2EA] font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {project.num}
            </span>
            <div className="pb-2 md:pb-4">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm font-medium">{project.label}</span>
              <h3 className="text-[#D7E2EA] font-medium text-2xl sm:text-4xl md:text-5xl mt-1">{project.title}</h3>
            </div>
          </div>
          <div className="pb-2 md:pb-4 w-full md:w-auto">
            <LiveProjectButton />
          </div>
        </div>

        <div className="flex gap-4 sm:gap-6 md:gap-8 h-full">
          <div className="w-[40%] flex flex-col gap-4 sm:gap-6 md:gap-8">
            <div className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden" style={{ height: 'clamp(130px, 16vw, 230px)' }}>
              <img src={project.images[0]} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden" style={{ height: 'clamp(160px, 22vw, 340px)' }}>
              <img src={project.images[1]} className="w-full h-full object-cover" alt="" />
            </div>
          </div>
          <div className="w-[60%] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden">
            <img src={project.images[2]} className="w-full h-full object-cover" alt="" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function ProjectsSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-30 pb-32 px-5 sm:px-8 md:px-10">
      <div className="py-20 sm:py-24 text-center">
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Project
        </h2>
      </div>
      
      <div ref={container} className="relative">
        {projects.map((proj, i) => (
          <ProjectCard key={proj.num} project={proj} i={i} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
