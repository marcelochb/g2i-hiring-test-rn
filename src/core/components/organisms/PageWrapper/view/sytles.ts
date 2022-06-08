import { ModelOfTheme } from "@src/core/themes";
import { StyleSheet } from "react-native";

export const styles = (theme: ModelOfTheme) => {
  const {colors, metrics} = theme;
  return StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
    },
    content: {
      flex: 1,
      padding: metrics.base
    },
    scrollView: {
      backgroundColor: colors.background,
      flex: 1,
      paddingHorizontal: metrics.base
    },
    loading: {
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
}
