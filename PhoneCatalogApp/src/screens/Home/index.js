import React, {useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';

import {styles} from './styles';
import {PhoneItem} from '@/components';
import {GetPhones} from '@/api/PhoneCatalogApi';
import {typography} from '@/theme';
import {useDispatch, useSelector} from 'react-redux';
import {setPhoneList} from '@/actions/PhonesActions';

export function Home({navigation}) {
  const {t} = useTranslation('common');
  const theme = useTheme();

  const phoneList = useSelector(state => state.phones?.list);

  const dispatch = useDispatch();

  useEffect(() => {
    GetPhones()
      .then(x => {
        console.log(`Received phone list with ${x.length} elements`);
        dispatch(setPhoneList(x));
      })
      .catch(x => console.log('GetPhones error', x));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View
      testID="home-screen"
      style={{backgroundColor: theme.colors.background}}>
      {!phoneList ? (
        <Text style={[typography.h2, {color: theme.colors.text}]}>
          {t('loading')}...
        </Text>
      ) : (
        <FlatList
          data={phoneList}
          renderItem={({item}) => (
            <PhoneItem
              name={item.name}
              onPress={() =>
                navigation.navigate('PhoneDetails', {phoneId: item.id})
              }
            />
          )}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      )}
    </View>
  );
}
