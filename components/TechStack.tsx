import React from 'react';
import { Section } from './Section';
import { useTranslation } from 'react-i18next';

export const TechStack: React.FC = () => {
  const { t } = useTranslation();

  // Define stack inside component or use a simple object structure
  // Since items are names (proper nouns), they don't need translation.
  // Categories do.

  const STACK_ITEMS = [
    { name: 'Meta Ads', category: 'Marketing' },
    { name: 'Google Analytics 4', category: 'Marketing' },
    { name: 'Semrush', category: 'Marketing' },
    { name: 'Google Tag Manager', category: 'Marketing' },
    { name: 'Google AI Studio', category: 'IA/Automatización' },
    { name: 'Gemini API', category: 'IA/Automatización' },
    { name: 'n8n', category: 'IA/Automatización' },
    { name: 'Midjourney', category: 'IA/Automatización' },
    { name: 'Antigravity', category: 'IA/Automatización' },
    { name: 'Adobe Premiere', category: 'Producción/Diseño' },
    { name: 'Figma', category: 'Producción/Diseño' },
    { name: 'OBS Studio', category: 'Producción/Diseño' },
    { name: 'Photoshop', category: 'Producción/Diseño' },
    { name: 'Illustrator', category: 'Producción/Diseño' },
    { name: 'Canva', category: 'Producción/Diseño' },
    { name: 'Capcut', category: 'Producción/Diseño' },
    { name: 'Veo', category: 'Producción/Diseño' },
    { name: 'Nano Banana', category: 'Producción/Diseño' },
    { name: 'WordPress', category: 'Web' },
    { name: 'Elementor', category: 'Web' },
    { name: 'GitHub', category: 'Web' },
    { name: 'Vercel', category: 'Web' },
  ];

  // Unique categories from the items
  const categories = Array.from(new Set(STACK_ITEMS.map(item => item.category)));

  return (
    <Section id="stack" className="bg-zinc-900/30 border-y border-zinc-800/50">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">{t('stack.title')}</h2>
        <p className="text-zinc-400">{t('stack.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div key={category} className="space-y-4">
            <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider border-b border-zinc-800 pb-2">
              {/* @ts-ignore - dynamic key access */}
              {t(`stack.categories.${category}`)}
            </h3>
            <ul className="space-y-2">
              {STACK_ITEMS.filter(item => item.category === category).map((item) => (
                <li key={item.name} className="text-zinc-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></span>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};