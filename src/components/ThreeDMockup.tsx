import React, { useState, useRef, useEffect } from 'react';
import { Play, ArrowLeft, ArrowRight, Video, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PerformanceVideo {
  id: string;
  videoUrl: string;
  venue: string;
  date: string;
  title: string;
  description: string;
}

const PERFORMANCE_VIDEOS: PerformanceVideo[] = [
  {
    id: 'perf-1',
    videoUrl: 'https://res.cloudinary.com/dtkluxukm/video/upload/v1784034391/Fade_Away_cover-Short_rpwxgz.mp4',
    venue: 'Awoyaya Workshop, Lekki-Ajah, Lagos',
    date: 'Oct 2019',
    title: 'Performance Session 1: Awoyaya Workshop',
    description: "An intimate live recording of the Mathcomb™ Musical Instruments acoustic resonance test, demonstrating its unique high-tension steel-tine resonance in Mathias's private Awoyaya, Lekki-Ajah, Lagos laboratory."
  },
  {
    id: 'perf-2',
    videoUrl: 'https://res.cloudinary.com/dtkluxukm/video/upload/v1784034367/When_We_pray_tseovn.mp4',
    venue: 'Grace Cathedral Sanctuary, Lagos',
    date: 'Feb 2021',
    title: 'Performance Session 2: Cathedral Acoustic Test',
    description: 'A beautiful demonstration of pure acoustic echo and long resonance sustain inside the Grace Cathedral Sanctuary structure.'
  },
  {
    id: 'perf-3',
    videoUrl: 'https://res.cloudinary.com/dtkluxukm/video/upload/v1784034268/Eze_Ebube_Shorts_3_ldaxpj.mp4',
    venue: 'Lagos Conservatory of Music',
    date: 'Aug 2023',
    title: 'Performance Session 3: Conservatory Exhibition',
    description: 'Mathias demonstrating touch sensitivity and the rich mechanical overtone of the Mathcomb™ keyboard assembly.'
  },
  {
    id: 'perf-4',
    videoUrl: 'https://res.cloudinary.com/dtkluxukm/video/upload/v1784034163/Onishe_Iyanu_cover-Short_ejkoi6.mp4',
    venue: 'Ikeja Sound Studio, Lagos',
    date: 'Dec 2023',
    title: 'Performance Session 4: Bowed Bridge Calibration',
    description: 'High-frequency resonance capturing session using custom brass comb elements directly mounted to bowed string bridges.'
  },
  {
    id: 'perf-5',
    videoUrl: 'https://res.cloudinary.com/dtkluxukm/video/upload/v1784033893/8ba2161d06cfe695f0af68c24b35aa8f_gfprm5.mp4',
    venue: 'Awoyaya Research Lab, Lekki-Ajah, Lagos',
    date: 'Jun 2020',
    title: 'Performance Session 5: Micro-Tine Adjustments',
    description: 'Tuning session showcasing real-time steel tine feedback and structural decay analysis in the Awoyaya Lab.'
  }
];

export default function ThreeDMockup() {
  const [selectedVideo, setSelectedVideo] = useState<PerformanceVideo | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const openModal = (video: PerformanceVideo) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
    setSelectedVideo(null);
  };

  // Manage modal open side effects (focus trapping, Esc key, background scroll prevention)
  useEffect(() => {
    if (selectedVideo) {
      // Prevent background scrolling
      document.body.style.overflow = 'hidden';

      // Focus close button for accessibility after a short render delay
      const focusTimer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 60);

      // Listen for Escape key
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeModal();
        }

        // Simple accessible focus trap inside modal
        if (e.key === 'Tab') {
          const modalElement = document.getElementById('video-modal-content');
          if (!modalElement) return;

          const focusableElements = modalElement.querySelectorAll(
            'button, video, [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length === 0) return;

          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      // Try auto-playing the video
      if (modalVideoRef.current) {
        modalVideoRef.current.currentTime = 0;
        modalVideoRef.current.play().catch((err) => {
          console.log('Autoplay play request prevented by browser policies:', err);
        });
      }

      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
        clearTimeout(focusTimer);
      };
    }
  }, [selectedVideo]);

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
              A side-by-side showcase of five authentic live performances, studio sessions, and workshop experiments led by inventor Mathias Edema Eyeturami in Lagos, Nigeria.
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

        {/* Side-by-Side Horizontal Snap Scroller */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-6 pt-2 px-1 scroll-smooth scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PERFORMANCE_VIDEOS.map((perf, index) => {
            return (
              <motion.div
                key={perf.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: Math.min(index * 0.08, 0.4), ease: [0.16, 1, 0.3, 1] }}
                className="w-[290px] sm:w-[380px] flex-shrink-0 bg-white border border-border-custom p-4 flex flex-col justify-between snap-start group relative hover:shadow-md transition-shadow duration-300 rounded-xl cursor-pointer"
                onClick={() => openModal(perf)}
              >
                {/* Meta Header */}
                <div className="flex items-center justify-between text-[9px] uppercase tracking-wider text-neutral-400 font-mono mb-3">
                  <span className="flex items-center gap-1.5 font-semibold text-brand-green">
                    <Video className="w-3 h-3" />
                    Session {index + 1} of 5
                  </span>
                  <span>{perf.date}</span>
                </div>

                {/* Video Container Frame with hover play cues */}
                <div className="relative aspect-video w-full overflow-hidden border border-border-custom bg-neutral-950 flex items-center justify-center rounded-lg">
                  <video
                    src={perf.videoUrl}
                    loop
                    muted
                    playsInline
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500 ease-out"
                  />

                  {/* Playback Control Overlay */}
                  <div className="absolute inset-0 bg-neutral-950/25 group-hover:bg-neutral-950/45 transition-colors duration-300 flex items-center justify-center">
                    <div
                      className="p-3.5 rounded-full bg-white text-text-black scale-95 group-hover:scale-110 active:scale-95 transition-all duration-300 shadow-md flex items-center justify-center"
                      aria-label={`Play Session ${index + 1}`}
                    >
                      <Play className="w-4 h-4 fill-current text-text-black ml-0.5" />
                    </div>
                  </div>
                </div>


              </motion.div>
            );
          })}
        </div>
        
        {/* Footnote of authenticity */}
        <div className="flex items-center justify-center border-t border-border-custom pt-6 font-mono text-[9px] text-neutral-400 tracking-wider uppercase">
          <span>© {new Date().getFullYear()} MATHCOMB™ MUSICAL INSTRUMENTS</span>
        </div>

      </div>

      {/* Lightbox / Video Modal experience */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 md:p-10"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Modal content box */}
            <motion.div
              id="video-modal-content"
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button top-right */}
              <button
                ref={closeButtonRef}
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white transition-all cursor-pointer outline-none focus:ring-2 focus:ring-brand-green/50"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* 16:9 Responsive Video Frame */}
              <div className="relative aspect-video w-full bg-black">
                <video
                  ref={modalVideoRef}
                  src={selectedVideo.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
