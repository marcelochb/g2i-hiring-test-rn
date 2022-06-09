import { ModelOfTheme } from "@src/core/themes"
import { IQuizReducer } from "@src/modules/quiz/presenter";
import { ListRenderItem, StyleProp, ViewStyle } from "react-native";

export type ModelOfList<ItemT = IQuizReducer> = {
  theme: ModelOfTheme,
  data?: Array<ItemT>;
  item: ListRenderItem<ItemT> | null | undefined,
  style?: StyleProp<ViewStyle>,
}
