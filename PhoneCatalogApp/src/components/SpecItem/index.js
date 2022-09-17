import React, {useEffect} from 'react';
import {useTheme} from '@react-navigation/native';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import {typography} from '@/theme';

export function SpecItem({title, text, icon}) {
  const theme = useTheme();
  const Icon = icon;
  return (
    <View style={styles.specItemContainer}>
      <Icon fill={theme.colors.text} {...styles.specIcon} />
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={[typography.noteMedium, {color: theme.colors.text}]}>
        {title}
      </Text>
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={[typography.note, {color: theme.colors.text}]}>
        {text}
      </Text>
    </View>
  );
}
