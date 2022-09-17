import React from 'react';
import {useTheme} from '@react-navigation/native';
import {Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import {typography} from '@/theme';

export function Button({disabled, text, style, onPress, testID}) {
  const theme = useTheme();
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      testID={testID}
      style={[
        styles.button,
        {
          backgroundColor: disabled
            ? theme.colors.disabledButton
            : theme.colors.card,
        },
        style,
      ]}>
      <Text style={[typography.h3, {color: theme.colors.white}]}>{text}</Text>
    </TouchableOpacity>
  );
}
