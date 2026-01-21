import React, { useState, useEffect } from 'react';
import { Menu, X, Command } from 'lucide-react';
import { LanguageToggle } from './LanguageToggle';
import { useTranslation } from 'react-i18next';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const NAV_LINKS = [
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.stack'), href: '#stack' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-md border-zinc-800 py-3' : 'bg-transparent border-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-bold tracking-tight cursor-pointer">
          <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center border border-primary/20">
            <Command className="w-4 h-4 text-primary" />
          </div>
          <span className="font-display text-lg">MC</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hover:underline decoration-primary decoration-2 underline-offset-4"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 bg-white text-zinc-950 text-sm font-bold rounded hover:bg-zinc-200 transition-colors"
          >
            {t('nav.contact')}
          </a>

          <div className="pl-4 border-l border-zinc-800">
            <LanguageToggle />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageToggle />
          <button
            className="text-zinc-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 p-4 flex flex-col gap-4 shadow-2xl">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-300 py-2 border-b border-zinc-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="text-zinc-300 py-2 font-bold text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('nav.contact')}
          </a>
        </div>
      )}
    </nav>
  );
};