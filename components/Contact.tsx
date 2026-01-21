import React from 'react';
import { Section } from './Section';
import { Send, Mail, Copy } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="relative mb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none"></div>

      <div className="glass-panel rounded-3xl p-8 md:p-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Iniciemos Protocolo de Conexión.
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Estoy disponible para consultoría estratégica, dirección de proyectos de alta complejidad o roles de liderazgo en ecosistemas Web3/Tech.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 group hover:border-primary/50 transition-colors">
                <div className="bg-zinc-800 p-3 rounded-xl text-white group-hover:bg-primary group-hover:text-zinc-950 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-bold uppercase">Email Directo</p>
                  <p className="text-white font-mono">m@chababo.com</p>
                </div>
                <button className="ml-auto text-zinc-500 hover:text-white" title="Copiar">
                  <Copy className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase ml-1">Nombre</label>
                <input type="text" className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Tu nombre" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase ml-1">Email</label>
                <input type="email" className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="tu@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase ml-1">Mensaje</label>
              <textarea className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all min-h-[120px]" placeholder="¿Qué sistema quieres construir?"></textarea>
            </div>
            <button className="w-full bg-primary text-zinc-950 font-bold py-4 rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2 group">
              Enviar Transmisión <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};