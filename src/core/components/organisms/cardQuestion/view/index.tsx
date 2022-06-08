import { View, Text } from 'react-native'
import React from 'react'
import { ModelOfCardQuestion } from '../model'
import { Card, Texts } from '@src/core/components/atoms'
import { styles } from './styles'
import { Buttons } from '@src/core/components/molecules'

export const CardQuestion: React.FC<ModelOfCardQuestion> = ({
  theme,
  label,
  onPressFalse,
  onPressTrue
}) => {
  return (
    <Card theme={theme} style={styles(theme).container}>
      <Texts.Body theme={theme} alignCenter>{label}</Texts.Body>
      <View style={styles(theme).buttonView}>
        <Buttons.Link style={styles(theme).button} alignCenter theme={theme} onPress={onPressTrue}>TRUE</Buttons.Link>
        <Buttons.Link style={styles(theme).button} alignCenter theme={theme} onPress={onPressFalse}>FALSE</Buttons.Link>
      </View>
    </Card>
  )
}
