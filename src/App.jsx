import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Background3D from './components/Background3D';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import Chatbot from './components/Chatbot';
import PortfolioPage from './pages/PortfolioPage';\nimport ProjectPost from './pages/ProjectPost';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="min-h-screen text-white relative flex flex-col bg-transparent">
      <Preloader />
      <Background3D />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />\n          <Route path="/portfolio/:slug" element={<ProjectPost />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWidgets />
      <Chatbot />
      <Analytics />
    </div>
  );
}

export default App;
