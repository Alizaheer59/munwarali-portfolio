import React, { useEffect } from 'react';

export default function CalendlyEmbed({ url }) {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
    
    return () => {
      head.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full bg-[#050505] rounded-3xl overflow-hidden border border-white/10" style={{ height: '700px' }}>
      <div 
        className="calendly-inline-widget w-full h-full" 
        data-url={url}
      ></div>
    </div>
  );
}
