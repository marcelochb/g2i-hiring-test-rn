import { ModelOfTheme } from '@src/core/themes';
import { StyleProp, ViewStyle } from 'react-native';

export type ModelOfTexts = {
  theme: ModelOfTheme,
  alignCenter?: boolean,
  style?: StyleProp<ViewStyle>;
}
