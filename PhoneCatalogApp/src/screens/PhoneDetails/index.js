import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {Image, ScrollView, Text, View} from 'react-native';

import {styles} from './styles';
import {useSelector} from 'react-redux';

import {InputView, Editable, SpecItem} from '@/components';
import {PHONE_IMAGES, PHONE_NAMES} from '@/constants';
import {notfound} from '@/assets';
import {useTranslation} from 'react-i18next';

import ColorIcon from '@/assets/icons/color.svg';
import ProcessorIcon from '@/assets/icons/processor.svg';
import ScreenIcon from '@/assets/icons/screen.svg';
import RamIcon from '@/assets/icons/ram.svg';
import {typography} from '@/theme';

export function PhoneDetails({route, navigation}) {
  const theme = useTheme();
  const phoneId = route?.params?.phoneId;
  const phoneList = useSelector(state => state.phones?.list);
  const defaultPhone =
    phoneId === undefined
      ? {price: 0, ram: 0}
      : phoneList?.find(x => x.id === phoneId);
  const [phone, setPhone] = useState(defaultPhone);
  const {t} = useTranslation('common');

  const [editable, setEditable] = useState(false);
  const [editing, setEditing] = useState(null);

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
      <ScrollView>
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
          defaultValue={phone[editing]?.toString()}
        />
      )}
    </View>
  );
}
