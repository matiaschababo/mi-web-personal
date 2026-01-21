import React from 'react';
import { Section } from './Section';
import { Briefcase, Calendar, ChevronRight, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Experience: React.FC = () => {
    const { t } = useTranslation();

    const EXPERIENCE = [
        {
            company: "Betbits",
            logo: "/betbits-logo.png",
            link: "https://betbits.com/es",
            role: t('experience.jobs.betbits.role'),
            period: t('experience.jobs.betbits.period'),
            description: t('experience.jobs.betbits.description'),
            achievements: [
                t('experience.jobs.betbits.achievements.1'),
                t('experience.jobs.betbits.achievements.2'),
                t('experience.jobs.betbits.achievements.3'),
                t('experience.jobs.betbits.achievements.4')
            ],
            tech: ["Gemini AI", "Google AI Studio", "Meta Ads", "GA4"]
        },
        {
            company: "Mix On",
            logo: "/logo mix on.png",
            link: "https://www.youtube.com/@Mixontv_",
            role: t('experience.jobs.mixon.role'),
            period: t('experience.jobs.mixon.period'),
            description: t('experience.jobs.mixon.description'),
            achievements: [
                t('experience.jobs.mixon.achievements.1'),
                t('experience.jobs.mixon.achievements.2'),
                t('experience.jobs.mixon.achievements.3'),
                t('experience.jobs.mixon.achievements.4')
            ],
            tech: ["Streaming", "Producción de Eventos", "Marketing de Influencers"]
        },
        {
            company: "Coinary",
            logo: "/logo coinary completo.png",
            link: "http://coinary.com/",
            role: t('experience.jobs.coinary.role'),
            period: t('experience.jobs.coinary.period'),
            description: t('experience.jobs.coinary.description'),
            achievements: [
                t('experience.jobs.coinary.achievements.1'),
                t('experience.jobs.coinary.achievements.2'),
                t('experience.jobs.coinary.achievements.3'),
                t('experience.jobs.coinary.achievements.4'),
                t('experience.jobs.coinary.achievements.5')
            ],
            tech: ["Web3", "Binance", "SEO", "Comunidades", "Redes Sociales"]
        },
        {
            company: "CoinaryTV",
            logo: "/logo coinarytv.svg",
            link: "https://www.youtube.com/@CoinaryTV",
            role: t('experience.jobs.coinarytv.role'),
            period: t('experience.jobs.coinarytv.period'),
            description: t('experience.jobs.coinarytv.description'),
            achievements: [
                t('experience.jobs.coinarytv.achievements.1'),
                t('experience.jobs.coinarytv.achievements.2'),
                t('experience.jobs.coinarytv.achievements.3'),
                t('experience.jobs.coinarytv.achievements.4')
            ],
            tech: ["YouTube", "Estrategia de Contenido", "Diseño de Miniaturas", "Instagram"]
        }
    ];

    return (
        <Section id="experience" className="bg-zinc-900/30">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="flex items-center gap-3 mb-8">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                        <Briefcase className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-white">{t('experience.title')}</h2>
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
