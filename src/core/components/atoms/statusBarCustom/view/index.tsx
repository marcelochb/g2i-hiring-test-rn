import { StatusBar } from 'react-native'
import React from 'react'
import { ModelOfStatusBarCustom } from '../model'

export const StatusBarCustom: React.FC<ModelOfStatusBarCustom> = ({theme}) => {
  return (
    <StatusBar
      backgroundColor={theme.colors.background}
      barStyle={'dark-content'}
    />
  )
}
