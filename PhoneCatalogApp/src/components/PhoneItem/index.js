import React, {useEffect} from 'react';
import {useTheme} from '@react-navigation/native';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';

export function PhoneItem({name, onPress, testID}) {
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      testID={testID}
      style={[styles.container, {backgroundColor: theme.colors.phone}]}>
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={[styles.name, {color: theme.colors.text}]}>
        {name}
      </Text>
      <View style={[styles.image, {backgroundColor: theme.colors.text}]} />
    </TouchableOpacity>
  );
}
