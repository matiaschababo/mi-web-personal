import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export const LanguageToggle: React.FC = () => {
    const { i18n } = useTranslation();

    // Check if current language is English (handles 'en', 'en-US', 'en-GB', etc.)
    const isEnglish = i18n.language?.startsWith('en');

    const toggleLanguage = () => {
        const newLang = isEnglish ? 'es' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 hover:border-zinc-700 transition-all group"
            title={isEnglish ? "Cambiar a Español" : "Switch to English"}
        >
            <Globe className="w-4 h-4 text-zinc-400 group-hover:text-primary transition-colors" />
            <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors uppercase">
                {isEnglish ? 'EN' : 'ES'}
            </span>
        </button>
    );
};
