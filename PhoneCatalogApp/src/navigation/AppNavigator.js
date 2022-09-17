import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, PhoneDetails} from '@/screens';
import {theme, typography} from '@/theme';
import {useTranslation} from 'react-i18next';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  const {t} = useTranslation('common');

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleStyle: {...typography.h4},
        headerTitleAlign: 'center',
        headerTintColor: 'white',
      }}
      initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{headerTitle: t('phoneCatalog')}}
        component={Home}
      />
      <Stack.Screen
        name="PhoneDetails"
        options={{headerTitle: t('phoneDetails')}}
        component={PhoneDetails}
      />
    </Stack.Navigator>
  );
}
