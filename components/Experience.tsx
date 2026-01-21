import React from 'react';
import { Section } from './Section';
import { Briefcase, Calendar, ChevronRight, ExternalLink } from 'lucide-react';

const EXPERIENCE = [
    {
        company: "Betbits",
        logo: "/betbits-logo.png",
        link: "https://betbits.com/es",
        role: "CMO",
        period: "2025 - Presente",
        description: "Liderando la estrategia de marketing para un casino cripto mientras construyo infraestructura interna de IA.",
        achievements: [
            "Desarrollé 'Performance Hub': App que cruza datos de Meta Ads y GA4 para análisis de ROAS en tiempo real.",
            "Construí 'SEO Planner + Generator': Automatización de clústeres de contenido y generación de artículos optimizados.",
            "Creé 'Help Center AI': Asistente que analiza el sentimiento del usuario y redacta tickets de soporte.",
            "Consolidé una cultura 'performance-first', pasando de procesos manuales a flujos asistidos por IA."
        ],
        tech: ["Gemini AI", "Google AI Studio", "Meta Ads", "GA4"]
    },
    {
        company: "Mix On",
        logo: "/logo mix on.png",
        link: "https://www.youtube.com/@Mixontv_",
        role: "Productor Ejecutivo y Líder de Crecimiento",
        period: "2023 - 2025",
        description: "Orquestación de eventos masivos de streaming, incluyendo 'La Pelea del Año', y gestión de influencers de alto perfil.",
        achievements: [
            "20 Millones de Vistas Totales y 100k espectadores concurrentes en 'La Pelea del Año'.",
            "Coordinación técnica y de talento para 14 influencers top-tier.",
            "Crecimiento orgánico de redes a +130k seguidores combinados.",
            "Implementación de Midjourney y Stable Diffusion para assets creativos."
        ],
        tech: ["Streaming", "Producción de Eventos", "Marketing de Influencers"]
    },
    {
        company: "Coinary",
        logo: "/logo coinary completo.png",
        link: "http://coinary.com/",
        role: "Jefe de Marketing y Desarrollador Web",
        period: "2021 - 2024",
        description: "Lideré el crecimiento integral del ecosistema de juegos Web3: desde desarrollo web hasta gestión de comunidades.",
        achievements: [
            "Ejecución de IGO con Binance ($1M USD recaudado).",
            "Desarrollo de la página web oficial del ecosistema Coinary.",
            "Encargado de SEO y posicionamiento orgánico.",
            "Community Manager en Telegram y todas las redes sociales de los juegos.",
            "Social Media Manager de Coinary en todas las plataformas."
        ],
        tech: ["Web3", "Binance", "SEO", "Comunidades", "Redes Sociales"]
    },
    {
        company: "CoinaryTV",
        logo: "/logo coinarytv.svg",
        link: "https://www.youtube.com/@CoinaryTV",
        role: "Productor Ejecutivo y Manager de YouTube",
        period: "2020 - 2022",
        description: "Mi primera experiencia laboral. Productor General del canal de YouTube y blogs de Coinary.TV.",
        achievements: [
            "Crecimiento del canal a 200,000+ suscriptores.",
            "YouTube Manager: estrategia de contenido y optimización.",
            "Creador de miniaturas (Thumbnail Artist) para todos los videos.",
            "Community Manager manejando Instagram del canal."
        ],
        tech: ["YouTube", "Estrategia de Contenido", "Diseño de Miniaturas", "Instagram"]
    }
];

export const Experience: React.FC = () => {
    return (
        <Section id="experience" className="bg-zinc-900/30">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="flex items-center gap-3 mb-8">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                        <Briefcase className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-white">Trayectoria</h2>
                </div>

                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
                    {EXPERIENCE.map((job, idx) => (
                        <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                            {/* Timeline Icon */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-primary/50 group-hover:text-primary transition-colors">
                                <Briefcase className="w-4 h-4" />
                            </div>

                            {/* Content Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all shadow-sm">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                    <a
                                        href={job.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 group/link hover:opacity-80 transition-opacity"
                                    >
                                        <img
                                            src={job.logo}
                                            alt={`${job.company} logo`}
                                            className="w-8 h-8 object-contain rounded"
                                        />
                                        <h3 className="text-lg font-bold text-white group-hover/link:text-primary transition-colors flex items-center gap-2">
                                            {job.company}
                                            <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                        </h3>
                                    </a>
                                    <div className="flex items-center text-xs font-mono text-zinc-500 bg-zinc-950/50 px-2 py-1 rounded">
                                        <Calendar className="w-3 h-3 mr-1.5" />
                                        {job.period}
                                    </div>
                                </div>
                                <div className="text-primary font-medium mb-3 text-sm">{job.role}</div>
                                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                                    {job.description}
                                </p>

                                <ul className="space-y-2 mb-4">
                                    {job.achievements.map((ach, i) => (
                                        <li key={i} className="flex items-start text-zinc-300 text-xs">
                                            <ChevronRight className="w-3.5 h-3.5 text-primary mt-0.5 mr-1 shrink-0" />
                                            <span>{ach}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/50">
                                    {job.tech.map((t, i) => (
                                        <span key={i} className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500 bg-zinc-950 px-2 py-1 rounded border border-zinc-900">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
