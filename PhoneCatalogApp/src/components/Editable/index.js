import React, {useEffect} from 'react';
import {useTheme} from '@react-navigation/native';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';

export function Editable({editable, style, children, onPress, testID}) {
  const theme = useTheme();
  return (
    <TouchableOpacity
      disabled={!editable}
      style={[
        styles.editable,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          backgroundColor: editable
            ? theme.colors.phone
            : theme.colors.transparent,
          borderWidth: editable ? 1 : 0,
          borderColor: theme.colors.text,
        },
        style,
      ]}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}
