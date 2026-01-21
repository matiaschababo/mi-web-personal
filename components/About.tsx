import React from 'react';
import { Section } from './Section';
import { SPECIALTIES } from '../constants';
import { Layers } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section id="about" className="relative">
      <div className="absolute left-0 top-20 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="glass-panel p-8 md:p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border border-zinc-800/50">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-sm bg-primary/10 px-3 py-1 rounded-md">
            <Layers className="w-4 h-4" />
            <span>SOBRE MÍ</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
            No elijo entre la creatividad y la técnica; <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-secondary">las integro.</span>
          </h3>
          <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
            <p>
              Con un background en Psicología y 5 años liderando proyectos en industrias de alta incertidumbre como Crypto, iGaming y Streaming, mi enfoque es sistémico.
            </p>
            <p>
              Entiendo que un evento masivo no funciona sin una infraestructura técnica sólida, y que la mejor herramienta de IA no sirve si no resuelve un problema real del negocio.
            </p>
            <p className="text-white font-medium border-l-4 border-primary pl-6 py-1 bg-gradient-to-r from-primary/10 to-transparent rounded-r-lg">
              "Desde producir un evento masivo hasta programar herramientas internas de IA para SEO."
            </p>
            <p>
              Empecé posicionando contenido orgánico (SEO) y terminé orquestando ecosistemas Web3 completos. Escalé comunidades a más de 200,000 miembros y gestioné eventos de streaming con 20 millones de vistas.
            </p>
            <p>
              Hoy opero como un "Intraemprendedor": uso IA Generativa y No-Code para automatizar lo aburrido y escalar lo importante.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SPECIALTIES.map((item, idx) => (
            <div key={idx} className="bg-gradient-to-br from-zinc-900/80 to-zinc-950 p-6 rounded-2xl border border-zinc-800 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(45,212,191,0.15)] transition-all group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-all mb-4 border border-primary/30">
                {item.icon}
              </div>
              <h4 className="text-zinc-200 font-medium text-lg">{item.label}</h4>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};