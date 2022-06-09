import { View, Text } from 'react-native'
import React from 'react'
import { ModelOfListResult } from '../model'
import { List } from '@src/core/components/atoms'
import { ItemListResult } from '@src/core/components/molecules'
import { styles } from './styles'

export const ListResult: React.FC<ModelOfListResult> = ({
  theme,
  data
}) => {
  return (
    <List
    style={styles.container}
    theme={theme}
    data={data}
    item={({item}) => (
        <ItemListResult
          theme={theme}
          isCorrectAnswer={item.correct_answer == item.answered}
          isWrongAnswer={item.correct_answer != item.answered}
          question={item.question}
        />
      )}
    />
  )
}
