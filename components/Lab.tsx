import React from 'react';
import { Section } from './Section';
import { BLOG_POSTS } from '../constants';
import { ArrowUpRight, FileText } from 'lucide-react';

export const Lab: React.FC = () => {
  return (
    <Section 
      id="lab" 
      title="El Laboratorio" 
      subtitle="Análisis técnicos, reflexiones sobre estrategia y gestión de la incertidumbre."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="glass-card p-6 rounded-xl border border-zinc-800 hover:border-zinc-600 transition-all duration-300 flex flex-col group cursor-pointer">
            <div className="flex items-center justify-between mb-4 text-xs text-zinc-500 font-mono">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <h3 className="text-xl font-display font-bold text-zinc-100 mb-3 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
              {post.excerpt}
            </p>
            <div className="flex items-center text-primary text-sm font-medium mt-auto">
              <span className="border-b border-transparent group-hover:border-primary transition-all">Leer artículo</span>
              <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </div>
          </article>
        ))}
      </div>
      
      <div className="mt-10 text-center">
        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors border border-zinc-800">
          <FileText className="w-4 h-4" />
          Ver todos los análisis
        </button>
      </div>
    </Section>
  );
};