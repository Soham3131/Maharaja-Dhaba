import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import mainvideo from "../assets/mainvideo.mp4";
import mainvideosmall from "../assets/mainvideosmall.mp4"; // 👈 added
import hero1 from "../assets/main1.jpg";

// Hook for responsive screen check
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

export default function HeroSection() {
  const isMobile = useIsMobile();

  const slides = [
    { type: "video", src: isMobile ? mainvideosmall : mainvideo, duration: 8000 }, // 8s video
    { type: "image", src: hero1, duration: 5000 }, // image with text
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, slides[current].duration);
    return () => clearInterval(interval);
  }, [current, slides]);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Navbar always on top */}
      <Navbar />

      {/* Background slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          {slides[current].type === "video" ? (
            <motion.video
              key="video"
              src={slides[current].src}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
            />
          ) : (
            <motion.img
              key="image"
              src={slides[current].src}
              alt="Hero Background"
              className="w-full h-full object-cover absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
            />
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Text only when hero1 (image) is active */}
      {slides[current].type === "image" && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider">
            Maharaja Dhaba
          </h1>
          <p className="text-lg md:text-xl mb-6">By Maharaja Banquets LLP</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#menu" className="px-6 py-3 text-lg bg-yellow-600 hover:bg-yellow-700 rounded-lg">
              View Menu
            </a>
            <a href="#contact" className="px-6 py-3 text-lg bg-transparent border border-yellow-600 hover:bg-yellow-700 hover:text-white rounded-lg">
              Contact Us
            </a>
          </div>
        </motion.div>
      )}
    </section>
  );
}
