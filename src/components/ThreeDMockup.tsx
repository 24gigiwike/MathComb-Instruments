import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, Video } from 'lucide-react';
import { motion } from 'motion/react';

export interface Performance {
  session_number: number | string;
  total_sessions: number | string;
  date: string;
  video_url: string;
  title?: string;
  venue?: string;
  description?: string;
}

export interface SiteConfig {
  performances: Performance[];
}

/**
 * Utility function to extract YouTube Video ID from standard and shortened URLs
 * Handles:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 * - https://www.youtube.com/shorts/VIDEO_ID
 */
export function getYouTubeId(url: string): string | null {
  if (!url) return null;
  const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

/**
 * Helper to format date string to '%b %Y' (e.g. "Oct 2019")
 */
export function formatPerformanceDate(dateString: string): string {
  if (!dateString) return '';
  const parsed = new Date(dateString);
  if (!isNaN(parsed.getTime())) {
    return parsed.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }
  return dateString;
}

/**
 * Dynamic Pages CMS Collection: site.performances
 */
export const site: SiteConfig = {
  performances: [
    {
      session_number: 1,
      total_sessions: 5,
      date: '2019-10-01',
      video_url: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
      title: 'Performance Session 1: Awoyaya Workshop',
      venue: 'Awoyaya Workshop, Lekki-Ajah, Lagos',
      description: "An intimate live recording of the Mathcomb™ Musical Instruments acoustic resonance test, demonstrating its unique high-tension steel-tine resonance in Mathias's private Awoyaya, Lekki-Ajah, Lagos laboratory."
    },
    {
      session_number: 2,
      total_sessions: 5,
      date: '2021-02-01',
      video_url: 'https://youtu.be/dQw4w9WgXcQ',
      title: 'Performance Session 2: Cathedral Acoustic Test',
      venue: 'Grace Cathedral Sanctuary, Lagos',
      description: 'A beautiful demonstration of pure acoustic echo and long resonance sustain inside the Grace Cathedral Sanctuary structure.'
    },
    {
      session_number: 3,
      total_sessions: 5,
      date: '2023-08-01',
      video_url: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
      title: 'Performance Session 3: Conservatory Exhibition',
      venue: 'Lagos Conservatory of Music',
      description: 'Mathias demonstrating touch sensitivity and the rich mechanical overtone of the Mathcomb™ keyboard assembly.'
    },
    {
      session_number: 4,
      total_sessions: 5,
      date: '2023-12-01',
      video_url: 'https://youtu.be/9bZkp7q19f0',
      title: 'Performance Session 4: Bowed Bridge Calibration',
      venue: 'Ikeja Sound Studio, Lagos',
      description: 'High-frequency resonance capturing session using custom brass comb elements directly mounted to bowed string bridges.'
    },
    {
      session_number: 5,
      total_sessions: 5,
      date: '2020-06-01',
      video_url: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
      title: 'Performance Session 5: Micro-Tine Adjustments',
      venue: 'Awoyaya Research Lab, Lekki-Ajah, Lagos',
      description: 'Tuning session showcasing real-time steel tine feedback and structural decay analysis in the Awoyaya Lab.'
    }
  ]
};

export default function ThreeDMockup() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.75 
        : scrollLeft + clientWidth * 0.75;
      
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="performance-archive" 
      className="py-24 sm:py-32 bg-[#FAFAFA] border-t border-b border-border-custom overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center space-x-3">
              <span className="w-6 h-[1px] bg-brand-green" />
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-text-black font-mono">
                Performance Archive
              </span>
            </div>
            <h2 className="font-display font-light text-3xl sm:text-4xl text-text-black tracking-tight leading-tight">
              Mathias Performing with{' '}
              <span className="font-semibold text-text-black">Mathcomb™ Musical Instruments</span>
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-sans">
              A side-by-side showcase of authentic live performances, studio sessions, and workshop experiments led by inventor Mathias Edema Eyeturami.
            </p>
          </div>

          {/* Scrolling controls */}
          <div className="flex items-center space-x-3 self-end md:self-auto">
            <button
              onClick={() => scroll('left')}
              className="p-3 border border-border-custom bg-white hover:bg-[#FAFAFA] text-text-black rounded-full transition-all cursor-pointer outline-none hover:scale-105 active:scale-95"
              aria-label="Scroll Left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 border border-border-custom bg-white hover:bg-[#FAFAFA] text-text-black rounded-full transition-all cursor-pointer outline-none hover:scale-105 active:scale-95"
              aria-label="Scroll Right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* >>> DYNAMIC PERFORMANCE ARCHIVE SECTION START (Pages CMS Collection) <<< */}
        {/* ========================================================================= */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-6 pt-2 px-1 scroll-smooth scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {site.performances.map((performance, index) => {
            const youtubeId = getYouTubeId(performance.video_url);
            const formattedDate = formatPerformanceDate(performance.date);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: Math.min(index * 0.08, 0.4), ease: [0.16, 1, 0.3, 1] }}
                className="w-[300px] sm:w-[380px] flex-shrink-0 bg-white border border-border-custom p-4 flex flex-col justify-between snap-start group relative hover:shadow-md transition-shadow duration-300 rounded-xl"
              >
                {/* 16:9 Responsive Video Iframe Embed Player */}
                <div className="relative aspect-video w-full overflow-hidden border border-border-custom bg-black rounded-lg">
                  {youtubeId ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
                      title={performance.title || `Session ${performance.session_number} of ${performance.total_sessions}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-neutral-400 text-xs p-4 text-center">
                      <Video className="w-6 h-6 mb-2 text-neutral-500" />
                      <span>Video Unavailable</span>
                    </div>
                  )}
                </div>

                {/* Meta Text Pattern directly underneath iframe */}
                <div className="mt-3 text-[11px] font-mono font-medium text-neutral-600 tracking-wide">
                  Session {performance.session_number} of {performance.total_sessions} • {formattedDate}
                </div>

                {/* Optional Title / Venue description if present */}
                {performance.title && (
                  <div className="mt-1">
                    <h3 className="font-display font-medium text-sm text-text-black tracking-tight line-clamp-1">
                      {performance.title}
                    </h3>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
        {/* ========================================================================= */}
        {/* >>> DYNAMIC PERFORMANCE ARCHIVE SECTION END <<<                          */}
        {/* ========================================================================= */}
        
        {/* Footnote of authenticity */}
        <div className="flex items-center justify-center border-t border-border-custom pt-6 font-mono text-[9px] text-neutral-400 tracking-wider uppercase">
          <span>© {new Date().getFullYear()} MATHCOMB™ MUSICAL INSTRUMENTS</span>
        </div>

      </div>
    </section>
  );
}

