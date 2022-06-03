import { View } from 'react-native';
import React from 'react';
import { Texts } from '@src/core/components';
import { ModelOfHome } from '../model';

export const Home: React.FC<ModelOfHome> = ({ theme }) => (
  <View>
    <Texts.Title theme={theme}>Home</Texts.Title>
  </View>
);
