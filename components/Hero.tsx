import React from 'react';
import { Terminal, ArrowRight, MousePointer2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Organic Background Shapes */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none animate-pulse mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text Content */}
          <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">

            <h1 className="text-sm md:text-base font-medium text-zinc-400 uppercase tracking-widest mb-4">
              Matias Chababo
            </h1>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.1]">
              Arquitecto de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-secondary">
                Ecosistemas
              </span>
              {' '}Digitales.
            </h2>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Unifico <span className="text-white font-medium">Marketing</span>, <span className="text-white font-medium">Producto</span> y <span className="text-white font-medium">Tecnología</span>. Construyo soluciones escalables en Web3, Gaming y Streaming desde la estrategia hasta la automatización.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-2xl bg-white px-8 font-bold text-zinc-950 transition-all duration-300 hover:bg-zinc-200 hover:scale-105 w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                <span className="flex items-center gap-2">
                  Ver Proyectos <Terminal className="w-5 h-5" />
                </span>
              </a>

              <a
                href="#contact"
                className="group inline-flex h-14 items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-900/50 px-8 font-medium text-white transition-all hover:bg-zinc-800 hover:border-zinc-500 backdrop-blur-sm w-full sm:w-auto"
              >
                <span className="flex items-center gap-2">
                  Contactar <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>

          {/* Right: Visual / Photo */}
          <div className="order-1 lg:order-2 flex justify-center relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Spinning rings effect */}
              <div className="absolute inset-0 rounded-full border border-primary/30 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-secondary/30 animate-[spin_15s_linear_infinite_reverse]"></div>

              {/* Profile Image Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-zinc-700/50 shadow-2xl">
                <img
                  src="/profile.jpeg"
                  alt="Matias Chababo"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
                />
                {/* Glitch Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-40 mix-blend-overlay"></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};