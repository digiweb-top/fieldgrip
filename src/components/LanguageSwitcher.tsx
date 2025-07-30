import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const languages = [
    { code: 'en', name: t('language.english') },
    { code: 'hi', name: t('language.hindi') },
    { code: 'mr', name: t('language.marathi') }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative inline-flex items-center space-x-2 bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 hover:bg-slate-700 transition-colors duration-200">
      {/* Globe Icon */}
      <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
      
      {/* Language Selector */}
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="bg-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer border-0 rounded px-1 py-0"
        style={{ minWidth: '70px' }}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} className="bg-slate-800 text-white">
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}