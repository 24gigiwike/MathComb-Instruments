import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import acousticHeroImg from '../assets/images/mathcomb_hero_acoustic_1783944204761.jpg';

interface HeroProps {
  onExploreClick: () => void;
  onAboutClick: () => void;
}

export default function Hero({ onExploreClick, onAboutClick }: HeroProps) {
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
              Helping Musicians<br />
              <span className="font-semibold text-text-black">Find the Right Instrument.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-neutral-500 text-sm sm:text-base max-w-md leading-relaxed font-sans"
          >
            Discover carefully selected, dependable instruments and professional music equipment for worship, learning, recording, and live performance.
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
              <span>Explore Products</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="learn-about-btn"
              onClick={onAboutClick}
              className="flex items-center justify-center space-x-2 text-[13px] font-medium uppercase tracking-wider border border-text-black bg-transparent text-text-black px-8 py-4 rounded-[8px] transition-all duration-200 hover:bg-text-black hover:text-white cursor-pointer"
            >
              <span>Our Story</span>
            </button>
          </motion.div>

          {/* Metadata stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="pt-8 border-t border-border-custom grid grid-cols-3 gap-4"
          >
            <div>
              <p className="font-mono text-xs font-semibold text-text-black">EST. 2019</p>
              <p className="text-[10px] text-neutral-400 tracking-wider uppercase mt-1 font-mono">Lagos Showroom</p>
            </div>
            <div>
              <p className="font-mono text-xs font-semibold text-text-black">100%</p>
              <p className="text-[10px] text-neutral-400 tracking-wider uppercase mt-1 font-mono">Musician Curated</p>
            </div>
            <div>
              <p className="font-mono text-xs font-semibold text-text-black">WEST AFRICA</p>
              <p className="text-[10px] text-neutral-400 tracking-wider uppercase mt-1 font-mono">Distribution</p>
            </div>
          </motion.div>
        </div>

        {/* Right Image Block */}
        <div className="lg:col-span-5 flex justify-center items-center relative pl-0 lg:pl-12 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-[3/4] bg-white overflow-hidden relative group border border-border-custom p-6 flex flex-col justify-between"
          >
            <div className="text-[10px] uppercase tracking-widest text-[#6B7280] font-mono mb-4">
              Featured // M1 SERIES
            </div>
            
            <div className="flex-1 overflow-hidden relative border border-border-custom">
              <img
                src={acousticHeroImg}
                alt="Mathcomb™ Musical Instruments Series-A Acoustic Guitar"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.2em] opacity-60 font-mono">Mathcomb™ Musical Instruments Series-A</span>
              <div className="text-right">
                <div className="text-[11px] font-bold">Premium Solid Spruce Top</div>
                <div className="text-[9px] text-[#6B7280] uppercase tracking-widest font-mono">Premium Grade AA</div>
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
