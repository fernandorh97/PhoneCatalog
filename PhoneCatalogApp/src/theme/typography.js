import {Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');
const ratio = 0.002626;

export const typography = StyleSheet.create({
  h1: {
    fontFamily: 'Roboto-Medium',
    fontSize: window.width * ratio * 40,
    letterSpacing: -0.2,
  },
  h2: {
    fontFamily: 'Roboto-Bold',
    fontSize: window.width * ratio * 36,
    letterSpacing: -0.2,
  },
  h3: {
    fontFamily: 'Roboto-SemiBold',
    fontSize: window.width * ratio * 24,
    letterSpacing: -0.2,
  },
  h4: {
    fontFamily: 'Roboto-Medium',
    fontSize: window.width * ratio * 20,
    letterSpacing: -0.2,
  },
  bodyLargeMedium: {
    fontFamily: 'Roboto-Medium',
    fontSize: window.width * ratio * 18,
    letterSpacing: -0.2,
  },
  bodyLarge: {
    fontFamily: 'Roboto-Regular',
    fontSize: window.width * ratio * 18,
    letterSpacing: -0.2,
  },
  body: {
    fontFamily: 'Roboto-Regular',
    fontSize: window.width * ratio * 16,
    letterSpacing: -0.2,
  },
  noteMedium: {
    fontFamily: 'Roboto-Medium',
    fontSize: window.width * ratio * 14,
    letterSpacing: -0.2,
  },
  note: {
    fontFamily: 'Roboto-Regular',
    fontSize: window.width * ratio * 14,
    letterSpacing: -0.2,
  },
  caption: {
    fontFamily: 'Roboto-Regular',
    fontSize: window.width * ratio * 12,
    letterSpacing: -0.2,
  },
});
