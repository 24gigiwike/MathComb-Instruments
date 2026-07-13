export interface Specification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  series: string;
  category: string;
  brief: string;
  description: string;
  image: string;
  specifications: Specification[];
  highlights: string[];
  specsUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  type: 'image' | 'video';
  thumbnailUrl: string;
  category: string;
  location?: string;
  embedUrl?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
}
