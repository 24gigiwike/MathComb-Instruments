import { useState } from 'react';
import { products } from '../data';
import { Product } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check, X } from 'lucide-react';

export default function FeaturedProduct() {
  const [activeTab, setActiveTab] = useState<string>(products[0].id);
  const [selectedSpecProduct, setSelectedSpecProduct] = useState<Product | null>(null);

  const activeProduct = products.find((p) => p.id === activeTab) || products[0];

  return (
    <section id="featured-product" className="bg-[#FAFAFA] py-24 sm:py-32 border-b border-border-custom">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 space-y-4 sm:space-y-0">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="w-6 h-[1px] bg-brand-green" />
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-text-black font-mono">
                Curated Collection
              </span>
            </div>
            <h2 className="font-display font-light text-3xl sm:text-4xl text-text-black tracking-tight">
              Our Flagship <span className="font-semibold text-text-black">Instruments</span>
            </h2>
          </div>

          {/* Swiss Style Switcher Tabs */}
          <div className="flex flex-wrap gap-1 border-b border-border-custom pb-0">
            {products.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`text-left text-[11px] tracking-widest uppercase font-mono py-3 px-5 transition-all duration-300 relative cursor-pointer border-t border-l border-r ${
                  activeTab === p.id
                    ? 'text-brand-green font-bold bg-white border-border-custom border-t-brand-green -mb-[1px]'
                    : 'text-neutral-400 hover:text-text-black border-transparent bg-transparent'
                }`}
              >
                0{idx + 1} // {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Product Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            {/* Product Image Frame */}
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] w-full bg-white overflow-hidden relative group border border-border-custom p-4">
                <div className="w-full h-full overflow-hidden border border-border-custom relative">
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="absolute top-8 left-8 bg-text-black text-white text-[9px] tracking-widest uppercase font-mono px-3 py-1">
                  {activeProduct.category}
                </div>
              </div>
            </div>

            {/* Product Details Panel */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <p className="text-[10px] tracking-[0.35em] uppercase text-neutral-400 font-mono">
                  {activeProduct.series}
                </p>
                <h3 className="font-display font-light text-2xl sm:text-3xl text-text-black tracking-tight">
                  <span className="font-semibold text-text-black">{activeProduct.name}</span>
                </h3>
              </div>

              <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                {activeProduct.description}
              </p>

              {/* Highlights Bullet List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-[10px] tracking-[0.2em] uppercase font-mono text-neutral-400 font-semibold">
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {activeProduct.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start text-xs text-neutral-600 font-sans leading-relaxed">
                      <Check className="w-3.5 h-3.5 text-brand-green mr-2.5 mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to Actions */}
              <div className="pt-4 flex items-center space-x-6">
                <button
                  id={`view-specs-btn-${activeProduct.id}`}
                  onClick={() => setSelectedSpecProduct(activeProduct)}
                  className="w-full sm:w-auto border border-text-black px-8 py-4 rounded-[8px] text-[11px] font-medium uppercase tracking-widest hover:bg-text-black hover:text-white transition-all flex items-center justify-center space-x-2 cursor-pointer outline-none"
                >
                  <span>View Specifications</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Specifications Lightbox Modal */}
      <AnimatePresence>
        {selectedSpecProduct && (
          <motion.div
            id="specs-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/40 backdrop-blur-sm"
            onClick={() => setSelectedSpecProduct(null)}
          >
            <motion.div
              id="specs-modal-content"
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#FAFAFA] border border-border-custom w-full max-w-2xl overflow-hidden p-8 sm:p-10 relative space-y-8 rounded-[8px]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                id="close-specs-modal-btn"
                onClick={() => setSelectedSpecProduct(null)}
                className="absolute top-6 right-6 text-neutral-400 hover:text-text-black transition-colors p-1 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title Block */}
              <div className="space-y-2 border-b border-border-custom pb-5">
                <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-mono">
                  {selectedSpecProduct.series}
                </p>
                <h4 className="font-display font-semibold text-lg uppercase tracking-wider text-text-black">
                  Technical Specifications
                </h4>
              </div>

              {/* Spec sheet table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 max-h-[50vh] overflow-y-auto pr-2">
                {selectedSpecProduct.specifications.map((spec, idx) => (
                  <div key={idx} className="border-b border-border-custom pb-2.5 flex flex-col space-y-1">
                    <span className="text-[10px] tracking-wider uppercase font-mono text-neutral-400">
                      {spec.label}
                    </span>
                    <span className="text-xs font-semibold text-text-black">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Info bar */}
              <div className="pt-2 border-t border-border-custom flex items-center justify-between text-[10px] tracking-wider uppercase text-neutral-400 font-mono">
                <span>Expert Setup in Lagos, Nigeria</span>
                <span>Inspected & Certified</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
