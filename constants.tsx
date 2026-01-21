import { Project, BlogPost, TechItem } from './types';
import { Cpu, Globe, BarChart3, Radio } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Sobre Mí', href: '#about' },
  { name: 'Trayectoria', href: '#experience' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Herramientas', href: '#stack' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'La Pelea del Año',
    subtitle: 'Producción General & Streaming',
    category: 'Producción General',
    image: '/LOGO-PeleaDelAño.png',
    link: 'https://www.youtube.com/@PeleaDelA%C3%B1o',
    metrics: ['20M+ Views Totales', '100k Viewers en Vivo', '14 Influencers'],
    role: 'Diseño del timeline, gestión técnica, coordinación de talento',
    description: 'Orquestación completa de evento masivo de streaming unificando transmisión en vivo con estrategia social.',
    challenge: 'El mayor desafío fue coordinar una transmisión en vivo de baja latencia para 100k espectadores concurrentes mientras se gestionaba el contenido en tiempo real de 14 influencers en el recinto, sin saturar la red ni perder calidad de broadcast.',
    solution: 'Implementé una arquitectura híbrida de red con redundancia 5G y fibra dedicada. Diseñé un "Social Hub" físico dentro del evento donde los influencers recibían clips editados en tiempo real (Live-to-Tape) listos para subir, sincronizando el hype online con la pelea en vivo.',
    result: 'Se rompió el récord de audiencia nacional para un evento de este tipo. La latencia se mantuvo bajo 3 segundos y el contenido generado por usuarios (UGC) amplificó el alcance orgánico en un 400% durante la transmisión.',
    tags: ['Streaming en Vivo', 'Gestión de Eventos', 'Estrategia Viral', 'OBS']
  },
  {
    id: '2',
    title: 'Binance IGO',
    subtitle: 'Web3 Growth & Launchpad',
    category: 'Web3 & Crypto',
    image: '/binance-logo.jpg',
    link: 'https://www.binance.com/en/nft/event/Dragonary?ref=NFTTW',
    metrics: ['$1M+ Recaudado', 'Partner Binance', 'CTR 20% Meta Ads'],
    role: 'Lead de Marketing, estrategia de lanzamiento',
    description: 'Ejecución de campaña global para lanzamiento de token y NFTs en un mercado de alta volatilidad.',
    challenge: 'Lanzar una Initial Game Offering (IGO) durante un periodo de alta saturación de mercado, donde la confianza de los usuarios era baja y las plataformas de publicidad tradicional (Meta/Google) bloqueaban constantemente los anuncios crypto.',
    solution: 'Desarrollé una estrategia de "Growth de Guerrilla". Utilizamos influencers de nicho en regiones Tier 2 y 3 (SEA/LATAM) y construimos un sistema de recompensas gamificado en Discord. Para Paid Media, utilizamos landing pages "puente" educativas para pasar los filtros de aprobación de anuncios.',
    result: 'Logramos Sold Out en minutos en la plataforma de Binance. La comunidad de Discord creció a 50k miembros activos reales (sin bots) y el Costo por Adquisición (CPA) se redujo en un 60% comparado con el benchmark de la industria.',
    tags: ['Crecimiento Web3', 'Comunidad', 'Paid Media', 'Blockchain']
  },
  {
    id: '3',
    title: 'Automatizaciones para Betbits',
    subtitle: 'Ecosistema de Automatización con IA',
    category: 'iGaming',
    image: '/betbits-logo.png',
    metrics: ['0xInfra SEO', '-40% Tiempo Ops', 'Auto GA4'],
    role: 'Desarrollador No-Code & Prompt Engineer',
    description: 'Solución al cuello de botella en análisis de datos y SEO mediante agentes de IA.',
    challenge: 'El equipo de marketing perdía 15 horas semanales analizando reportes de GA4 y redactando artículos SEO básicos para mantener el tráfico orgánico, limitando el tiempo para estrategia creativa.',
    solution: 'Creé un pipeline de automatización usando n8n y la API de Gemini. 1) Un agente lee la data de GA4 y genera un resumen ejecutivo diario en Slack. 2) Otro agente toma tendencias de búsqueda y redacta borradores SEO optimizados que solo requieren revisión humana.',
    result: 'Se eliminó el 40% de la carga operativa manual. La producción de contenido SEO se triplicó sin contratar personal extra, y el equipo pudo enfocarse en optimización de conversión, aumentando el ROI global.',
    tags: ['Automatización IA', 'Gemini API', 'n8n', 'Herramientas Internas']
  },
  {
    id: '4',
    title: 'YouTube Management',
    subtitle: 'Escalamiento de Canales & Estrategia de Contenido',
    category: 'Producción Audiovisual',
    image: '/youtube-logo.png',
    metrics: ['+200k Suscriptores', 'Millones de Vistas', 'Alta Retención'],
    role: 'Productor General & YouTube Manager',
    description: 'Gestión integral de ecosistemas de video-first. Desde la conceptualización de miniaturas de alto CTR hasta la producción ejecutiva de contenido para canales masivos como CoinaryTV.',
    challenge: 'Lograr consistencia y calidad visual en un entorno de alta frecuencia de publicación, manteniendo la retención de audiencia en nichos competitivos.',
    solution: 'Implementé procesos de producción en cadena (Factory Model) para miniaturas y edición. Optimicé títulos y metadatos basándome en análisis de tendencias en tiempo real.',
    result: 'Crecimiento sostenido del canal principal a más de 200,000 suscriptores. Establecimiento de una identidad visual sólida y reconocible en la plataforma.',
    tags: ['YouTube Growth', 'Thumbnail Design', 'Content Strategy', 'Video Production']
  },
  {
    id: '5',
    title: 'Crecimiento en Redes Sociales',
    subtitle: 'Arquitectura de Comunidades Multi-Plataforma',
    category: 'Marketing',
    image: '/social-media-logos.png',
    metrics: ['+5 Comunidades', 'Engagement Cruzado', 'Soporte 24/7'],
    role: 'Social Media Manager & Community Lead',
    description: 'Orquestación de la presencia digital unificada para Coinary, Mix On y Betbits a través de Instagram, TikTok, Twitter, Telegram y Discord.',
    challenge: 'Mantener una voz de marca coherente pero adaptada a cada plataforma (ej. formalidad en LinkedIn vs viralidad en TikTok) y gestionar comunidades activas en tiempo real.',
    solution: 'Desarrollé sistemas de gestión de comunidades escalables utilizando bots de moderación y flujos de contenido reciclable para maximizar el alcance con recursos optimizados.',
    result: 'Comunidades vibrantes y seguras en Discord y Telegram. Crecimiento orgánico en redes sociales mediante estrategias de contenido nativo para cada plataforma.',
    tags: ['Community Management', 'Social Media', 'Discord', 'Telegram', 'TikTok']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Cómo integré Gemini y GA4 para auditar campañas',
    excerpt: 'Workflow paso a paso con n8n y Google API para detectar anomalías en ROAS.',
    date: 'Oct 2023',
    readTime: '5 min de lectura',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '2',
    title: "La psicología del 'Hype' en eventos masivos",
    excerpt: 'Similitudes estructurales entre eventos de boxeo y lanzamientos de tokens.',
    date: 'Sep 2023',
    readTime: '7 min de lectura',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop'
  },
  {
    id: '3',
    title: "Marketing en 'zonas grises' (Casinos y Crypto)",
    excerpt: 'Frameworks de decisión cuando las plataformas restringen tu operación.',
    date: 'Aug 2023',
    readTime: '4 min de lectura',
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2069&auto=format&fit=crop'
  }
];

export const TECH_STACK: TechItem[] = [
  { name: 'Meta Ads', category: 'Marketing' },
  { name: 'Google Analytics 4', category: 'Marketing' },
  { name: 'Semrush', category: 'Marketing' },
  { name: 'Google Tag Manager', category: 'Marketing' },
  { name: 'Google AI Studio', category: 'IA/Automatización' },
  { name: 'Gemini API', category: 'IA/Automatización' },
  { name: 'n8n', category: 'IA/Automatización' },
  { name: 'Midjourney', category: 'IA/Automatización' },
  { name: 'Antigravity', category: 'IA/Automatización' },
  { name: 'Adobe Premiere', category: 'Producción/Diseño' },
  { name: 'Figma', category: 'Producción/Diseño' },
  { name: 'OBS Studio', category: 'Producción/Diseño' },
  { name: 'Photoshop', category: 'Producción/Diseño' },
  { name: 'Illustrator', category: 'Producción/Diseño' },
  { name: 'Canva', category: 'Producción/Diseño' },
  { name: 'Capcut', category: 'Producción/Diseño' },
  { name: 'WordPress', category: 'Web' },
  { name: 'Elementor', category: 'Web' },
];

export const SPECIALTIES = [
  { icon: <Globe className="w-6 h-6" />, label: 'Crecimiento Web3' },
  { icon: <Radio className="w-6 h-6" />, label: 'Producción de Streaming' },
  { icon: <Cpu className="w-6 h-6" />, label: 'Automatización con IA' },
  { icon: <BarChart3 className="w-6 h-6" />, label: 'Paid Media y Analytics' },
];