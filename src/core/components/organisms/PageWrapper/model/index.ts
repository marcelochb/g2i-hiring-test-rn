import { ModelOfTheme } from "@src/core/themes"

export type ModelOfPageWrapper = {
  theme: ModelOfTheme,
  loading?: boolean,
  isScrollList?: boolean,
  empty?: boolean,
  error?: boolean,
}
