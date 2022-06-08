import { ModelOfTheme } from "@src/core/themes"

export type ModelOfPageWrapper = {
  theme: ModelOfTheme,
  loading?: boolean,
  isScrollList?: boolean,
}
