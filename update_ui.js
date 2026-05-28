const fs = require('fs');

// 1. Update index.html
let html = fs.readFileSync('index.html', 'utf8');
const chatbase = `
<script>
(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="7nY_b0BnQT_fxrl9U8nuP";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
</script>
`;
if (!html.includes('chatbase.co')) {
    html = html.replace('</body>', chatbase + '  </body>');
    fs.writeFileSync('index.html', html);
}

// 2. Update Navbar.jsx
let navbar = fs.readFileSync('src/components/Navbar.jsx', 'utf8');
if (!navbar.includes('Download Resume')) {
    const resume_btn = `          <a href="#" download="Mohammed_Munwar_Ali_Zaheer_Resume.pdf" className="ml-4 px-5 py-2 rounded-xl bg-gradient-to-r from-[#00d2ff] to-[#aa3bff] text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(0,210,255,0.3)] flex items-center gap-2">
            Download Resume
          </a>
        </div>`;
    navbar = navbar.replace('</a>\n          ))}\n        </div>', '</a>\n          ))}\n' + resume_btn);
    
    const resume_btn_mobile = `          </motion.a>
        ))}
        <motion.a
          href="#"
          download="Mohammed_Munwar_Ali_Zaheer_Resume.pdf"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 20 }}
          transition={{ delay: navLinks.length * 0.05 }}
          className="mt-4 px-8 py-3 rounded-xl bg-gradient-to-r from-[#00d2ff] to-[#aa3bff] text-white font-bold transition-all"
        >
          Download Resume
        </motion.a>
      </motion.div>`;
    navbar = navbar.replace('</motion.a>\n        ))}\n      </motion.div>', resume_btn_mobile);
    fs.writeFileSync('src/components/Navbar.jsx', navbar);
}

// 3. Update FloatingWidgets.jsx
const fw_content = `import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingWidgets() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello Mohammed Munwar Ali Zaheer, I visited your portfolio website and would like to connect with you.");
    window.open(\`https://wa.me/916303822359?text=\${message}\`, '_blank');
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        onClick={handleWhatsApp}
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] relative group"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-75"></div>
        <MessageCircle size={28} className="relative z-10" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 bg-black/80 backdrop-blur text-sm px-3 py-1.5 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
        </div>
      </motion.button>
    </div>
  );
}
`;
fs.writeFileSync('src/components/FloatingWidgets.jsx', fw_content);

console.log('Done');
