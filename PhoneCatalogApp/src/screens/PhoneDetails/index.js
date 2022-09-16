import React from 'react';
import {useTheme} from '@react-navigation/native';
import {ScrollView, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';

import {styles} from './styles';
import {typography} from '@/theme';
import {useSelector} from 'react-redux';

function TextLine({text}) {
  const theme = useTheme();
  return (
    <Text style={[styles.textLine, {color: theme.colors.text}]}>{text}</Text>
  );
}

export function PhoneDetails({route, navigation}) {
  const {t} = useTranslation('common');
  const theme = useTheme();
  const {phoneId} = route?.params;
  const phoneList = useSelector(state => state.phones?.list);
  const phone = phoneList?.find(x => x.id === phoneId);

  return (
    <ScrollView testID="phone-details-screen">
      <View style={[styles.screen, {backgroundColor: theme.colors.background}]}>
        <Text style={[typography.h2, {color: theme.colors.text}]}>
          {phone.name}
        </Text>
        <View style={[styles.image, {backgroundColor: theme.colors.text}]} />
        <TextLine text={phone.manufacturer} />
        <TextLine text={phone.description} />
        <TextLine text={'Color: ' + phone.color} />
        <TextLine text={phone.price + ' €'} />
        <TextLine text={'Screen: ' + phone.screen} />
        <TextLine text={'Processor: ' + phone.processor} />
        <TextLine text={'RAM: ' + phone.ram + ' GB'} />
      </View>
    </ScrollView>
  );
}
