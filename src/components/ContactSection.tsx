import { useState, FormEvent } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactSectionProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function ContactSection({ isOpen, setIsOpen }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'acoustic-guitar',
    organization: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Real submission emulation
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: 'acoustic-guitar',
        organization: '',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact-cta" className="bg-[#FAFAFA] py-28 sm:py-36 border-b border-border-custom">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
        {/* Origin line */}
        <div className="flex items-center justify-center space-x-3">
          <span className="w-6 h-[1px] bg-brand-green" />
          <span className="text-[10px] tracking-[0.25em] uppercase font-mono text-text-black">
            Consultation & Sales
          </span>
          <span className="w-6 h-[1px] bg-brand-green" />
        </div>

        {/* Heading */}
        <h2 className="font-display font-light text-4xl sm:text-5xl text-text-black tracking-tight leading-tight max-w-2xl mx-auto">
          Ready to experience <br />
          <span className="font-semibold text-text-black">Mathcomb™ Musical Instruments?</span>
        </h2>

        {/* Text */}
        <p className="text-neutral-500 text-sm max-w-md mx-auto leading-relaxed">
          Arrange a private audition at our Lagos showroom or receive a custom catalog curated for your church, studio, or conservatory.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            id="open-contact-drawer-btn"
            onClick={() => setIsOpen(true)}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 text-[13px] font-medium uppercase tracking-wider bg-brand-green hover:bg-brand-green-hover text-white px-8 py-4 rounded-[8px] transition-colors duration-200 cursor-pointer border-0 outline-none"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Location Specs */}
        <div className="pt-12 border-t border-border-custom max-w-md mx-auto grid grid-cols-2 gap-4 text-left">
          <div className="space-y-1">
            <p className="text-[9px] tracking-widest text-neutral-400 uppercase font-mono flex items-center">
              <MapPin className="w-3 h-3 mr-1 text-brand-green" />
              LOCATION
            </p>
            <p className="text-xs font-semibold text-text-black">
              Yaba, Lagos, Nigeria
            </p>
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

      {/* Slide-out Inquiry Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="contact-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-neutral-950/20 backdrop-blur-sm flex justify-end"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              id="contact-drawer-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 170 }}
              className="w-full max-w-md bg-[#FAFAFA] border-l border-border-custom h-full p-8 flex flex-col justify-between overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="space-y-8">
                <div className="flex items-center justify-between border-b border-border-custom pb-5">
                  <div className="space-y-1">
                    <p className="text-[9px] tracking-widest text-neutral-400 uppercase font-mono">
                      Mathcomb™ Musical Instruments // Inquiry
                    </p>
                    <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-text-black">
                      Request Catalog or Audition
                    </h3>
                  </div>
                  <button
                    id="close-contact-drawer-btn"
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 text-neutral-400 hover:text-brand-green transition-colors cursor-pointer"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {isSubmitted ? (
                  <motion.div
                    id="submission-success-msg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4 py-12 text-center"
                  >
                    <div className="inline-flex p-3 bg-brand-green text-white mb-2 rounded-[6px]">
                      <span className="text-xs font-mono tracking-widest uppercase">RECEIPT VERIFIED</span>
                    </div>
                    <h4 className="font-display font-semibold text-text-black text-base">
                      Thank you, {formData.name || 'Musician'}
                    </h4>
                    <p className="text-neutral-500 text-xs leading-relaxed max-w-sm mx-auto">
                      Your inquiry has been logged in our Lagos office. Mathias Eyeturami or a Mathcomb™ Musical Instruments representative will contact you shortly via <strong>{formData.email}</strong>.
                    </p>
                  </motion.div>
                ) : (
                  <form id="contact-inquiry-form" onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="name-input" className="text-[10px] tracking-wider font-mono text-neutral-400 uppercase">
                        Your Name
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        required
                        placeholder="Mathias Edema"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white border border-border-custom p-3 text-xs text-text-black rounded-[8px] focus:outline-none focus:border-brand-green transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="email-input" className="text-[10px] tracking-wider font-mono text-neutral-400 uppercase">
                        Email Address
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white border border-border-custom p-3 text-xs text-text-black rounded-[8px] focus:outline-none focus:border-brand-green transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="phone-input" className="text-[10px] tracking-wider font-mono text-neutral-400 uppercase">
                        Phone Number
                      </label>
                      <input
                        id="phone-input"
                        type="tel"
                        required
                        placeholder="+234 80 0000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-white border border-border-custom p-3 text-xs text-text-black rounded-[8px] focus:outline-none focus:border-brand-green transition-colors"
                      />
                    </div>

                    {/* Interest Select */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="interest-select" className="text-[10px] tracking-wider font-mono text-neutral-400 uppercase">
                        Instrument of Interest
                      </label>
                      <select
                        id="interest-select"
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="bg-white border border-border-custom p-3 text-xs text-text-black rounded-[8px] focus:outline-none focus:border-brand-green transition-colors"
                      >
                        <option value="acoustic-guitar">Mathcomb™ Musical Instruments Series-A Acoustic</option>
                        <option value="stage-piano">Mathcomb™ Musical Instruments Forte-88 Keyboard</option>
                        <option value="violin">Mathcomb™ Musical Instruments Lyric-V Violin</option>
                        <option value="custom">Other Instruments / General Inquiry</option>
                      </select>
                    </div>

                    {/* Org */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="organization-input" className="text-[10px] tracking-wider font-mono text-neutral-400 uppercase">
                        Affiliation (Church / Studio / Conservatory)
                      </label>
                      <input
                        id="organization-input"
                        type="text"
                        placeholder="e.g. Grace Sanctuary, Lagos"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="bg-white border border-border-custom p-3 text-xs text-text-black rounded-[8px] focus:outline-none focus:border-brand-green transition-colors"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="message-input" className="text-[10px] tracking-wider font-mono text-neutral-400 uppercase">
                        Message / Request Description
                      </label>
                      <textarea
                        id="message-input"
                        rows={3}
                        required
                        placeholder="I would like to arrange a testing session for our music choir..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-white border border-border-custom p-3 text-xs text-text-black rounded-[8px] focus:outline-none focus:border-brand-green transition-colors resize-none"
                      />
                    </div>

                    <button
                      id="submit-inquiry-btn"
                      type="submit"
                      className="w-full flex items-center justify-center space-x-2 text-[12px] font-medium uppercase tracking-wider bg-brand-green hover:bg-brand-green-hover text-white px-5 py-4 rounded-[8px] transition-colors duration-200 cursor-pointer border-0 outline-none"
                    >
                      <span>Submit Secure Inquiry</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>

              {/* Bottom footer */}
              <div className="text-[10px] text-neutral-400 text-center tracking-wide uppercase pt-8">
                Mathcomb™ Musical Instruments • Yaba Showroom, Lagos • Established 2019
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
