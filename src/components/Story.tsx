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
              Honoring the journey of an original{' '}
              <span className="font-semibold text-text-black">West African invention.</span>
            </h2>

            {/* Founder Profile Block */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center pt-6 border-t border-border-custom">
              {/* Creator High-Res Portrait */}
              <div className="md:col-span-5 space-y-4">
                <div className="w-full bg-white border border-border-custom p-1.5 rounded-xl shadow-sm">
                  <div className="w-full overflow-hidden rounded-lg border border-border-custom">
                    <img
                      src="https://res.cloudinary.com/dtkluxukm/image/upload/v1784036238/FB_IMG_1763989647831_imag2n.jpg"
                      alt={companyStory.foundersName}
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="font-display font-semibold text-base text-text-black">
                    {companyStory.foundersName}
                  </p>
                  <p className="text-[10px] tracking-widest uppercase font-mono text-neutral-400">
                    {companyStory.role}
                  </p>
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
