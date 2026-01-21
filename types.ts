export interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string; // URL for the project cover
  metrics: string[];
  role: string;
  description: string; // Short description for card
  link?: string; // Optional external link

  // Deep Dive Content
  challenge: string;
  solution: string;
  result: string;

  tags: string[];
  category: 'Producción General' | 'Producción Audiovisual' | 'Web3 & Crypto' | 'iGaming' | 'Marketing';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image?: string;
}

export interface TechItem {
  name: string;
  category: 'Marketing' | 'IA/Automatización' | 'Producción/Diseño' | 'Web';
}