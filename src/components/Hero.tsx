import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import intro from '../media/video2.mp4';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const lines = ["Transform Your", "Digital Signage"];
  const fullText = lines.join("\n");

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.log);
    }

    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => setCurrentIndex(prev => prev + 1), 100);
      return () => clearTimeout(timeout);
    } else {
      const cursorInterval = setInterval(() => setShowCursor(prev => !prev), 500);
      return () => clearInterval(cursorInterval);
    }
  }, [currentIndex, fullText]);

  const typedText = fullText.slice(0, currentIndex).split("\n");

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        >
          <source src={intro} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 mx-auto px-6 min-h-screen flex flex-col justify-center text-center">
        {lines.map((line, idx) => {
          const displayText = typedText[idx] || "";
          return (
            <motion.h1
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1.2 }} // Text grows
              transition={{ duration: 1, delay: idx * 0.6 }}
              className="text-5xl md:text-8xl font-bold mb-4 leading-tight max-w-4xl mx-auto font-mono
                         text-white
                         [text-shadow:0_0_10px_rgb(0,255,255),0_0_20px_rgb(255,0,255)]"
            >
              {displayText}
              {showCursor && idx === typedText.length - 1 && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="ml-1 text-cyan-400"
                >
                  |
                </motion.span>
              )}
            </motion.h1>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
