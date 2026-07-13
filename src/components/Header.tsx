import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onContactClick: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ onContactClick, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Products', id: 'featured-product' },
    { name: 'About', id: 'company-story' },
    { name: 'Contact', id: 'contact-cta' }
  ];

  const handleItemClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        id="main-navigation-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#FAFAFA]/95 backdrop-blur-md border-b border-border-custom py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo container and Company name */}
          <button
            id="brand-logo-btn"
            onClick={() => handleItemClick('hero')}
            className="flex items-center space-x-3.5 text-left cursor-pointer group focus:outline-none"
          >
            {/* 1:1 square logo container */}
            <div className="w-[40px] h-[40px] md:w-[52px] md:h-[52px] bg-white flex items-center justify-center flex-shrink-0 overflow-hidden rounded-md">
              <img
                src="https://res.cloudinary.com/dtkluxukm/image/upload/v1783945278/Simple_D_Letter_Logo_1_me2lyn.png"
                alt="Mathcomb Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Company Name */}
            <span className="font-sans font-medium text-xs md:text-sm lg:text-base text-text-black tracking-tight group-hover:text-brand-green transition-colors">
              Mathcomb™ Musical Instruments
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav-menu" className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className="text-[11px] uppercase tracking-widest font-medium text-neutral-500 hover:text-brand-green transition-colors relative py-1 cursor-pointer group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-green transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            {/* Clean rectangular Explore Products button */}
            <button
              id="header-explore-btn"
              onClick={() => handleItemClick('featured-product')}
              className="hidden md:inline-flex items-center justify-center text-[12px] font-medium uppercase tracking-wider bg-brand-green hover:bg-brand-green-hover text-white px-6 py-3 rounded-[8px] transition-colors duration-200 cursor-pointer border-0 outline-none"
            >
              Explore Products
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-text-black focus:outline-none p-1 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-neutral-950/20 z-40 lg:hidden backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              id="mobile-nav-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-[#FAFAFA] border-l border-border-custom p-8 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-10 mt-16">
                <div className="flex items-center space-x-3 pb-6 border-b border-border-custom">
                  <div className="w-[40px] h-[40px] bg-white flex items-center justify-center flex-shrink-0 overflow-hidden rounded-md">
                    <img
                      src="https://res.cloudinary.com/dtkluxukm/image/upload/v1783945278/Simple_D_Letter_Logo_1_me2lyn.png"
                      alt="Mathcomb Logo"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-sans font-medium text-xs text-text-black uppercase tracking-wider">
                    Mathcomb™ Musical Instruments
                  </span>
                </div>
                
                <nav id="mobile-nav-links" className="flex flex-col space-y-4">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className="text-xs tracking-widest uppercase font-medium text-left text-neutral-600 hover:text-brand-green py-2.5 cursor-pointer border-b border-neutral-100/50"
                    >
                      {item.name}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="space-y-4">
                <button
                  id="mobile-nav-explore"
                  onClick={() => {
                    setIsOpen(false);
                    handleItemClick('featured-product');
                  }}
                  className="w-full text-center text-[12px] font-medium uppercase tracking-wider bg-brand-green hover:bg-brand-green-hover text-white py-3.5 rounded-[8px] transition-colors duration-200 cursor-pointer"
                >
                  Explore Products
                </button>
                <p className="text-[10px] text-neutral-400 tracking-wider text-center uppercase font-mono">
                  Lagos, Nigeria • Founded by Mathias Eyeturami
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
