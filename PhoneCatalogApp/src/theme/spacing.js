import {Dimensions} from 'react-native';

const window = Dimensions.get('window');

export const spacing = {
  xxs: window.width * 0.01,
  xs: window.width * 0.015,
  s: window.width * 0.02,
  m: window.width * 0.03,
  l: window.width * 0.04,
  xl: window.width * 0.05,
  xxl: window.width * 0.06,
};
