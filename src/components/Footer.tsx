import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onContactClick: () => void;
}

export default function Footer({ onNavigate, onContactClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#FAFAFA] border-t border-border-custom py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Brand & Section links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Column 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-display font-medium text-base tracking-wider uppercase text-text-black">
              Mathcomb™ Musical Instruments
            </h3>
            <p className="text-neutral-500 text-xs max-w-sm leading-relaxed">
              A trusted music brand and retailer, supplying carefully selected musical instruments and equipment to musicians, churches, schools, studios, and music enthusiasts.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] tracking-widest uppercase font-mono text-neutral-400 font-semibold">
              Instruments
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              <button
                onClick={() => onNavigate('featured-product')}
                className="text-left text-neutral-600 hover:text-brand-green transition-colors cursor-pointer"
              >
                Series-A Acoustic
              </button>
              <button
                onClick={() => onNavigate('featured-product')}
                className="text-left text-neutral-600 hover:text-brand-green transition-colors cursor-pointer"
              >
                Forte-88 Stage Piano
              </button>
              <button
                onClick={() => onNavigate('featured-product')}
                className="text-left text-neutral-600 hover:text-brand-green transition-colors cursor-pointer"
              >
                Lyric-V Violin
              </button>
            </div>
          </div>

          {/* Column 3: Corporate Info */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] tracking-widest uppercase font-mono text-neutral-400 font-semibold">
              Company
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              <button
                onClick={() => onNavigate('brand-introduction')}
                className="text-left text-neutral-600 hover:text-brand-green transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => onNavigate('company-story')}
                className="text-left text-neutral-600 hover:text-brand-green transition-colors cursor-pointer"
              >
                CEO & Founder
              </button>
            </div>
          </div>

          {/* Column 4: Contact Shortcuts */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] tracking-widest uppercase font-mono text-neutral-400 font-semibold">
              Support
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              <button
                onClick={onContactClick}
                className="text-left text-neutral-600 hover:text-brand-green transition-colors cursor-pointer"
              >
                Contact Us
              </button>
              <p className="text-neutral-400 select-none">
                Yaba, Lagos
              </p>
              <p className="text-neutral-400 select-none">
                Nigeria
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Line & Back to top */}
        <div className="pt-8 border-t border-border-custom flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          {/* Left copyright and credits */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-neutral-400 tracking-wider uppercase font-mono">
            <span>© {currentYear} MATHCOMB™ MUSICAL INSTRUMENTS</span>
            <span className="hidden sm:inline">•</span>
            <span>All Rights Reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Lagos, Nigeria</span>
          </div>

          {/* Right Action button (Back to Top) */}
          <button
            onClick={handleScrollToTop}
            className="self-start sm:self-auto flex items-center space-x-2 text-[10px] tracking-[0.2em] font-mono text-neutral-400 hover:text-brand-green transition-all cursor-pointer group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
