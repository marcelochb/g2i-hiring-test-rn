import React from 'react';
import { Text } from 'react-native';
import { ModelOfTexts } from '../model';
import { styles } from './styles';

const Body: React.FC<ModelOfTexts> = ({ children, theme }) => (
  <Text style={styles(theme).body}>{children}</Text>
);

const Title: React.FC<ModelOfTexts> = ({ children, theme }) => (
  <Text style={styles(theme).title}>{children}</Text>
);

export const Texts = { Body, Title };
