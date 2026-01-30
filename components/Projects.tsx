import React, { useState } from 'react';
import { Section } from './Section';
import { Project } from '../types';
import { TrendingUp, X, ExternalLink, ArrowRight, Target, Zap, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t } = useTranslation();

  const PROJECTS: Project[] = [
    {
      id: '0',
      title: t('projects.items.zeroed.title'),
      subtitle: t('projects.items.zeroed.subtitle'),
      category: t('projects.items.zeroed.category'),
      image: '/zeroed-full-logo.png',
      link: 'https://zeroedgrowth.com/',
      metrics: [
        t('projects.items.zeroed.metrics.0'),
        t('projects.items.zeroed.metrics.1'),
        t('projects.items.zeroed.metrics.2')
      ],
      role: t('projects.items.zeroed.role'),
      description: t('projects.items.zeroed.description'),
      challenge: t('projects.items.zeroed.challenge'),
      solution: t('projects.items.zeroed.solution'),
      result: t('projects.items.zeroed.result'),
      tags: ['Growth', 'Meta Ads', 'AI Automation', 'Systemic']
    },
    {
      id: '1',
      title: t('projects.items.pelea.title'),
      subtitle: t('projects.items.pelea.subtitle'),
      category: t('projects.items.pelea.category'),
      image: '/LOGO-PeleaDelAño.png',
      link: 'https://www.youtube.com/@PeleaDelA%C3%B1o',
      metrics: [
        t('projects.items.pelea.metrics.0'),
        t('projects.items.pelea.metrics.1'),
        t('projects.items.pelea.metrics.2')
      ],
      role: t('projects.items.pelea.role'),
      description: t('projects.items.pelea.description'),
      challenge: t('projects.items.pelea.challenge'),
      solution: t('projects.items.pelea.solution'),
      result: t('projects.items.pelea.result'),
      tags: ['Streaming', 'Events', 'Viral', 'OBS'] // Tags kept simple or could be translated if needed
    },
    {
      id: '2',
      title: t('projects.items.binance.title'),
      subtitle: t('projects.items.binance.subtitle'),
      category: t('projects.items.binance.category'),
      image: '/binance-logo.jpg',
      link: 'https://www.binance.com/en/nft/event/Dragonary?ref=NFTTW',
      metrics: [
        t('projects.items.binance.metrics.0'),
        t('projects.items.binance.metrics.1'),
        t('projects.items.binance.metrics.2')
      ],
      role: t('projects.items.binance.role'),
      description: t('projects.items.binance.description'),
      challenge: t('projects.items.binance.challenge'),
      solution: t('projects.items.binance.solution'),
      result: t('projects.items.binance.result'),
      tags: ['Web3 Growth', 'Community', 'Paid Media', 'Blockchain']
    },
    {
      id: '3',
      title: t('projects.items.betbits.title'),
      subtitle: t('projects.items.betbits.subtitle'),
      category: t('projects.items.betbits.category'),
      image: '/betbits-logo.png',
      metrics: [
        t('projects.items.betbits.metrics.0'),
        t('projects.items.betbits.metrics.1'),
        t('projects.items.betbits.metrics.2')
      ],
      role: t('projects.items.betbits.role'),
      description: t('projects.items.betbits.description'),
      challenge: t('projects.items.betbits.challenge'),
      solution: t('projects.items.betbits.solution'),
      result: t('projects.items.betbits.result'),
      tags: ['AI Auto', 'Gemini API', 'n8n', 'Internal Tools']
    },
    {
      id: '4',
      title: t('projects.items.youtube.title'),
      subtitle: t('projects.items.youtube.subtitle'),
      category: t('projects.items.youtube.category'),
      image: '/youtube-logo.png',
      metrics: [
        t('projects.items.youtube.metrics.0'),
        t('projects.items.youtube.metrics.1'),
        t('projects.items.youtube.metrics.2')
      ],
      role: t('projects.items.youtube.role'),
      description: t('projects.items.youtube.description'),
      challenge: t('projects.items.youtube.challenge'),
      solution: t('projects.items.youtube.solution'),
      result: t('projects.items.youtube.result'),
      tags: ['YouTube', 'Thumbnails', 'Strategy', 'Production']
    },
    {
      id: '5',
      title: t('projects.items.social.title'),
      subtitle: t('projects.items.social.subtitle'),
      category: t('projects.items.social.category'),
      image: '/social-media-logos.png',
      metrics: [
        t('projects.items.social.metrics.0'),
        t('projects.items.social.metrics.1'),
        t('projects.items.social.metrics.2')
      ],
      role: t('projects.items.social.role'),
      description: t('projects.items.social.description'),
      challenge: t('projects.items.social.challenge'),
      solution: t('projects.items.social.solution'),
      result: t('projects.items.social.result'),
      tags: ['Community', 'Social', 'Discord', 'Telegram', 'TikTok']
    }
  ];

  const getCategoryColor = (category: string) => {
    // Check for both Spanish and English category names or use keywords
    const lower = category.toLowerCase();
    if (lower.includes('web3') || lower.includes('crypto')) return 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400';
    if (lower.includes('produc') || lower.includes('general')) return 'bg-red-500/10 border-red-500/30 text-red-400';
    if (lower.includes('audiovisual')) return 'bg-red-500/10 border-red-500/30 text-red-400';
    if (lower.includes('igaming')) return 'bg-green-500/10 border-green-500/30 text-green-400';
    if (lower.includes('growth')) return 'bg-orange-500/10 border-orange-500/30 text-orange-400';
    return 'bg-purple-500/10 border-purple-500/30 text-purple-400';
  };

  return (
    <Section
      id="projects"
      title={t('projects.title')}
      subtitle={t('projects.subtitle')}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group relative h-[400px] rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 cursor-pointer transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent opacity-90"></div>
            </div>

            {/* Content Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end items-start z-10">
              <div className="mb-auto pt-2">
                <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full backdrop-blur-md border ${getCategoryColor(project.category)}`}>
                  {project.category}
                </span>
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-400 line-clamp-2 mb-6">
                {project.subtitle}
              </p>

              <button
                onClick={() => setSelectedProject(project)}
                className="w-full py-3 rounded-xl bg-white/10 hover:bg-primary hover:text-zinc-950 text-white backdrop-blur-md border border-white/10 transition-all font-medium flex items-center justify-center gap-2"
              >
                {t('projects.view_details')} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-zinc-950/90 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>

          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-900 rounded-3xl border border-zinc-700 shadow-2xl flex flex-col overflow-hidden animate-fade-in">

            {/* Modal Header / Hero */}
            <div className="relative h-48 sm:h-64 shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors backdrop-blur-md border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-10 space-y-8">

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-xl text-primary font-light">
                    {selectedProject.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-primary text-zinc-950 px-4 py-2 rounded-lg font-bold hover:bg-primary/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t('projects.view_project')}
                    </a>
                  )}
                  <div className="bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700">
                    <span className="text-xs font-bold text-zinc-500 uppercase block mb-1">{t('projects.my_role')}</span>
                    <span className="text-zinc-200 text-sm">{selectedProject.role}</span>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {selectedProject.metrics.map((metric, i) => (
                  <div key={i} className="bg-zinc-950/50 p-4 rounded-2xl border border-zinc-800 flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-zinc-200 text-sm">{metric}</span>
                  </div>
                ))}
              </div>

              {/* Deep Dive Section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4 border-t border-zinc-800">

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-red-400 font-bold text-sm uppercase tracking-wider">
                    <Target className="w-4 h-4" /> {t('projects.sections.challenge')}
                  </div>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm uppercase tracking-wider">
                    <Zap className="w-4 h-4" /> {t('projects.sections.solution')}
                  </div>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {selectedProject.solution}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-green-400 font-bold text-sm uppercase tracking-wider">
                    <Award className="w-4 h-4" /> {t('projects.sections.result')}
                  </div>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {selectedProject.result}
                  </p>
                </div>
              </div>

              {/* Footer Tags */}
              <div className="flex flex-wrap gap-2 pt-4">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-zinc-800 text-zinc-400 text-xs font-bold uppercase tracking-wider border border-zinc-700">
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </div>
      )}
    </Section>
  );
};