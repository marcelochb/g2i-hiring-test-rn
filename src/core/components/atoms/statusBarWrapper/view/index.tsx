import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { ModelOfStatusBarWrapper } from '../model'
import { styles } from './styles'

export const StatusBarWrapper: React.FC<ModelOfStatusBarWrapper> = ({theme}) => {
  return (
    <SafeAreaView style={styles(theme).container} />
  )
}
