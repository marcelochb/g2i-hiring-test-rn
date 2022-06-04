import { View } from 'react-native';
import React from 'react';
import { Buttons, Texts } from '@src/core/components';
import { ModelOfHome } from '../model';
import { styles } from './styles';

export const Home: React.FC<ModelOfHome> = ({ theme }) => (
  <View style={styles(theme).container}>
    <Texts.Title theme={theme} alignCenter>{`Welcome to the\nTrivia Challenge`}</Texts.Title>
    <Texts.Body theme={theme} alignCenter>{`You will be presented\nwith 10 True or False\nquestions.`}</Texts.Body>
    <Texts.Body theme={theme} alignCenter>{`Can you score 100%?`}</Texts.Body>
    <Buttons.Link theme={theme} onPress={() => {}} alignCenter>BEGIN</Buttons.Link>
  </View>
);
