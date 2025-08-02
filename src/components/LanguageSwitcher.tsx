import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 left-4 z-50 px-4 py-2 rounded-lg backdrop-blur-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
      aria-label={`Switch to ${language === 'en' ? 'Turkish' : 'English'}`}
    >
      <div className="flex items-center space-x-2">
        <span className="text-sm font-semibold">
          {language === 'en' ? '🇹🇷 TR' : '🇺🇸 EN'}
        </span>
        <svg 
          className="w-4 h-4 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" 
          />
        </svg>
      </div>
    </button>
  );
};

export default LanguageSwitcher; 