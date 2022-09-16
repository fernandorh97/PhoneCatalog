import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {spacing, typography} from '@/theme';

const window = Dimensions.get('window');

export const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    alignContent: 'center',
  },
});
