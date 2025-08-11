import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 w-full bg-slate-900 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Brand Name */}
          <div className="flex items-center">
            <h1
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-white"
              style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
            >
              {t('header.brand')}
            </h1>
          </div>

          {/* Contact Us Button and Language Switcher */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-green-500 text-white px-3 py-2 sm:px-6 sm:py-2 text-sm sm:text-base rounded-md hover:bg-green-700 transition-colors duration-200 font-medium"
            >
              {t('header.contactUs')}
            </button>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
