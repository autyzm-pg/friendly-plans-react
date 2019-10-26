import i18n, { LanguageDetectorModule } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'react-native-localize';

import en from './en';
import pl from './pl';

const languageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  init(services, detectorOptions, i18nextOptions) {
    /* use services and options */
  },
  detect() {
    return getLocales()[0].languageCode;
  },
  cacheUserLanguage(lng) {
    /* cache language */
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en,
      pl,
    },
    ns: ['common', 'signIn', 'signUp'],
    defaultNS: 'common',
    debug: __DEV__,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
