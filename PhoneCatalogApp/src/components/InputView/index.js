import React, {useEffect} from 'react';
import {useTheme} from '@react-navigation/native';
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {styles} from './styles';

export function InputView({
  onBlur,
  isNumber,
  onSubmit,
  defaultValue,
  placeholder,
}) {
  const theme = useTheme();
  return (
    <Pressable style={styles.inputScreen} onPress={onBlur}>
      <View
        style={[
          styles.inputBox,
          {
            backgroundColor: theme.colors.phone,
          },
        ]}>
        <TextInput
          testID="text-input"
          autoFocus
          numberOfLines={4}
          multiline
          blurOnSubmit
          returnKeyType="done"
          placeholder={placeholder}
          placeholderTextColor={theme.colors.placeholderText}
          style={[styles.input, {color: theme.colors.text}]}
          onSubmitEditing={e => {
            const text = e.nativeEvent.text;
            if (text.length > 0) {
              if (isNumber) {
                const inputNumber = Number(text);
                if (!isNaN(inputNumber)) {
                  onSubmit(inputNumber);
                }
              } else {
                onSubmit(text);
              }
            }
          }}
          keyboardType={isNumber ? 'numeric' : 'default'}
          defaultValue={defaultValue}
          onBlur={onBlur}
        />
      </View>
    </Pressable>
  );
}
