import React, { useState } from 'react';
import { companyStory } from '../data';
import { motion, AnimatePresence } from 'motion/react';

const GALLERY_IMAGES = [
  "https://res.cloudinary.com/dtkluxukm/image/upload/v1784036238/FB_IMG_1763989647831_imag2n.jpg",
  "https://res.cloudinary.com/dtkluxukm/image/upload/v1784578778/combimg8_v22x67.jpg",
  "https://res.cloudinary.com/dtkluxukm/image/upload/v1784578778/combimg7_gm9emx.jpg",
  "https://res.cloudinary.com/dtkluxukm/image/upload/v1784578778/combimg2_awr0gm.jpg",
  "https://res.cloudinary.com/dtkluxukm/image/upload/v1784578777/combimg6_phkw3v.jpg",
  "https://res.cloudinary.com/dtkluxukm/image/upload/v1784578777/combimg5_dswnk3.jpg",
  "https://res.cloudinary.com/dtkluxukm/image/upload/v1784578776/combimg4_gxyqra.jpg",
  "https://res.cloudinary.com/dtkluxukm/image/upload/v1784578776/combimg11_nun4sx.jpg",
  "https://res.cloudinary.com/dtkluxukm/image/upload/v1784578776/combimg10_gmnpi5.jpg",
  "https://res.cloudinary.com/dtkluxukm/image/upload/v1784578776/combimg3_jfxynm.jpg",
  "https://res.cloudinary.com/dtkluxukm/image/upload/v1784578775/combimg9_lpwola.jpg",
  "https://res.cloudinary.com/dtkluxukm/image/upload/v1784578776/combimg10_gmnpi5.jpg"
];

export default function Story() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <section
      id="company-story"
      className="bg-[#FAFAFA] py-24 sm:py-32 border-b border-border-custom"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        {/* Row 1: Section Title & Founder Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Section Indicator */}
          <div className="lg:col-span-3 space-y-2">
            <div className="flex items-center space-x-3">
              <span className="w-6 h-[1px] bg-brand-green" />
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-text-black font-mono">
                Philosophy
              </span>
            </div>
            <p className="text-[10px] text-neutral-400 font-mono tracking-widest uppercase">
              Brand Legacy // 03
            </p>
          </div>

          {/* Heading and Bio */}
          <div className="lg:col-span-9 space-y-8">
            <h2 className="font-display font-light text-3xl sm:text-4xl text-text-black tracking-tight leading-tight">
              Honoring the journey of an original{' '}
              <span className="font-semibold text-text-black">West African invention.</span>
            </h2>

            {/* Founder Profile Block */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start pt-6 border-t border-border-custom">
              {/* Creator High-Res Portrait & Interactive Gallery */}
              <div className="md:col-span-5 space-y-4">
                <div className="w-full bg-white border border-border-custom p-1.5 rounded-xl shadow-sm">
                  <div className="w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-lg border border-border-custom bg-neutral-50 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeImageIndex}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        src={GALLERY_IMAGES[activeImageIndex]}
                        alt={companyStory.foundersName}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </AnimatePresence>
                  </div>
                </div>
                
                {/* Visual Label */}
                <div className="space-y-1">
                  <p className="font-display font-semibold text-base text-text-black">
                    {companyStory.foundersName}
                  </p>
                  <p className="text-[10px] tracking-widest uppercase font-mono text-neutral-400">
                    {companyStory.role}
                  </p>
                </div>

                {/* Grid of 12 Thumbnails */}
                <div className="pt-2 border-t border-border-custom">
                  <p className="text-[9px] tracking-widest uppercase font-mono text-neutral-400 font-semibold mb-2.5">
                    Gallery Collection ({activeImageIndex + 1} of {GALLERY_IMAGES.length})
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {GALLERY_IMAGES.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`aspect-square overflow-hidden rounded-lg border-2 transition-all duration-200 outline-none relative group cursor-pointer ${
                          activeImageIndex === idx
                            ? 'border-brand-green scale-95 shadow-sm'
                            : 'border-border-custom hover:border-neutral-400 hover:scale-105'
                        }`}
                        aria-label={`View gallery image ${idx + 1}`}
                      >
                        <img
                          src={imgUrl}
                          alt={`Mathias Comb thumbnail ${idx + 1}`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-opacity duration-300"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 space-y-4">
                {companyStory.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-neutral-500 text-sm sm:text-base leading-relaxed font-sans">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-border-custom">
          {/* Mission */}
          <div className="space-y-4">
            <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-mono">
              [ Our Mission ]
            </p>
            <h3 className="font-display font-semibold text-lg text-text-black">
              Empowering Expressive Excellence
            </h3>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-xl font-sans">
              {companyStory.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-4">
            <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-mono">
              [ Our Vision ]
            </p>
            <h3 className="font-display font-semibold text-lg text-text-black">
              A Trusted Voice in West African Music
            </h3>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-xl font-sans">
              {companyStory.vision}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
