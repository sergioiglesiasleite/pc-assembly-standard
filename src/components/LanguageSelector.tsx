import { useState, useEffect } from 'react';
import { supportedLanguages, languageNames } from '../data/translations';
import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
    currentLang: string;
}

export default function LanguageSelector({ currentLang }: LanguageSelectorProps) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest('.language-selector')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const handleLanguageChange = (lang: string) => {
        window.location.href = lang === 'en' ? '/' : `/${lang}`;
    };

    return (
        <div className="language-selector relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                aria-label="Select language"
            >
                <Globe size={20} className="text-brand-primary" />
                <span className="font-medium uppercase">{currentLang}</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-50 min-w-[150px]">
                    {supportedLanguages.map((lang) => (
                        <button
                            key={lang}
                            onClick={() => handleLanguageChange(lang)}
                            className={`block w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${lang === currentLang ? 'bg-brand-primary text-white hover:bg-brand-primary' : ''
                                }`}
                        >
                            <span className="uppercase font-semibold">{lang}</span> - {languageNames[lang as keyof typeof languageNames]}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
