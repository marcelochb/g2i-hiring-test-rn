import { View, Text } from 'react-native'
import React from 'react'
import { ModelOfItemListResult } from '../model'
import IconPlus from '@src/assets/icons/Plus.svg';
import IconRemove from '@src/assets/icons/Remove.svg';
import { Texts } from '@src/core/components/atoms'
import { styles } from './styles'

export const ItemListResult: React.FC<ModelOfItemListResult> = ({
  theme,
  isCorrectAnswer,
  isWrongAnswer,
  question
}) => {
  return (
    <View style={styles(theme).container}>
      {isCorrectAnswer && <IconPlus />}
      {isWrongAnswer && <IconRemove />}
      <Texts.Body style={styles(theme).question} theme={theme}>{question}</Texts.Body>
    </View>
  )
}
