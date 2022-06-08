import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useQuestionController } from '../controller'
import { PageWrapper, Texts } from '@src/core/components';
import { BaseTheme } from '@src/core/themes';

export const Question: React.FC = () => {
  const {getController: {quiz,loading,totalCount}} = useQuestionController();
  return (
    <PageWrapper theme={BaseTheme} loading={loading}>
      <Texts.Title theme={BaseTheme} alignCenter>{quiz.category}</Texts.Title>
      <Texts.Body theme={BaseTheme} alignCenter>{quiz.question}</Texts.Body>
      <Texts.Body theme={BaseTheme} alignCenter>{`${quiz.currentCount} of ${totalCount}`}</Texts.Body>
    </PageWrapper>
  )
}
