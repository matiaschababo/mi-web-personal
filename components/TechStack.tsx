import React from 'react';
import { Section } from './Section';
import { TECH_STACK } from '../constants';

export const TechStack: React.FC = () => {
  // Grouping logic
  const categories = Array.from(new Set(TECH_STACK.map(item => item.category)));

  return (
    <Section id="stack" className="bg-zinc-900/30 border-y border-zinc-800/50">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Stack Tecnológico</h2>
        <p className="text-zinc-400">Herramientas de ejecución y arquitectura.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div key={category} className="space-y-4">
            <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider border-b border-zinc-800 pb-2">
              {category}
            </h3>
            <ul className="space-y-2">
              {TECH_STACK.filter(item => item.category === category).map((item) => (
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