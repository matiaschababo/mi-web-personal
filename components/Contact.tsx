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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            {t('contact.title')}
          </h2>

          <div className="flex items-center gap-4 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 group hover:border-primary/50 transition-colors mt-4">
            <div className="bg-zinc-800 p-4 rounded-xl text-white group-hover:bg-primary group-hover:text-zinc-950 transition-colors">
              <Mail className="w-8 h-8" />
            </div>
            <div className="text-left">
              {/* Removed label as requested */}
              <p className="text-xl md:text-2xl text-white font-mono mt-1">m@chababo.com</p>
            </div>
            <button
              className="ml-4 p-2 text-zinc-500 hover:text-white transition-colors"
              title="Copiar"
              onClick={() => {
                navigator.clipboard.writeText('m@chababo.com');
              }}
            >
              <Copy className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};