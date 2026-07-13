import { companyStory } from '../data';
import { motion } from 'motion/react';

export default function Story() {
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
              Providing quality musical instruments,{' '}
              <span className="font-semibold text-text-black">trusted in Lagos.</span>
            </h2>

            {/* Founder Profile Block */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-6 border-t border-border-custom">
              <div className="md:col-span-4 space-y-1.5">
                <p className="font-display font-semibold text-base text-text-black">
                  {companyStory.foundersName}
                </p>
                <p className="text-[10px] tracking-widest uppercase font-mono text-neutral-400">
                  {companyStory.role}
                </p>
                <div className="pt-4 text-xs font-mono text-neutral-400 border-t border-border-custom mt-4 md:hidden">
                  LAGOS, NIGERIA
                </div>
              </div>

              <div className="md:col-span-8">
                <p className="text-neutral-500 text-sm sm:text-base leading-relaxed font-sans">
                  {companyStory.bio}
                </p>
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
