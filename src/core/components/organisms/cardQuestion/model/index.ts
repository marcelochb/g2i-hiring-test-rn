import { ModelOfTheme } from "@src/core/themes"

export type ModelOfCardQuestion = {
  theme: ModelOfTheme,
  label: string,
  onPressTrue: () => void,
  onPressFalse: () => void,
}
