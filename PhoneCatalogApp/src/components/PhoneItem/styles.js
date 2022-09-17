import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {spacing, typography} from '@/theme';

const window = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    margin: spacing.xs,
    width: window.width * 0.5 - spacing.xs * 3,
    height: window.width * 0.65,
    padding: spacing.xs,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: window.width * 0.35,
    height: undefined,
    aspectRatio: 0.77,
    resizeMode: 'contain',
  },
  name: {
    ...typography.bodyLargeMedium,
  },
});
