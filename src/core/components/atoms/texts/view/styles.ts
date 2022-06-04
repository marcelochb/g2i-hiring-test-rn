import { ModelOfTheme } from '@src/core/themes';
import { StyleSheet } from 'react-native';

export const styles = (theme: ModelOfTheme) => {
  const { fontSize, fontFamily, colors } = theme;
  return StyleSheet.create({
    body: {
      fontSize: fontSize.base,
      color: colors.text,
      fontFamily: fontFamily.regular
    },
    title: {
      fontSize: fontSize.base,
      fontWeight: 'bold',
      fontFamily: fontFamily.bold,
      color: colors.text,
    },
    textCenter: {textAlign: 'center'}
  });
};
