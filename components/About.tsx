import React from 'react';
import { Section } from './Section';
import { Globe, Rocket, Target, Star, Zap, Radio, Cpu, BarChart3 } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

export const About: React.FC = () => {
  const { t } = useTranslation();

  const SPECIALTIES = [
    {
      icon: <Globe className="w-10 h-10 transform group-hover:rotate-12 transition-transform duration-500" />,
      title: t('about.specialties.web3.title'),
      desc: t('about.specialties.web3.desc'),
      color: "from-blue-500/20 to-blue-600/5"
    },
    {
      icon: <Radio className="w-10 h-10 transform group-hover:rotate-12 transition-transform duration-500" />,
      title: t('about.specialties.streaming.title'),
      desc: t('about.specialties.streaming.desc'),
      color: "from-purple-500/20 to-purple-600/5"
    },
    {
      icon: <Cpu className="w-10 h-10 transform group-hover:rotate-12 transition-transform duration-500" />,
      title: t('about.specialties.ai.title'),
      desc: t('about.specialties.ai.desc'),
      color: "from-emerald-500/20 to-emerald-600/5"
    },
    {
      icon: <BarChart3 className="w-10 h-10 transform group-hover:rotate-12 transition-transform duration-500" />,
      title: t('about.specialties.analytics.title'),
      desc: t('about.specialties.analytics.desc'),
      color: "from-orange-500/20 to-orange-600/5"
    },
  ];

  return (
    <Section id="about" className="relative">
      <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
          <Star className="w-4 h-4" /> <span>Core Philosophy</span>
        </div>

        <h3 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
          <Trans i18nKey="about.quote_start">
            No elijo entre la creatividad y la técnica;
          </Trans>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {t('about.quote_highlight')}
          </span>
        </h3>

        <p className="mt-8 text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
          {t('about.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {SPECIALTIES.map((item, idx) => (
          <div key={idx} className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-primary/50 hover:bg-zinc-800 transition-all group cursor-default">
            <div className="w-12 h-12 rounded-xl bg-zinc-950 flex items-center justify-center text-zinc-400 group-hover:text-primary group-hover:scale-110 transition-all mb-4 border border-zinc-800">
              {item.icon}
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
            <p className="text-sm text-zinc-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};