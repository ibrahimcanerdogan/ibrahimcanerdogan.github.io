import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type LanguageSwitcherProps = {
  isDarkTheme: boolean;
  className?: string;
};

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isDarkTheme, className }) => {
  const { language, setLanguage } = useLanguage();

  const shell = isDarkTheme
    ? 'border-white/10 bg-gray-900/70 shadow-lg shadow-black/20'
    : 'border-gray-200/80 bg-white/80 shadow-md shadow-gray-900/5';

  const inactive = isDarkTheme
    ? 'text-zinc-400 hover:bg-white/5 hover:text-zinc-200'
    : 'text-zinc-600 hover:bg-gray-100 hover:text-zinc-900';

  const active = isDarkTheme
    ? 'bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30'
    : 'bg-emerald-100 text-emerald-800 ring-1 ring-emerald-600/20';

  return (
    <div
      className={`flex rounded-full border p-1 backdrop-blur-lg ${shell} ${className ?? ""}`}
      role="group"
      aria-label="Language"
    >
      {(['en', 'tr'] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLanguage(code)}
          aria-pressed={language === code}
          className={`min-w-[2.75rem] rounded-full px-3 py-2 text-xs font-semibold tracking-wide transition ${
            language === code ? active : inactive
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
