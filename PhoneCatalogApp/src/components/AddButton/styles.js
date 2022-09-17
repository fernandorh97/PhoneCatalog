import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {spacing, typography} from '@/theme';

const window = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    borderRadius: window.width * 0.16,
    width: window.width * 0.16,
    height: window.width * 0.16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    ...typography.h1,
  },
});
