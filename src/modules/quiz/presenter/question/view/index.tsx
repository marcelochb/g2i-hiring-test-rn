import { View, Text } from 'react-native'
import React from 'react'
import { useQuestionController } from '../controller'

export const Question: React.FC = () => {
  const {getController} = useQuestionController();
  return (
    <View>
      <Text>Question</Text>
      {!getController.loading &&
        getController.quizzes.map(quiz => (
          <Text>{quiz.category}</Text>
        ))
      }
    </View>
  )
}
