import { ModelOfTheme } from "@src/core/themes"
import { StyleProp, ViewStyle } from "react-native"

export type ModelOfCard = {
  theme: ModelOfTheme,
  style?: StyleProp<ViewStyle>,
}
