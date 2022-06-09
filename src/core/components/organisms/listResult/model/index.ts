import { ModelOfTheme } from "@src/core/themes"
import { IQuizReducer } from "@src/modules/quiz/presenter";

export type ModelOfListResult<ItemT = IQuizReducer> = {
  theme: ModelOfTheme,
  data: Array<ItemT>;
}
