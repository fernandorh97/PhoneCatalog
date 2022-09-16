import i18n, {changeLanguage} from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import en from '@/translations/en';
import es from '@/translations/es';

const getData = async () => {
  try {
    const languagePreferences = await AsyncStorage.getItem('language');
    if (languagePreferences !== null) {
      changeLanguage(languagePreferences);
    } else {
      changeLanguage(RNLocalize.getLocales()[0].languageCode);
    }
  } catch (e) {
    console.log('i18next error', e);
  }
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    return getData();
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

const LANGUAGES = {
  en,
  es,
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources: LANGUAGES,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });
