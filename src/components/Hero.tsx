import { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const sketch1 = 'https://res.cloudinary.com/dtkluxukm/image/upload/v1784028375/slide3_z2n9s0.jpg';
const sketch2 = 'https://res.cloudinary.com/dtkluxukm/image/upload/v1784028375/IMG-20251015-WA0083_rw0naw.jpg';
const sketch3 = 'https://res.cloudinary.com/dtkluxukm/image/upload/v1784028375/slide4_bcnlmn.jpg';
const sketch4 = 'https://res.cloudinary.com/dtkluxukm/image/upload/v1784028375/slide2_he2uxm.jpg';
const sketch5 = 'https://res.cloudinary.com/dtkluxukm/image/upload/v1784028375/slide1_g0bqyp.jpg';
const sketch6 = 'https://res.cloudinary.com/dtkluxukm/image/upload/v1784028375/slide5_pbfaps.jpg';

interface HeroProps {
  onExploreClick: () => void;
  onAboutClick: () => void;
}

export default function Hero({ onExploreClick, onAboutClick }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const sketches = [
    { src: sketch1, desc: 'sketch 1' },
    { src: sketch2, desc: 'sketch 2' },
    { src: sketch3, desc: 'sketch 3' },
    { src: sketch4, desc: 'sketch 4' },
    { src: sketch5, desc: 'sketch 5' },
    { src: sketch6, desc: 'sketch 6' },
  ];

  const nextSketch = () => {
    setActiveIndex((prev) => (prev + 1) % sketches.length);
  };

  const prevSketch = () => {
    setActiveIndex((prev) => (prev - 1 + sketches.length) % sketches.length);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#FAFAFA] flex flex-col justify-between pt-28 pb-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center my-auto">
        {/* Left Typography Block */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 z-10 lg:pr-12 lg:border-r lg:border-border-custom pb-8 lg:pb-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            {/* Tag/Origin */}
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#6B7280] font-mono">
              Mathcomb™ Musical Instruments • Lagos, Nigeria
            </p>
            {/* Editorial Headline */}
            <h1 className="font-display font-semibold text-5xl sm:text-6xl xl:text-7xl text-text-black leading-[0.95] tracking-tight">
              From an Everyday Comb.<br />
              <span className="font-semibold text-text-black">An Original Musical Instrument.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-neutral-500 text-sm sm:text-base max-w-md leading-relaxed font-sans"
          >
            Discover the invention of Mathcomb™ Musical Instruments, a pioneering acoustic breakthrough by Mathias Edema Eyeturami. Born from a simple comb and refined into a performance-grade acoustic miracle, it introduces an entirely new sound class to the world of music.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4"
          >
            <button
              id="explore-products-btn"
              onClick={onExploreClick}
              className="group flex items-center justify-center space-x-2 text-[13px] font-medium uppercase tracking-wider bg-brand-green hover:bg-brand-green-hover text-white px-8 py-4 rounded-[8px] transition-colors duration-200 cursor-pointer border-0 outline-none"
            >
              <span>Explore the Invention</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="learn-about-btn"
              onClick={onAboutClick}
              className="flex items-center justify-center space-x-2 text-[13px] font-medium uppercase tracking-wider border border-text-black bg-transparent text-text-black px-8 py-4 rounded-[8px] transition-all duration-200 hover:bg-text-black hover:text-white cursor-pointer"
            >
              <span>The Inventor's Story</span>
            </button>
          </motion.div>
        </div>

        {/* Right Image Block - 1:1 Sketch Carousel */}
        <div className="lg:col-span-5 flex justify-center items-center relative pl-0 lg:pl-12 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[460px] aspect-square bg-white overflow-hidden relative group border border-border-custom p-6 flex flex-col justify-between"
          >
            {/* Top Bar with Stage details */}
            <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-[#6B7280] font-mono mb-4">
              <span>Development Stage {activeIndex + 1} of 6</span>
              <span className="text-brand-green font-semibold">Blueprint Sketch</span>
            </div>
            
            {/* Carousel display area */}
            <div className="flex-1 overflow-hidden relative border border-border-custom bg-neutral-50 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={sketches[activeIndex].src}
                  alt={`Mathcomb Development Sketch Stage ${activeIndex + 1}`}
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover select-none"
                />
              </AnimatePresence>

              {/* Navigation controls */}
              <button
                onClick={prevSketch}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 border border-border-custom text-neutral-800 hover:bg-white hover:scale-105 transition-all z-10 cursor-pointer shadow-sm outline-none"
                aria-label="Previous sketch"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSketch}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 border border-border-custom text-neutral-800 hover:bg-white hover:scale-105 transition-all z-10 cursor-pointer shadow-sm outline-none"
                aria-label="Next sketch"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10 bg-white/80 px-3 py-1.5 rounded-full border border-border-custom/50">
                {sketches.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors cursor-pointer outline-none ${
                      idx === activeIndex ? 'bg-brand-green' : 'bg-neutral-300'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Bar: "original sketch" & Description */}
            <div className="mt-4 flex items-center justify-between border-t border-border-custom/50 pt-3">
              <span className="text-[11px] uppercase tracking-[0.2em] font-mono font-bold text-text-black">
                original sketch
              </span>
              <div className="text-right">
                <div className="text-[11px] text-neutral-500 font-mono italic">
                  {sketches[activeIndex].desc}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Abstract geometric layout aid */}
          <div className="absolute -z-10 -right-8 -bottom-8 w-40 h-40 border-r border-b border-border-custom font-mono text-[9px] text-neutral-300 p-2 flex items-end justify-end select-none pointer-events-none">
            GRID // 08
          </div>
        </div>
      </div>

      {/* Down Indicator */}
      <div className="flex justify-center w-full mt-4">
        <button
          onClick={onExploreClick}
          className="flex flex-col items-center space-y-1 text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer group"
          aria-label="Scroll down"
        >
          <span className="text-[9px] tracking-[0.25em] uppercase font-mono">Scroll Down</span>
          <ChevronDown className="w-4 h-4 animate-bounce group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
}
