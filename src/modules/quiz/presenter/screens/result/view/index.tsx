import { Text } from 'react-native'
import React from 'react'
import { PageWrapper, Texts } from '@src/core/components'
import { BaseTheme } from '@src/core/themes'

export const Result = () => {
  return (
    <PageWrapper theme={BaseTheme}>
      <Texts.Title theme={BaseTheme} alignCenter>You scored</Texts.Title>
    </PageWrapper>
  )
}
