import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {spacing, typography} from '@/theme';

const window = Dimensions.get('window');

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  list: {
    padding: spacing.xs,
  },
  row: {
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  centerScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xxl * 3,
  },
  spinner: {
    width: window.width * 0.5,
    height: window.width * 0.5,
    alignSelf: 'center',
  },
  addButton: {
    position: 'absolute',
    margin: spacing.m,
    bottom: 0,
    right: 0,
  },
  error: {
    ...typography.h3,
    textAlign: 'center',
    marginHorizontal: spacing.xl,
  },
  button: {
    marginTop: spacing.xxl,
    width: window.width * 0.5,
  },
});
