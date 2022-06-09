import React from 'react'
import { Buttons, List, ListResult, PageWrapper, Texts } from '@src/core/components'
import { BaseTheme } from '@src/core/themes'
import { useResultController } from '../controller'

export const Result: React.FC = () => {
  const {getController:{quiz}, handlerContrller} = useResultController();
  return (
    <PageWrapper theme={BaseTheme}>
      <Texts.Title theme={BaseTheme} alignCenter>You scored</Texts.Title>
      <Texts.Title theme={BaseTheme} alignCenter>{`${quiz.correctAnswers} / ${quiz.totalCount}`}</Texts.Title>
      <ListResult theme={BaseTheme} data={quiz.quizzes} />
      <Buttons.Link theme={BaseTheme} alignCenter onPress={() => handlerContrller.goHome()}>PLAY AGAIN?</Buttons.Link>
     </PageWrapper>
  )
}
