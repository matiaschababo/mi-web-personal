import React from 'react';
import { Section } from './Section';
import { Mail, Copy } from 'lucide-react';
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

          <div className="inline-flex items-center gap-4 p-4 pl-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-primary/50 transition-all duration-300 shadow-lg">
            <Mail className="w-6 h-6 text-primary" />
            <span className="text-xl md:text-2xl text-white font-mono tracking-tight">m@chababo.com</span>
            <button
              className="ml-2 p-3 rounded-xl hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all"
              title="Copiar"
              onClick={() => {
                navigator.clipboard.writeText('m@chababo.com');
              }}
            >
              <Copy className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};