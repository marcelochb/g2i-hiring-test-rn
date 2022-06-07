/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './core/routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from './core/config/store';
import { Provider } from 'react-redux';

const Index = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
  </Provider>
);

export default Index;
