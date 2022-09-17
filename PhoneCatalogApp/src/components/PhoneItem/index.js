import React from 'react';
import {useTheme} from '@react-navigation/native';
import {Image, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import {PHONE_IMAGES} from '@/constants';
import {notfound} from '@/assets';

export function PhoneItem({name, imageFileName, onPress, testID}) {
  const theme = useTheme();
  const imageSource = PHONE_IMAGES[imageFileName] || notfound;

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
      <Image
        accessibilityIgnoresInvertColors
        fadeDuration={0}
        source={imageSource}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}
