import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useQuestionController } from '../controller'
import { CardQuestion, PageWrapper, Texts } from '@src/core/components';
import { BaseTheme } from '@src/core/themes';

export const Question: React.FC = () => {
  const {
    getController: {quiz,loading,totalCount,empty,error},
    handlerController
  } = useQuestionController();
  return (
    <PageWrapper theme={BaseTheme} loading={loading} empty={empty} error={error}>
      <Texts.Title theme={BaseTheme} alignCenter>{quiz.category}</Texts.Title>
      <View style={{flex:1,justifyContent:'center'}}>
        <CardQuestion
          theme={BaseTheme}
          label={quiz.question}
          onPressTrue={() => handlerController.answerQuestion("True")}
          onPressFalse={() => handlerController.answerQuestion("False")}
        />
        <Texts.Body theme={BaseTheme} alignCenter>{`${quiz.currentCount} of ${totalCount}`}</Texts.Body>
      </View>
    </PageWrapper>
  )
}
