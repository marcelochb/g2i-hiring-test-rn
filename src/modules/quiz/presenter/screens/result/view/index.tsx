import React from 'react'
import { Buttons, List, PageWrapper, Texts } from '@src/core/components'
import { BaseTheme } from '@src/core/themes'
import { useResultController } from '../controller'
import { View } from 'react-native'

export const Result: React.FC = () => {
  const {getController:{quiz}, handlerContrller} = useResultController();
  return (
    <PageWrapper theme={BaseTheme}>
      <Texts.Title theme={BaseTheme} alignCenter>You scored</Texts.Title>
      <Texts.Title theme={BaseTheme} alignCenter>{`${quiz.correctAnswers} / ${quiz.totalCount}`}</Texts.Title>
      <List
        style={{flex: 1}}
        theme={BaseTheme}
        data={quiz.quizzes}
        item={({item}) => (
          <Texts.Body style={{marginBottom: 20}} theme={BaseTheme}>{item.question}</Texts.Body>
          )}
          />
      <Buttons.Link theme={BaseTheme} alignCenter onPress={() => handlerContrller.goHome()}>PLAY AGAIN?</Buttons.Link>
     </PageWrapper>
  )
}
