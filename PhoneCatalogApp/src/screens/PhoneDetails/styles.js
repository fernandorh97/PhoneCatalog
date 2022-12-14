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
    resizeMode: 'contain',
  },
  container: {
    padding: spacing.m,
    alignItems: 'center',
  },
  title: {
    marginBottom: spacing.xs,
  },
  specItem: {
    marginHorizontal: spacing.xxs,
    paddingHorizontal: 0,
    flex: 1,
  },
  description: {
    marginTop: spacing.m,
    marginBottom: spacing.xxl,
  },
  row: {
    flexDirection: 'row',
  },
  imageButton: {
    alignSelf: 'center',
    paddingTop: 0,
    paddingHorizontal: spacing.l,
  },
  editButton: {
    margin: spacing.l,
    marginBottom: 0,
  },
  button: {
    margin: spacing.l,
  },
  status: {
    ...typography.h3,
    alignSelf: 'center',
    marginVertical: spacing.l,
  },
});
