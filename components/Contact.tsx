import React from 'react';
import { Section } from './Section';
import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="contact" className="relative mb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none"></div>

      <div className="glass-panel rounded-3xl p-8 md:p-12 overflow-hidden relative max-w-3xl mx-auto text-center">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]"></div>

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
            {t('contact.title')}
          </h2>

          <a
            href="mailto:m@chababo.com"
            className="inline-flex items-center gap-4 p-4 px-8 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-primary/50 hover:bg-zinc-900 transition-all duration-300 shadow-lg group cursor-pointer"
          >
            <Mail className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
            <span className="text-xl md:text-2xl text-white font-mono tracking-tight">m@chababo.com</span>
          </a>
        </div>
      </div>
    </Section>
  );
};