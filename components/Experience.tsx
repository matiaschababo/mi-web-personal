import React, { useState, useRef, MouseEvent } from 'react';
import { Section } from './Section';
import { Briefcase, Calendar, ChevronDown, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const Experience: React.FC = () => {
    const { t } = useTranslation();

    const EXPERIENCE = [
        {
            company: "Zeroed Growth",
            logo: "/zeroed-logo.png",
            link: "https://zeroedgrowth.com/",
            role: t('experience.jobs.zeroed.role'),
            period: t('experience.jobs.zeroed.period'),
            stats: t('experience.tags.my_agency'), // Single stat
            description: t('experience.jobs.zeroed.description'),
            achievements: [
                t('experience.jobs.zeroed.achievements.1'),
                t('experience.jobs.zeroed.achievements.2'),
                t('experience.jobs.zeroed.achievements.3'),
                t('experience.jobs.zeroed.achievements.4')
            ],
            tech: ["Meta Ads Expert", "Growth Ops", "AI Automation", "Creative Strategy"]
        },
        {
            company: "Betbits",
            logo: "/betbits-logo.png",
            link: "https://betbits.com/es",
            role: t('experience.jobs.betbits.role'),
            period: t('experience.jobs.betbits.period'),
            stats: t('experience.tags.plus_30_streamers'),
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
            stats: t('experience.jobs.mixon.stats'),
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
            logo: "/coinary-logo-v2.png",
            link: "http://coinary.com/",
            role: t('experience.jobs.coinary.role'),
            period: t('experience.jobs.coinary.period'),
            stats: [t('experience.jobs.coinary.stats'), t('experience.jobs.coinary.stats_users')], // Array
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
            stats: t('experience.jobs.coinarytv.stats'),
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
        <Section id="experience" className="relative overflow-hidden py-32">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="flex items-center gap-3 mb-24">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                        <Briefcase className="w-6 h-6" />
                    </div>
                    {/* H2 for SEO */}
                    <h2 className="text-3xl font-display font-bold text-white">{t('experience.title')}</h2>
                </div>

                <div className="relative pl-8 md:pl-0">
                    {/* Spine / Timeline Gradient */}
                    <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-600 to-transparent -translate-x-1/2" />

                    <div className="space-y-16">
                        {EXPERIENCE.map((job, idx) => (
                            <ExperienceCard key={idx} job={job} index={idx} t={t} />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

function ExperienceCard({ job, index, t }: { job: any, index: number, t: any }) {
    const [isOpen, setIsOpen] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const primaryStat = Array.isArray(job.stats) ? job.stats[0] : job.stats;
    const additionalStats = Array.isArray(job.stats) ? job.stats.slice(1) : [];

    return (
        <div className={cn(
            "relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 group",
            index % 2 === 0 ? "md:flex-row-reverse" : ""
        )}>
            {/* Timeline Node with Company Logo - MASSIVE SIZE UPDATE */}
            <div className="absolute left-[19px] md:left-1/2 w-16 h-16 md:w-28 md:h-28 rounded-full border border-zinc-800 bg-zinc-950 z-20 -translate-x-1/2 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:border-primary shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <img
                    src={job.logo}
                    alt={job.company}
                    className="w-full h-full object-cover" // Removed padding, changed to object-cover
                />
            </div>

            {/* Content Side */}
            <div className={cn("w-full md:w-[calc(50%-4rem)] pl-12 md:pl-0")}>
                {/* Spotlight Card Wrapper */}
                <div
                    onMouseMove={handleMouseMove}
                    className="group/card relative rounded-2xl bg-zinc-900/40 border border-white/5 overflow-hidden transition-all duration-500 hover:bg-zinc-900/60 backdrop-blur-md"
                >
                    {/* Spotlight Effect */}
                    <motion.div
                        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover/card:opacity-100"
                        style={{
                            background: useMotionTemplate`
                                radial-gradient(
                                650px circle at ${mouseX}px ${mouseY}px,
                                rgba(255,255,255,0.1),
                                transparent 80%
                                )
                            `,
                        }}
                    />

                    {/* Collapsible Trigger Area */}
                    <div
                        className="relative p-6 cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {/* Header: Company, Date */}
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div>
                                    <h4 className="text-zinc-400 font-medium text-sm flex items-center gap-2">
                                        {job.company}
                                        <ExternalLink className="w-3 h-3 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                                    </h4>
                                </div>
                            </div>
                            {/* Date - High Visibility Update */}
                            <div className="flex items-center gap-2 text-sm font-bold text-white bg-primary/20 px-3 py-1.5 rounded-full border border-primary/20 shadow-sm">
                                <Calendar className="w-3.5 h-3.5" />
                                {job.period}
                            </div>
                        </div>

                        {/* Semantic H3, Visual H1 */}
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover/card:text-primary transition-colors">
                            {job.role}
                        </h3>

                        {/* Killer Stat (Visible when Closed) */}
                        <div className="flex items-center justify-between">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-sm font-semibold">
                                {primaryStat}
                            </div>

                            <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-zinc-500"
                            >
                                <ChevronDown className="w-5 h-5" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="px-6 pb-6 border-t border-white/5 pt-4">
                                    {/* Stats Grid if multiple stats exist */}
                                    {additionalStats.length > 0 && (
                                        <div className="grid grid-cols-2 gap-3 mb-4">
                                            {additionalStats.map((stat: string, i: number) => (
                                                <div key={i} className="px-3 py-2 rounded-lg bg-zinc-800/50 border border-white/5 text-emerald-400/80 font-mono text-xs text-center">
                                                    {stat}
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                                        {job.description}
                                    </p>

                                    <ul className="space-y-3 mb-6">
                                        {job.achievements.map((ach: string, i: number) => (
                                            <li key={i} className="flex items-start text-zinc-400 text-xs group/item hover:text-zinc-200 transition-colors">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 mr-3 group-hover/item:bg-primary transition-colors" />
                                                {ach}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {job.tech.map((t: string, i: number) => (
                                            <span key={i} className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500 bg-black/40 px-2 py-1 rounded border border-white/5 hover:border-primary/30 hover:text-primary transition-colors">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-white/5 flex justify-end">
                                        <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline flex items-center gap-1">
                                            {t('experience.tags.visit_web')} <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
