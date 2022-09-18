jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  initReactI18next: {
    type: '3rdParty',
    init: jest.fn(),
  },
}));

jest.mock('react-native-localize', () => ({
  getLocales: () => {
    return [{languageCode: 'en'}];
  },
}));

jest.mock('react-native-modal', () => {});

jest.useFakeTimers();
