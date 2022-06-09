import { ModelOfTheme } from "@src/core/themes"

export type ModelOfItemListResult = {
  theme: ModelOfTheme,
  isCorrectAnswer: boolean,
  isWrongAnswer: boolean,
  question: string,
}
