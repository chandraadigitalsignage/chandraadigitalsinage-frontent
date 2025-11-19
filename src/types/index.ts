// src/types/index.ts

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  position: string;
  image: string;
  quote: string;
  rating: number;
}

export interface CaseStudy {
  image: string;
  industry: string;
  title: string;
  description: string;
}

export interface Stat {
  count: number;
  label: string;
  suffix?: string;
}

export interface Benefit {
  image: string;
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface ImpactCard {
  title: string;
  description: string;
  icon: string;
}