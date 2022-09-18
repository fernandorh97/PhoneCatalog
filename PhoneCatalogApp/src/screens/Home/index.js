import React, {useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {FlatList, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import LottieView from 'lottie-react-native';

import {styles} from './styles';
import {AddButton, Button, PhoneItem} from '@/components';
import {GetPhones} from '@/api/PhoneCatalogApi';
import {useDispatch, useSelector} from 'react-redux';
import {setPhoneList} from '@/actions/PhonesActions';
import {spinnerAnim} from '@/assets';

export function Home({navigation}) {
  const {t} = useTranslation('common');
  const theme = useTheme();

  const phoneList = useSelector(state => state.phones?.list);
  const [failed, setFailed] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!failed) {
      GetPhones()
        .then(x => {
          console.log(`Received phone list with ${x.length} elements`);
          dispatch(setPhoneList(x));
        })
        .catch(x => {
          console.log('GetPhones error', JSON.stringify(x));
          setFailed(true);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [failed]);

  return (
    <View testID="home-screen" style={styles.screen}>
      {failed ? (
        <View style={styles.centerScreen}>
          <Text style={[styles.error, {color: theme.colors.placeholderText}]}>
            {t('requestFailed')}
          </Text>
          <Button
            onPress={() => {
              setFailed(false);
            }}
            testID={'retry-button'}
            style={styles.button}
            text={t('retry')}
          />
        </View>
      ) : !phoneList ? (
        <View style={styles.centerScreen}>
          <LottieView
            style={styles.spinner}
            source={spinnerAnim}
            autoPlay
            loop
          />
        </View>
      ) : (
        <FlatList
          data={phoneList}
          renderItem={({item, index}) => (
            <PhoneItem
              testID={'phone-' + index}
              name={item.name}
              imageFileName={item.imageFileName}
              onPress={() =>
                navigation.navigate('PhoneDetails', {phoneId: item.id})
              }
            />
          )}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
          overScrollMode={'never'}
          ListEmptyComponent={
            <Text style={[styles.error, {color: theme.colors.placeholderText}]}>
              {t('noPhones')}
            </Text>
          }
          style={styles.list}
        />
      )}
      <AddButton
        style={styles.addButton}
        onPress={() => navigation.navigate('PhoneDetails')}
      />
    </View>
  );
}
