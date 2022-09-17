import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {spacing, typography} from '@/theme';

const window = Dimensions.get('window');

export const styles = StyleSheet.create({
  specIcon: {
    marginBottom: spacing.xs,
    width: window.width * 0.08,
    height: window.width * 0.08,
  },
  specItemContainer: {
    alignItems: 'center',
    flex: 1,
  },
});
