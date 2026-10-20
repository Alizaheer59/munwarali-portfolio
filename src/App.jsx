import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWidgets from "./components/FloatingWidgets";
import Home from "./pages/Home";

// Lazy load non-home pages to keep initial bundle ultra-light
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const ProjectPost = lazy(() => import("./pages/ProjectPost"));
const BlogIndex = lazy(() => import("./pages/BlogIndex"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Chatbot = lazy(() => import("./components/Chatbot"));
const Background3D = lazy(() => import("./components/Background3D"));

function App() {
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    // Only load heavy 3D WebGL on desktop devices to optimize mobile Core Web Vitals
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      // Defer loading until after initial page load & interaction
      const timer = setTimeout(() => setShow3D(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen text-white relative flex flex-col bg-transparent">
      {show3D && (
        <Suspense fallback={null}>
          <Background3D />
        </Suspense>
      )}
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center text-gray-500">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:slug" element={<ProjectPost />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingWidgets />
      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
      <Analytics />
    </div>
  );
}

export default App;
