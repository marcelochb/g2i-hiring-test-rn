import { ModelOfTheme } from "@src/core/themes"
import { StyleProp, ViewStyle } from "react-native";

export type ModelOfButtons = {
  theme: ModelOfTheme,
  onPress: () => void,
  style?: StyleProp<ViewStyle>;
  alignCenter?: boolean,
}
