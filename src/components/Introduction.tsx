import { motion } from 'motion/react';

export default function Introduction() {
  return (
    <section
      id="brand-introduction"
      className="bg-[#FAFAFA] border-y border-border-custom py-24 sm:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Section Indicator */}
          <div className="lg:col-span-3">
            <div className="flex items-center space-x-3">
              <span className="w-6 h-[1px] bg-brand-green" />
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-text-black font-mono">
                Introduction
              </span>
            </div>
            <p className="text-[10px] text-neutral-400 mt-2 font-mono tracking-widest uppercase">
              Core Ethos // 01
            </p>
          </div>

          {/* Main Statement */}
          <div className="lg:col-span-9 space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-light text-3xl sm:text-4xl text-text-black tracking-tight max-w-3xl leading-snug"
            >
              Built for musicians who <span className="font-semibold text-text-black">demand excellence.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-500 text-sm sm:text-base leading-relaxed max-w-4xl"
            >
              <p>
                Mathcomb™ Musical Instruments is a trusted partner for musicians, churches, schools, and recording studios seeking reliable, high-quality instruments. Founded in Lagos, Nigeria, by an experienced professional musician, our brand focuses on helping you find the perfect sound with expert advice, careful selection, and a commitment to serving live stages and sacred settings alike.
              </p>
              <p>
                We believe that every performer in West Africa deserves access to dependable, premium instrumentation without compromise. By supplying carefully selected instruments and equipment from trusted makers, we help you choose confidently, ensuring every piece of gear elevates your play and adapts beautifully to any climate.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background decoration line */}
      <div className="absolute top-0 right-1/4 h-full w-[1px] bg-border-custom/30 hidden lg:block select-none pointer-events-none" />
    </section>
  );
}
