/* istanbul ignore file */
import { ModelOfTheme } from '@src/core/themes';
import { StyleSheet } from 'react-native';

export const styles = (theme: ModelOfTheme) => StyleSheet.create({
    body: {
      fontSize: theme.fontSize.base,
      color: theme.colors.text,
      fontFamily: theme.fontFamily.regular
    },
    title: {
      fontSize: theme.fontSize.base,
      fontWeight: 'bold',
      fontFamily: theme.fontFamily.bold,
      color: theme.colors.text,
    },
    textCenter: {textAlign: 'center'}
  });
