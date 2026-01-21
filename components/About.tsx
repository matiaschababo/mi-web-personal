import React from 'react';
import { Section } from './Section';
import { Globe, Radio, Cpu, BarChart3, Gamepad2, Star } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

export const About: React.FC = () => {
  const { t } = useTranslation();

  const SPECIALTIES = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('about.specialties.web3.title'),
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: t('about.specialties.streaming.title'),
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: t('about.specialties.ai.title'),
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: t('about.specialties.analytics.title'),
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: t('about.specialties.igaming.title'),
    },
  ];

  return (
    <Section id="about" className="relative">
      <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in">
          <Star className="w-4 h-4" /> <span>Core Philosophy</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
          <Trans i18nKey="about.quote_start">
            No elijo entre la creatividad y la técnica;
          </Trans>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {t('about.quote_highlight')}
          </span>
        </h2>

        <p className="mt-8 text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
          {t('about.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 justify-items-center">
        {SPECIALTIES.map((item, idx) => (
          <div key={idx} className="w-full bg-zinc-900/80 p-8 rounded-2xl border border-primary/20 hover:border-primary shadow-lg shadow-primary/5 hover:shadow-primary/20 transition-all duration-300 group cursor-default backdrop-blur-sm flex flex-col items-center text-center">
            {/* Icon Box with Cyan Glow */}
            <div className="w-16 h-16 rounded-2xl bg-zinc-950 flex items-center justify-center mb-6 border border-zinc-800 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]">
              <div className="text-white group-hover:text-primary transition-colors">
                {item.icon}
              </div>
            </div>

            <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">{item.title}</h4>
          </div>
        ))}
      </div>
    </Section>
  );
};