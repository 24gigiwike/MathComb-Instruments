import { Product, GalleryItem, Testimonial } from './types';
import acousticHeroImg from './assets/images/mathcomb_hero_acoustic_1783944204761.jpg';
import featuredPianoImg from './assets/images/mathcomb_featured_piano_1783944218512.jpg';
import violinDetailImg from './assets/images/mathcomb_violin_detail_1783944247623.jpg';

export const products: Product[] = [
  {
    id: 'mathcomb-acoustic-series-a',
    name: 'Series-A Acoustic',
    series: 'Mathcomb™ Musical Instruments Series-A',
    category: 'Stringed Instruments',
    brief: 'A steel-string acoustic guitar carefully selected for its rich tone, featuring a solid sitka spruce top and premium mahogany back.',
    description: 'The Mathcomb™ Musical Instruments Series-A represents our dedication to acoustic purity. Curated for concert performers, recording artists, and worship leaders, it features an expertly designed bracing system that enhances resonance and provides pristine clarity across the entire dynamic range.',
    image: acousticHeroImg,
    highlights: [
      'Carefully selected solid spruce soundboard for exceptional clarity',
      'Seasoned mahogany neck with premium rosewood fingerboard',
      'High-ratio precision tuning machines for absolute pitch stability',
      'Optimized protective finish for unrestricted wood resonance'
    ],
    specifications: [
      { label: 'Soundboard', value: 'Solid Grade-AA Sitka Spruce' },
      { label: 'Back & Sides', value: 'Select Seasoned Mahogany' },
      { label: 'Neck Profile', value: 'Modern Low-Oval C-Shape' },
      { label: 'Fingerboard', value: 'East Indian Rosewood (12" Radius)' },
      { label: 'Scale Length', value: '25.4 inches' },
      { label: 'Nut & Saddle', value: 'Professional-Grade Bone' },
      { label: 'Bridge Pins', value: 'Ebony with Abalone Dots' },
      { label: 'Tuning Machines', value: 'Grover Rotomatic 18:1 (Matte Black)' }
    ]
  },
  {
    id: 'mathcomb-forte-88',
    name: 'Forte-88 Stage Piano',
    series: 'Mathcomb™ Musical Instruments Forte-88',
    category: 'Keyboards & Pianos',
    brief: 'An 88-key triple-sensor hammer-action stage piano with natural solid wood keys and authentic response.',
    description: 'Sourced for churches, premium music schools, and professional studios, the Forte-88 combines the complex acoustic resonance of a concert grand piano with modern state-of-the-art digital modeling. Premium wooden keybeds deliver an authentic, expressive mechanical touch.',
    image: featuredPianoImg,
    highlights: [
      'Graded hammer-action with solid wood keys and synthetic ivory touch',
      'Advanced dual-DSP modeling engine mimicking cabinet resonance',
      'Robust, durable chassis for permanent stability in any setting',
      'Professional-grade direct XLR stereo balanced outputs'
    ],
    specifications: [
      { label: 'Keyboard', value: '88 Solid Wood Keys (Graded Hammer-Action)' },
      { label: 'Touch Curves', value: '5 Preset Levels, 1 User Definable' },
      { label: 'Polyphony', value: '256 Notes (True Resonance Modeling)' },
      { label: 'Sound Bank', value: 'Concert Grand, Bright Studio, Vintage EP, Organ, Strings' },
      { label: 'Audio Outputs', value: 'Balanced Dual XLR, Unbalanced 1/4" L/R Jacks' },
      { label: 'Connectivity', value: 'MIDI In/Out, USB Type-B, Sustain & Expression Pedal Inputs' },
      { label: 'Power Supply', value: 'Silent External 12V DC Adapter' },
      { label: 'Weight', value: '18.4 kg (Excluding stand)' }
    ]
  },
  {
    id: 'mathcomb-lyric-v',
    name: 'Lyric-V Violin',
    series: 'Mathcomb™ Musical Instruments Lyric-V',
    category: 'Stringed Instruments',
    brief: 'A professional orchestral violin selected from seasoned Bosnian maple and European spruce.',
    description: 'The Lyric-V features a rich, projecting voice with mature overtone profiles. Carefully sourced from skilled instrument makers, every piece features precise plate thicknesses that sing beautifully under any bow stroke. Perfect for soloists, conservatories, and professional orchestras.',
    image: violinDetailImg,
    highlights: [
      'Select solid European spruce top, aged for a minimum of 10 years',
      'Beautifully flamed two-piece Bosnian maple back',
      'Authentic traditional spirit oil varnish in amber gold',
      'Premium boxwood fittings and heart-model pegs'
    ],
    specifications: [
      { label: 'Top Plate', value: 'Aged Solid European Spruce' },
      { label: 'Back & Ribs', value: 'Two-piece Flamed Bosnian Maple' },
      { label: 'Fingerboard & Nut', value: 'Genuine Madagascar Ebony' },
      { label: 'Pegs & Chinrest', value: 'Select Boxwood (Parisian Eye)' },
      { label: 'Tailpiece', value: 'Boxwood with integrated Wittner E-string fine tuner' },
      { label: 'Strings', value: 'Pirastro Evah Pirazzi Gold' },
      { label: 'Varnish', value: 'Traditional organic spirit varnish' },
      { label: 'Outfit Includes', value: 'Carbon fiber bow, luxury oblong case, premium rosin' }
    ]
  }
];

export const gallery: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Sunday Worship Service in Lagos',
    type: 'image',
    thumbnailUrl: '/src/assets/images/mathcomb_performance_1783944232930.jpg',
    category: 'Live Ministry',
    location: 'Lekki, Lagos'
  },
  {
    id: 'g2',
    title: 'Series-A Fine Wood Detail',
    type: 'image',
    thumbnailUrl: '/src/assets/images/mathcomb_hero_acoustic_1783944204761.jpg',
    category: 'Quality Check',
    location: 'Lagos Showroom'
  },
  {
    id: 'g3',
    title: 'Mathcomb™ Musical Instruments Forte-88 Studio Session',
    type: 'image',
    thumbnailUrl: '/src/assets/images/mathcomb_featured_piano_1783944218512.jpg',
    category: 'Recording Studio',
    location: 'Ikeja, Lagos'
  },
  {
    id: 'g4',
    title: 'Traditional Amber Gold Finish Inspection',
    type: 'image',
    thumbnailUrl: '/src/assets/images/mathcomb_violin_detail_1783944247623.jpg',
    category: 'Quality Check',
    location: 'Lagos Showroom'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: 'The resonance of the Series-A Acoustic is incredible. It fills our sanctuary with warmth without even needing heavy amplification. Sourced perfectly for our ministry.',
    author: 'Pastor Tunde Alao',
    role: 'Music Director',
    organization: 'Grace Cathedral, Lagos'
  },
  {
    id: 't2',
    quote: 'As an educator, I require instruments that tolerate intensive daily play while retaining flawless action and intonation. Mathcomb™ Musical Instruments provides gear that exceeds my pedagogical standards.',
    author: 'Dr. Elizabeth Eyisan',
    role: 'Professor of Piano Studies',
    organization: 'Lagos Conservatory of Music'
  },
  {
    id: 't3',
    quote: 'Lagos has been waiting for a dedicated musical instrument partner capable of supplying world-class gear. Mathias Eyeturami and the team have set the standard for premium retail and expertise.',
    author: 'Kelechi Nwosu',
    role: 'Principal Violinist',
    organization: 'West African Philharmonic Orchestra'
  }
];

export const companyStory = {
  foundersName: 'Mathias Edema Eyeturami',
  role: 'Founder & CEO',
  bio: 'A passionate musician and music expert, Mathias Edema Eyeturami founded Mathcomb™ Musical Instruments with a clear purpose: to provide fellow musicians in Nigeria with a trusted destination for carefully selected, professional-grade musical instruments. His deep musical experience and passion for tone guide our curated collection.',
  history: [
    {
      year: '2019',
      title: 'The Lagos Shop',
      description: 'Mathias began selecting and supplying high-quality acoustic guitars and violins from a small space in Yaba, advising musicians on the best setups.'
    },
    {
      year: '2021',
      title: 'Premium Partnerships',
      description: 'Establishing strong relations with specialized makers, bringing carefully selected Series-A acoustic guitars into Lagos studios and churches.'
    },
    {
      year: '2023',
      title: 'Digital Stage Expansion',
      description: 'Expanding into concert keyboards, launching the Forte-88. Mathcomb™ Musical Instruments entered churches, concert halls, and schools across West Africa.'
    },
    {
      year: '2026',
      title: 'The Standard of Nigerian Music Retail',
      description: 'Today, Mathcomb™ Musical Instruments stands as Nigeria’s premier musical instrument store, proving that world-class musical gear can be made accessible with expert curation.'
    }
  ],
  mission: 'To supply high-performance, reliable musical instruments and equipment that empower West African musicians to express their art with absolute confidence.',
  vision: 'To establish Mathcomb™ Musical Instruments as the most trusted music retail partner in West Africa, promoting music education, worship, and creativity.'
};
