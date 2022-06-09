import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { ModelOfList } from '../model'
import { styles } from './styles'

export const List: React.FC<ModelOfList> = ({
  data,
  item,
  style,
  theme
}) =>  {
  return (
    <View style={style}>
      <FlatList
        contentContainerStyle={styles(theme).container}
        data={data}
        keyExtractor={() => Math.random().toString()}
        renderItem={item}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
