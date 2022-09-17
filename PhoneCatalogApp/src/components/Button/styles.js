import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {spacing, typography} from '@/theme';

const window = Dimensions.get('window');

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: spacing.s,
    borderRadius: spacing.s,
  },
});
