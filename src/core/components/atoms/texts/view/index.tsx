import React from 'react';
import { Text } from 'react-native';
import { ModelOfTexts } from '../model';
import { styles } from './styles';

const Body: React.FC<ModelOfTexts> = ({ children, theme, alignCenter = false, style }) => (
  <Text style={[
    styles(theme).body,
    alignCenter
      ? styles(theme).textCenter
      : {},
    style
    ]}>{children}</Text>
);

const Title: React.FC<ModelOfTexts> = ({ children, theme, alignCenter = false, style }) => (
  <Text style={[
    styles(theme).title,
    alignCenter
      ? styles(theme).textCenter
      : {},
    style
  ]}>{children}</Text>
);

export const Texts = { Body, Title };
