import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import DeviceInfo from 'react-native-device-info';

import en from './en';
import pl from './pl';

const languageDetector = {
  type: 'languageDetector',
  async: false,
  detect: () => DeviceInfo.getDeviceLocale(),
  init: () => null,
  cacheUserLanguage: () => null,
};

i18n
  .use(languageDetector)
  .use(reactI18nextModule)
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
