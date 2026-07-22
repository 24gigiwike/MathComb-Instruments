import { ArrowUpRight, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
}

export default function ContactSection({}: ContactSectionProps) {
  const whatsappUrl = "https://wa.me/2349027504789?text=Hello%20Mathias%20Comb%2C%20I%20would%20like%20to%20make%20an%20inquiry%20about%20Mathcomb%E2%84%A2%20Musical%20Instruments.";

  return (
    <section id="contact-cta" className="bg-[#FAFAFA] py-28 sm:py-36 border-b border-border-custom">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
        {/* Origin line */}
        <div className="flex items-center justify-center space-x-3">
          <span className="w-6 h-[1px] bg-brand-green" />
          <span className="text-[10px] tracking-[0.25em] uppercase font-mono text-text-black">
            Inquiry & Collaboration
          </span>
          <span className="w-6 h-[1px] bg-brand-green" />
        </div>

        {/* Heading */}
        <h2 className="font-display font-light text-4xl sm:text-5xl text-text-black tracking-tight leading-tight max-w-2xl mx-auto">
          Ready to experience the <br />
          <span className="font-semibold text-text-black">Mathcomb™ Musical Instruments Invention?</span>
        </h2>

        <p className="text-neutral-500 text-sm sm:text-base max-w-lg mx-auto font-sans leading-relaxed">
          Connect directly with Mathias Comb for performance bookings, instrument inquiries, or custom acoustic orders via WhatsApp.
        </p>

        {/* WhatsApp Direct Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            id="whatsapp-chat-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 text-[13px] font-medium uppercase tracking-wider bg-brand-green hover:bg-brand-green-hover text-white px-8 py-4 rounded-[8px] transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Connect with us</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Location & Contact Details */}
        <div className="pt-12 border-t border-border-custom max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="space-y-1">
            <p className="text-[9px] tracking-widest text-neutral-400 uppercase font-mono flex items-center">
              <MapPin className="w-3 h-3 mr-1 text-brand-green" />
              LOCATION
            </p>
            <p className="text-xs font-semibold text-text-black">
              Awoyaya, Lekki-Ajah, Lagos, Nigeria
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-[9px] tracking-widest text-neutral-400 uppercase font-mono flex items-center">
              <Phone className="w-3 h-3 mr-1 text-brand-green" />
              WHATSAPP / PHONE
            </p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-text-black hover:text-brand-green transition-colors"
            >
              +234 902 750 4789
            </a>
          </div>
          <div className="space-y-1">
            <p className="text-[9px] tracking-widest text-neutral-400 uppercase font-mono flex items-center">
              <Mail className="w-3 h-3 mr-1 text-brand-green" />
              INQUIRIES
            </p>
            <p className="text-xs font-semibold text-text-black">
              info@mathcomb.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
