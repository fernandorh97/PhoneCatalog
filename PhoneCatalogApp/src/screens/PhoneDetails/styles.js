import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {spacing, typography} from '@/theme';

const window = Dimensions.get('window');

export const styles = StyleSheet.create({
  image: {
    width: window.width * 0.65,
    height: undefined,
    aspectRatio: 0.77,
    marginVertical: spacing.m,
  },
  screen: {
    padding: spacing.m,
    alignItems: 'center',
  },
  textLine: {
    ...typography.bodyLarge,
    marginVertical: spacing.xs,
  },
});
