import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Texts } from '@src/core/components/atoms'
import { ModelOfButtons } from '../model'
import { styles } from './styles'

const Link: React.FC<ModelOfButtons> = ({ children, theme, style, alignCenter, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[
      styles(theme).link,
      alignCenter
        ? styles(theme).center
        : {},
      style
    ]}>
      <Texts.Body theme={theme}>{children}</Texts.Body>
    </TouchableOpacity>
  )
}


export const Buttons = {Link}
