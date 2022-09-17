import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {AppNavigator} from '@/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {theme} from '@/theme';
import {Provider} from 'react-redux';
import {store} from '@/store';

import '@/i18n';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const appTheme = isDarkMode ? theme.dark : theme.light;

  return (
    <Provider store={store}>
      <NavigationContainer theme={appTheme}>
        <StatusBar
          backgroundColor={appTheme.colors.card}
          barStyle={'light-content'}
        />
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
