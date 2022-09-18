import React, {useRef, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {Image, ScrollView, Text, View} from 'react-native';

import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';

import {InputView, Editable, SpecItem, Button} from '@/components';
import {PHONE_IMAGES, PHONE_NAMES} from '@/constants';
import {notfound} from '@/assets';
import {useTranslation} from 'react-i18next';

import ColorIcon from '@/assets/icons/color.svg';
import ProcessorIcon from '@/assets/icons/processor.svg';
import ScreenIcon from '@/assets/icons/screen.svg';
import RamIcon from '@/assets/icons/ram.svg';
import {typography} from '@/theme';
import {AddPhone, DeletePhone, UpdatePhone} from '@/api/PhoneCatalogApi';
import {addPhone, deletePhone, updatePhone} from '@/actions/PhonesActions';

export function PhoneDetails({route, navigation}) {
  const theme = useTheme();
  const phoneId = route?.params?.phoneId;
  const phoneList = useSelector(state => state.phones?.list);
  const isNew = phoneId === undefined;
  const [phone, setPhone] = useState(
    isNew ? {price: 0, ram: 0} : phoneList?.find(x => x.id === phoneId),
  );
  const {t} = useTranslation('common');
  const dispatch = useDispatch();

  const scrollRef = useRef();

  const [status, setStatus] = useState('');

  const [editable, setEditable] = useState(phoneId === undefined);
  const [editing, setEditing] = useState(null);

  const enableConfirm =
    phone.name &&
    phone.manufacturer &&
    phone.imageFileName &&
    phone.price &&
    phone.description &&
    phone.color &&
    phone.processor &&
    phone.screen &&
    phone.ram;

  const imageSource = PHONE_IMAGES[phone?.imageFileName] || notfound;
  const imageIndex = Object.keys(PHONE_NAMES).findIndex(
    x => x === phone?.imageFileName,
  );
  const imageNumber = Object.keys(PHONE_NAMES).length;

  function onImageSelect(index) {
    const newPhone = {...phone};
    newPhone.imageFileName = Object.keys(PHONE_NAMES)[index];
    setPhone(newPhone);
  }

  function EditableText({style, textStyle, textKey, textAppend = ''}) {
    return (
      <Editable
        testID={'editable-' + textKey}
        style={style}
        editable={editable}
        onPress={() => setEditing(textKey)}>
        <Text
          style={[
            textStyle,
            {
              color: phone[textKey]
                ? theme.colors.text
                : theme.colors.placeholderText,
            },
          ]}>
          {phone[textKey] ? phone[textKey] + textAppend : t(textKey)}
        </Text>
      </Editable>
    );
  }
  function EditableSpecItem({textKey, icon, textAppend = ''}) {
    return (
      <Editable
        testID={'editable-' + textKey}
        style={styles.specItem}
        editable={editable}
        onPress={() => setEditing(textKey)}>
        <SpecItem
          title={t(textKey)}
          text={phone[textKey] ? phone[textKey] + textAppend : '?'}
          icon={icon}
        />
      </Editable>
    );
  }

  return (
    <View testID="phone-details-screen">
      <ScrollView ref={scrollRef} overScrollMode={'never'}>
        <View
          style={[
            styles.container,
            {backgroundColor: theme.colors.background},
          ]}>
          <EditableText
            style={styles.title}
            textKey={'name'}
            textStyle={typography.h2}
          />
          <EditableText
            textKey={'manufacturer'}
            textStyle={typography.bodyLarge}
          />
          <View style={styles.row}>
            {editable && (
              <Editable
                testID={'editable-img-previous'}
                style={styles.imageButton}
                editable={editable}
                onPress={() => {
                  onImageSelect((imageIndex + imageNumber - 1) % imageNumber);
                }}>
                <Text style={[typography.h1, {color: theme.colors.text}]}>
                  {'<'}
                </Text>
              </Editable>
            )}
            <Image
              accessibilityIgnoresInvertColors
              fadeDuration={0}
              source={imageSource}
              style={styles.image}
            />
            {editable && (
              <Editable
                testID={'editable-img-next'}
                style={styles.imageButton}
                editable={editable}
                onPress={() => {
                  onImageSelect((imageIndex + 1) % imageNumber);
                }}>
                <Text style={[typography.h1, {color: theme.colors.text}]}>
                  {'>'}
                </Text>
              </Editable>
            )}
          </View>
          <EditableText
            textKey={'price'}
            textStyle={typography.h2}
            textAppend={' €'}
          />
          <EditableText
            style={styles.description}
            textKey={'description'}
            textStyle={typography.bodyLarge}
          />
          <View style={styles.row}>
            <EditableSpecItem textKey={'color'} icon={ColorIcon} />
            <EditableSpecItem textKey={'processor'} icon={ProcessorIcon} />
            <EditableSpecItem textKey={'screen'} icon={ScreenIcon} />
            <EditableSpecItem
              textKey={'ram'}
              icon={RamIcon}
              textAppend={' GB'}
            />
          </View>
        </View>
        {status && (
          <Text style={[styles.status, {color: theme.colors.placeholderText}]}>
            {status}
          </Text>
        )}
        {editable && isNew && (
          <Button
            disabled={!enableConfirm}
            onPress={() => {
              setEditable(false);
              AddPhone(phone)
                .then(x => {
                  phone.id = x;
                  dispatch(addPhone(phone));
                  setStatus(t('phoneAdded'));
                  scrollRef.current?.scrollToEnd();
                })
                .catch(x => {
                  console.log('AddPhone error', x);
                  setEditable(true);
                });
            }}
            testID={'add-button'}
            style={styles.button}
            text={t('addPhone')}
          />
        )}
        {editable && !isNew && (
          <Button
            disabled={!enableConfirm}
            onPress={() => {
              setEditable(false);
              UpdatePhone(phone.id, phone)
                .then(x => {
                  dispatch(updatePhone(phone));
                  setStatus(t('phoneUpdated'));
                })
                .catch(x => {
                  console.log('UpdatePhone error', x);
                  setEditable(true);
                });
            }}
            testID={'update-button'}
            style={styles.button}
            text={t('confirmChanges')}
          />
        )}
        {!editable && !isNew && (
          <>
            <Button
              onPress={() => {
                setEditable(true);
              }}
              testID={'edit-button'}
              style={styles.editButton}
              text={t('editPhone')}
            />
            <Button
              onPress={() => {
                DeletePhone(phone.id)
                  .then(x => {
                    dispatch(deletePhone(phone.id));
                    navigation.goBack();
                  })
                  .catch(x => console.log('DeletePhone error', x));
              }}
              testID={'delete-button'}
              style={[styles.button, {backgroundColor: theme.colors.red}]}
              text={t('deletePhone')}
            />
          </>
        )}
      </ScrollView>
      {editing && (
        <InputView
          onBlur={() => setEditing(null)}
          isNumber={typeof phone[editing] === 'number'}
          placeholder={t(editing)}
          onSubmit={result => {
            const newPhone = {...phone};
            newPhone[editing] = result;
            setPhone(newPhone);
          }}
          defaultValue={phone[editing] ? phone[editing]?.toString() : ''}
        />
      )}
    </View>
  );
}
