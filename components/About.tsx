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
      desc: t('about.specialties.web3.desc'),
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20"
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: t('about.specialties.streaming.title'),
      desc: t('about.specialties.streaming.desc'),
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: t('about.specialties.ai.title'),
      desc: t('about.specialties.ai.desc'),
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: t('about.specialties.analytics.title'),
      desc: t('about.specialties.analytics.desc'),
      color: "text-orange-400 bg-orange-500/10 border-orange-500/20"
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: t('about.specialties.igaming.title'),
      desc: t('about.specialties.igaming.desc'),
      color: "text-red-400 bg-red-500/10 border-red-500/20"
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 justify-items-center">
        {SPECIALTIES.map((item, idx) => (
          <div key={idx} className="w-full bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/80 transition-all group cursor-default">
            {/* Colored Icon Box */}
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 border transition-transform group-hover:scale-110 ${item.color}`}>
              {item.icon}
            </div>

            <h4 className="text-xl font-bold text-white mb-2 leading-tight">{item.title}</h4>
            <p className="text-sm text-zinc-400 font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};