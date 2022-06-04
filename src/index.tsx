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
import {
  View,
} from 'react-native';
import { BaseTheme } from '@src/core/themes';
import { Home } from './modules/quiz/presenter';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './core/routes';

const Index = () => (
  <NavigationContainer>
    <Routes />
  </NavigationContainer>
);

export default Index;
