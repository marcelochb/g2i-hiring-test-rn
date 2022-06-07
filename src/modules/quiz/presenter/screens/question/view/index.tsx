import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useQuestionController } from '../controller'
import { Texts } from '@src/core/components';
import { BaseTheme } from '@src/core/themes';

export const Question: React.FC = () => {
  const {getController: {quiz,loading}} = useQuestionController();
  if (loading) return <ActivityIndicator />
  return (
    <View>
      <Texts.Title theme={BaseTheme} alignCenter>{quiz.category}</Texts.Title>
      <Texts.Body theme={BaseTheme} alignCenter>{quiz.question}</Texts.Body>
    </View>
  )
}
