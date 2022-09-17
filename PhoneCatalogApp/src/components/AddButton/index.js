import React, {useEffect} from 'react';
import {useTheme} from '@react-navigation/native';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';

export function AddButton({name, onPress, style, testID}) {
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      testID={testID}
      style={[styles.container, {backgroundColor: theme.colors.card}, style]}>
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={[styles.name, {color: theme.colors.white}]}>
        +
      </Text>
    </TouchableOpacity>
  );
}
