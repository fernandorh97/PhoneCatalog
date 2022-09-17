import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {spacing, typography} from '@/theme';

const window = Dimensions.get('window');

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: spacing.xs,
  },
  row: {
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  spinner: {
    width: window.width * 0.25,
    height: window.width * 0.25,
    alignSelf: 'center',
    marginTop: spacing.m,
  },
  addButton: {
    position: 'absolute',
    margin: spacing.m,
    bottom: 0,
    right: 0,
  },
});
