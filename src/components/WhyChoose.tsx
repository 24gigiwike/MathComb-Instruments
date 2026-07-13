import { Award, ShieldCheck, Music } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChoose() {
  const points = [
    {
      icon: Award,
      title: 'Expert Selection',
      description: 'Every instrument is hand-selected and carefully evaluated by experienced musicians to guarantee professional playability right out of the box.',
      index: '01'
    },
    {
      icon: ShieldCheck,
      title: 'Precision Setup',
      description: 'Individually inspected and set up for consistent sound projection, accurate pitch stability, and reliable long-term performance.',
      index: '02'
    },
    {
      icon: Music,
      title: 'Trusted Performance',
      description: 'The preferred choice for churches, schools, recording studios, and live orchestral performances across Nigeria.',
      index: '03'
    }
  ];

  return (
    <section
      id="why-choose"
      className="bg-[#FAFAFA] py-24 sm:py-32 border-b border-border-custom relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="max-w-xl space-y-3 mb-20">
          <div className="flex items-center space-x-3">
            <span className="w-6 h-[1px] bg-brand-green" />
            <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-text-black font-mono">
              Why Mathcomb™ Musical Instruments
            </span>
          </div>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-text-black tracking-tight">
            Chosen by those who <span className="font-semibold text-text-black">know the difference.</span>
          </h2>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 divide-y md:divide-y-0 md:divide-x divide-border-custom border border-border-custom">
          {points.map((point, idx) => {
            const IconComponent = point.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 md:p-10 flex flex-col justify-between h-full min-h-[300px] space-y-8 bg-white"
              >
                <div className="space-y-6">
                  {/* Icon & Index */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 border border-border-custom bg-[#FAFAFA] text-brand-green flex items-center justify-center">
                      <IconComponent className="w-5 h-5 stroke-[1.25]" />
                    </div>
                    <span className="font-mono text-xs text-text-black font-bold">
                      {point.index}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-[13px] font-bold uppercase tracking-wider text-text-black font-display">
                      {point.title}
                    </h3>
                    <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-sans">
                      {point.description}
                    </p>
                  </div>
                </div>

                {/* Foot detail */}
                <div className="pt-4 border-t border-dashed border-border-custom text-[9px] tracking-widest text-neutral-500 uppercase font-mono">
                  Spec-Standard // certified
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
