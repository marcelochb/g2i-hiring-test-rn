import { ModelOfColorTheme } from '@src/core/themes/model';

const baseColors = {
  highlight: '#D52817',
  white: '#fff',
  grey: '#c4c4c4',
  greyLight: '#f0f0f0',
  blackLight: '#404040',
  black: '#0D0D0D',
  blackOpacity: 'rgba(0,0,0,0.5)',
  yelow: '#d9dc11',
  red: '#e51818',
  green: '#11ff00',
};

export const colors:ModelOfColorTheme = {
  background: baseColors.white,
  backgroundSecundary: baseColors.grey,
  backgroundModal: baseColors.blackOpacity,
  elements: baseColors.black,
  elementsSecundary: baseColors.blackLight,
  text: baseColors.black,
  textSecundary: baseColors.blackLight,
  textElements: baseColors.white,
  textElementsSecundary: baseColors.grey,
  textHighlight: baseColors.highlight,
  warn: baseColors.yelow,
  error: baseColors.red,
  success: baseColors.green,
  elementsThird: baseColors.greyLight,
};
