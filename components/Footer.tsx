import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h4 className="text-white font-display font-bold text-xl">Matias Chababo</h4>
          <p className="text-zinc-500 text-sm mt-1">Arquitecto de Sistemas Digitales</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-zinc-400 hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-zinc-400 hover:text-primary transition-colors" aria-label="Email">
            <Mail className="w-6 h-6" />
          </a>
          <a href="#" className="text-zinc-400 hover:text-primary transition-colors" aria-label="GitHub">
            <Github className="w-6 h-6" />
          </a>
        </div>

        <div className="text-zinc-600 text-xs">
          &copy; {new Date().getFullYear()} All systems operational.
        </div>
      </div>
    </footer>
  );
};