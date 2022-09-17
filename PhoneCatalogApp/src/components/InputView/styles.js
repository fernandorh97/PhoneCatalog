import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {spacing, typography} from '@/theme';

const screen = Dimensions.get('screen');

export const styles = StyleSheet.create({
  inputScreen: {
    position: 'absolute',
    width: screen.width,
    height: screen.height,
    backgroundColor: '#101010c0',
  },
  inputBox: {
    paddingHorizontal: spacing.m,
  },
  input: {
    ...typography.bodyLarge,
    textAlign: 'center',
  },
});
