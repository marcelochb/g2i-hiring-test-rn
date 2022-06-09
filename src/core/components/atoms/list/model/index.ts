import { ModelOfTheme } from "@src/core/themes"
import { ListRenderItem, StyleProp, ViewStyle } from "react-native";

export type ModelOfList<ItemT = any> = {
  theme: ModelOfTheme,
  data?: Array<ItemT>;
  item: ListRenderItem<ItemT> | null | undefined,
  style?: StyleProp<ViewStyle>,
}
