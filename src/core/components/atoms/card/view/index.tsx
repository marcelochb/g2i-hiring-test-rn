import { View, Text } from 'react-native'
import React from 'react'
import { ModelOfCard } from '../model'
import { styles } from './styles'

export const Card: React.FC<ModelOfCard> = ({children, theme, style}) => {
  return (
    <View style={[styles(theme).container, style]}>
      {children}
    </View>
  )
}
