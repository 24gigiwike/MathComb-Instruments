import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import FeaturedProduct from './components/FeaturedProduct';
import WhyChoose from './components/WhyChoose';
import Story from './components/Story';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset slightly to account for the sticky navigation bar
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] font-sans selection:bg-neutral-900 selection:text-[#FAFAFA]">
      {/* Editorial Navigation */}
      <Header
        onContactClick={() => setIsContactOpen(true)}
        onNavigate={handleNavigate}
      />

      <main>
        {/* Core Sections */}
        <Hero
          onExploreClick={() => handleNavigate('featured-product')}
          onAboutClick={() => handleNavigate('brand-introduction')}
        />
        
        <Introduction />
        
        <FeaturedProduct />
        
        <WhyChoose />
        
        <Story />
        
        <ContactSection
          isOpen={isContactOpen}
          setIsOpen={setIsContactOpen}
        />
      </main>

      {/* Structured Footer */}
      <Footer
        onNavigate={handleNavigate}
        onContactClick={() => setIsContactOpen(true)}
      />
    </div>
  );
}
