import React, { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const Section: React.FC<SectionProps> = ({ id, children, className = "", title, subtitle }) => {
  return (
    <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
      {(title || subtitle) && (
        <div className="mb-12 space-y-2">
          {title && (
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              {title}
              <span className="text-primary ml-1">.</span>
            </h2>
          )}
          {subtitle && (
            <p className="text-zinc-400 text-lg max-w-2xl">
              {subtitle}
            </p>
          )}
          <div className="h-1 w-20 bg-zinc-800 mt-4 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-primary"></div>
          </div>
        </div>
      )}
      {children}
    </section>
  );
};