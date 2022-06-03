import { ModelOfTheme } from '@src/core/themes';
import { StyleSheet } from 'react-native';

export const styles = (theme: ModelOfTheme) => {
  const { fontSize } = theme;
  return StyleSheet.create({
    body: { fontSize: fontSize.base },
    title: { fontSize: fontSize.base, fontWeight: 'bold' },
  });
};
