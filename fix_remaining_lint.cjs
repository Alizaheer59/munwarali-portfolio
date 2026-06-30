const fs = require('fs');

// 1. AIToolkit.jsx
let ai = fs.readFileSync('src/components/AIToolkit.jsx', 'utf8');
ai = ai.replace('import { motion, useAnimation } from \'framer-motion\';', 'import { motion } from \'framer-motion\';');
ai = ai.replace('  Zap,\n  Target\n} from \'lucide-react\';', '  Zap\n} from \'lucide-react\';');
fs.writeFileSync('src/components/AIToolkit.jsx', ai);

// 2. Background3D.jsx
let bg = fs.readFileSync('src/components/Background3D.jsx', 'utf8');
bg = bg.replace('const particlesPosition = new Float32Array(count * 3);', 'const particlesPosition = React.useMemo(() => {\n    const positions = new Float32Array(count * 3);\n    for (let i = 0; i < count; i++) {\n      const radius = 10 + Math.random() * 20;\n      const theta = 2 * Math.PI * Math.random();\n      const phi = Math.acos(2 * Math.random() - 1);\n      \n      const x = radius * Math.sin(phi) * Math.cos(theta);\n      const y = radius * Math.sin(phi) * Math.sin(theta);\n      const z = radius * Math.cos(phi);\n\n      positions.set([x, y, z], i * 3);\n    }\n    return positions;\n  }, [count]);\n\n  /*');
bg = bg.replace('  }, []);', '  */');
fs.writeFileSync('src/components/Background3D.jsx', bg);

// 3. Contact.jsx
let contact = fs.readFileSync('src/components/Contact.jsx', 'utf8');
contact = contact.replace('const response = await fetch', 'await fetch');
fs.writeFileSync('src/components/Contact.jsx', contact);

// 4. FAQ.jsx - move exports to just local vars, or remove `export` from `faqData` and `generateFAQSchema` since they are only used in Home.jsx.
// Actually, Home.jsx imports them, so I will move them to a new file `src/data/faqData.js`.
if (!fs.existsSync('src/data')) fs.mkdirSync('src/data');
let faq = fs.readFileSync('src/components/FAQ.jsx', 'utf8');

const dataExtract = faq.match(/(export const faqData = \[[\s\S]*?\];)/)[1];
const schemaExtract = faq.match(/(export const generateFAQSchema = [\s\S]*?\};)/)[1];

fs.writeFileSync('src/data/faqData.js', `${dataExtract}\n\n${schemaExtract}`);

faq = faq.replace(dataExtract, '');
faq = faq.replace(schemaExtract, '');
faq = `import { faqData } from '../data/faqData';\n` + faq;
fs.writeFileSync('src/components/FAQ.jsx', faq);

let home = fs.readFileSync('src/pages/Home.jsx', 'utf8');
home = home.replace("import FAQ, { faqData, generateFAQSchema } from '../components/FAQ';", "import FAQ from '../components/FAQ';\nimport { faqData, generateFAQSchema } from '../data/faqData';");
fs.writeFileSync('src/pages/Home.jsx', home);


// 5. Hero.jsx
let hero = fs.readFileSync('src/components/Hero.jsx', 'utf8');
hero = hero.replace('Download, MessageCircle, ', '');
fs.writeFileSync('src/components/Hero.jsx', hero);

// 6. Delete unused old scripts
if (fs.existsSync('update_ui.js')) fs.unlinkSync('update_ui.js');
if (fs.existsSync('add_3d_tilt.cjs')) fs.unlinkSync('add_3d_tilt.cjs');

console.log('Fixed remaining lint issues');
