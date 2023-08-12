import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en';
import ru from './ru';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en, ru,
    },
    fallbackLng: 'ru',
    debug: __IS_DEV__,
    interpolation: {
      escapeValue: false,
    },
    keySeparator: '.',
    react: {
      useSuspense: true,
    },
  });

const detectedLanguage = i18n.language;
if (detectedLanguage.startsWith('en')) {
  i18n.changeLanguage('en-US');
} else if (detectedLanguage.startsWith('ru')) {
  i18n.changeLanguage('ru-RU');
}

export default i18n;
