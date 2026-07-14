import { Product, GalleryItem, Testimonial } from './types';
import acousticHeroImg from './assets/images/mathcomb_hero_acoustic_1783944204761.jpg';
import featuredPianoImg from './assets/images/mathcomb_featured_piano_1783944218512.jpg';
import violinDetailImg from './assets/images/mathcomb_violin_detail_1783944247623.jpg';

export const products: Product[] = [
  {
    id: 'mathcomb-acoustic-series-a',
    name: 'Series-A Resonator',
    series: 'The Mathcomb™ Musical Instruments Acoustic Resonator',
    category: 'Acoustic Invention',
    brief: 'A steel-string acoustic chamber integrated with our micro-tined comb-resonance engine for a rich, shimmering tone.',
    description: 'The Mathcomb™ Musical Instruments Series-A is the first physical realization of Mathias Edema Eyeturami\'s comb-resonance invention. By embedding a micro-tensioned soundboard directly coupled with tuned spring-steel comb tines inside a seasoned spruce cavity, this hybrid instrument produces a hauntingly beautiful, natural chorus effect and sustain that conventional acoustic guitars simply cannot achieve.',
    image: acousticHeroImg,
    highlights: [
      'Tuned micro-tined comb-resonance engine embedded inside the body cavity',
      'Acoustically coupled premium solid Sitka Spruce soundboard',
      'Generates a beautiful, natural chorus and unmatched mechanical sustain',
      'Traditional mahogany neck combined with precision-aligned resonance ports'
    ],
    specifications: [
      { label: 'Resonator Engine', value: 'Mathcomb™ Musical Instruments Micro-Tine Cavity' },
      { label: 'Soundboard', value: 'Coupled Solid Grade-AA Sitka Spruce' },
      { label: 'Back & Sides', value: 'Resonance-Seasoned Mahogany' },
      { label: 'Scale Length', value: '25.4 inches of pure harmonic response' },
      { label: 'Bridge Coupling', value: 'Direct-contact tone transfer block' },
      { label: 'Tuned Tines', value: 'Tempered High-Carbon Spring Steel' },
      { label: 'Tuning Stability', value: 'Grover Rotomatic 18:1 (Matte Black)' }
    ]
  },
  {
    id: 'mathcomb-forte-88',
    name: 'Forte-88 Keyboard',
    series: 'The Mathcomb™ Musical Instruments Polyphonic Keyboard',
    category: 'Keyboard Invention',
    brief: 'An 88-key triple-sensor hammer-action keyboard that triggers a physical bank of resonant, vibrated comb tines.',
    description: 'The Mathcomb™ Musical Instruments Forte-88 bridges the gap between traditional mechanical movement and the original comb-tine resonance concept. Designed for experimental studios, recording spaces, and progressive stages, its wooden keybeds deliver precise touch dynamics that actuate a series of physical comb elements. The result is a gorgeous, complex, polyphonic tapestry that blends grand piano response with warm, clockwork-like acoustic tones.',
    image: featuredPianoImg,
    highlights: [
      'Solid wood keys that control real-time physical comb-vibration strikes',
      'Dual-resonance cabinet design simulating organic micro-tine warmth',
      'Triple-sensor hammer-action for absolute tactile and sonic fidelity',
      'Direct balanced XLR outputs with organic acoustic line signals'
    ],
    specifications: [
      { label: 'Actuation Engine', value: '88-Key Mathcomb™ Musical Instruments Hammer Strikes' },
      { label: 'Resonant Elements', value: 'Individually Tuned Physical Steel Combs' },
      { label: 'Polyphony', value: 'Full Polyphonic Mechanical Actuation' },
      { label: 'Sound Bank', value: 'Acoustic Comb, Bell Resonator, Dreamscape Harp' },
      { label: 'Key Bed', value: 'Triple-Sensor Natural Wood Keys with Ivory Feel' },
      { label: 'Cabinet Simulation', value: 'Symmetric micro-tine body emulation' },
      { label: 'Connectivity', value: 'MIDI In/Out, USB Type-B, Expression inputs' },
      { label: 'Weight', value: '18.4 kg of precision-engineered machinery' }
    ]
  },
  {
    id: 'mathcomb-lyric-v',
    name: 'Lyric-V Bowed',
    series: 'The Mathcomb™ Musical Instruments Bowed Resonator',
    category: 'Bowed Invention',
    brief: 'An expressive bowed string instrument featuring an internal tuned micro-comb bridge for unmatched overtone richness.',
    description: 'The Lyric-V Bowed Resonator represents Mathias\'s most challenging quest: adapting comb-resonance technology to bowed string play. Standard violins rely solely on wood density; the Lyric-V introduces an internal, micro-engineered bridge coupled with tiny tuned brass tines. As the bow rubs the strings, the tines vibrate in perfect harmony, creating a deep, hauntingly expressive overtone structure that sounds like a miniature string ensemble playing in unison.',
    image: violinDetailImg,
    highlights: [
      'Bespoke internal bridge containing micro-engineered brass comb tines',
      'Aged solid European spruce top carved to amplify comb harmonics',
      'Produces a rich, haunting chorus and deep, projecting overtones',
      'Combines classical violin physics with modern acoustic invention'
    ],
    specifications: [
      { label: 'Resonance Bridge', value: 'Integrated Micro-Comb Brass System' },
      { label: 'Top Plate', value: 'Solid European Spruce carved for frequency pairing' },
      { label: 'Back & Ribs', value: 'Two-Piece Bosnian Flamed Maple' },
      { label: 'Tuned Overtones', value: 'Parisian-aligned high-frequency brass tines' },
      { label: 'Tailpiece Connection', value: 'Tuned Wittner micro-adjuster system' },
      { label: 'Strings', value: 'Pirastro Evah Pirazzi Gold for optimal friction' },
      { label: 'Finish', value: 'Traditional spirit varnish supporting acoustic expansion' },
      { label: 'Outfit Includes', value: 'Carbon fiber bow, custom hardshell case, premium rosin' }
    ]
  }
];

export const gallery: GalleryItem[] = [
  {
    id: 'g1',
    title: 'First Live Mathcomb™ Musical Instruments Demonstration in Lagos',
    type: 'image',
    thumbnailUrl: '/src/assets/images/mathcomb_performance_1783944232930.jpg',
    category: 'Invention Debut',
    location: 'Lekki, Lagos'
  },
  {
    id: 'g2',
    title: 'Mathcomb™ Musical Instruments Resonator Chamber Prototype',
    type: 'image',
    thumbnailUrl: '/src/assets/images/mathcomb_hero_acoustic_1783944204761.jpg',
    category: 'Acoustic Lab',
    location: 'Yaba Workshop'
  },
  {
    id: 'g3',
    title: 'Forte-88 Prototype Studio Session',
    type: 'image',
    thumbnailUrl: '/src/assets/images/mathcomb_featured_piano_1783944218512.jpg',
    category: 'Sound Recording',
    location: 'Ikeja, Lagos'
  },
  {
    id: 'g4',
    title: 'Precision Tuning of the Brass Tines',
    type: 'image',
    thumbnailUrl: '/src/assets/images/mathcomb_violin_detail_1783944247623.jpg',
    category: 'Fine Tuning',
    location: 'Lagos Workshop'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: 'The first time I heard the Mathcomb™ Musical Instruments Series-A, I couldn\'t believe it was acoustic. The shimmering, chorus-like resonance filled our entire sanctuary without any digital effects. It is a completely new musical voice that has brought a fresh spirit to our worship.',
    author: 'Pastor Tunde Alao',
    role: 'Music & Liturgy Director',
    organization: 'Grace Cathedral, Lagos'
  },
  {
    id: 't2',
    quote: 'Mathias\'s invention is a pedagogical and artistic marvel. It is incredibly rare to witness the birth of a new acoustic instrument class in our lifetime. The Forte-88 resonator provides our pianists with a totally unique touch-to-sound connection.',
    author: 'Dr. Elizabeth Eyisan',
    role: 'Professor of Piano & Composition',
    organization: 'Lagos Conservatory of Music'
  },
  {
    id: 't3',
    quote: 'Bowing the Lyric-V is like playing with an invisible choir. The micro-tines in the bridge add a hauntingly beautiful, shimmering texture to every phrase. Mathias has achieved a rare peak of acoustic craftsmanship.',
    author: 'Kelechi Nwosu',
    role: 'Principal Violinist',
    organization: 'West African Philharmonic Orchestra'
  }
];

export const companyStory = {
  foundersName: 'Mathias Eyeturami Edema',
  role: 'Inventor & Creator',
  bio: 'Mathias Eyeturami Edema, known professionally as Mathias Comb — a music minister, pastor, and creative instrumentalist from Warri South (Usele), Delta State, Nigeria. Now based in Benin City, Edo State, where he serves as the Senior Pastor of Paradise of Praise Deliverance International Inc., Mathias is widely recognized for pioneering a unique sound using ordinary hair combs to produce saxophone-like melodies.\n\nHis musical journey began after receiving divine instruction in a dream to start playing the comb — a vision he mastered through the inspiration of the Holy Spirit. Formerly a saxophonist, Mathias Comb has always been a passionate lover of music and instruments, drawing inspiration from role models like Nathaniel Bassey, Marvin Sapp, and Donnie McClurkin.\n\nThrough his creativity, he demonstrates that God can make something glorious out of anything, using music to spread faith, hope, and joy. From church events to weddings, celebrations, and outreaches, Mathias Comb\'s performances bridge artistry and spirituality. Beyond the stage, he inspires thousands through his social media platforms — YouTube, TikTok, Instagram, and Facebook — where he shares musical covers, live performances, and motivational reflections that continue to uplift and connect people across the world.',
  history: [
    {
      year: '2019',
      title: 'The Comb Genesis',
      description: 'Frustrated by flat acoustic profiles, Mathias began experimenting with the acoustic qualities of everyday plastic and metal combs in a tiny workshop in Yaba, analyzing their frequency waves.'
    },
    {
      year: '2021',
      title: 'The First Acoustic Resonator',
      description: 'Mathias successfully couples a micro-tensioned steel-tine comb with an acoustic spruce soundboard, giving birth to the first functional Mathcomb™ Musical Instruments Series-A prototype.'
    },
    {
      year: '2023',
      title: 'Polyphonic Expansion',
      description: 'Translating the invention into keyboard mechanics, Mathias designs a hammer-strike system that actuates a multi-tuned physical comb bank, launching the Forte-88.'
    },
    {
      year: '2026',
      title: 'The World Hears a New Voice',
      description: 'Today, Mathcomb™ Musical Instruments stands recognized not as a conventional retailer, but as the birthplace of an entirely new instrument family that bridges West African ingenuity with global music history.'
    }
  ],
  mission: 'To pioneer and develop the Mathcomb™ Musical Instruments family of instruments, proving that extraordinary musical innovation can emerge from the simplest everyday objects through dedicated craftsmanship and acoustics research.',
  vision: 'To establish the Mathcomb™ Musical Instruments as a globally recognized, distinct class of musical instruments, inspiring musicians worldwide with a completely new, natural, organic voice.'
};
