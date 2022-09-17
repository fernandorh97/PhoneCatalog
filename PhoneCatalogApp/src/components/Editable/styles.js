import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {spacing, typography} from '@/theme';

const window = Dimensions.get('window');

export const styles = StyleSheet.create({
  editable: {
    borderRadius: spacing.xxs,
    padding: spacing.xxs,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
});
