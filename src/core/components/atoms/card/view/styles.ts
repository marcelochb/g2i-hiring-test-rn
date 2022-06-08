import { ModelOfTheme } from "@src/core/themes";
import { StyleSheet } from "react-native";

export const styles = (theme:ModelOfTheme) => {
  const {colors, metrics} = theme;
  return StyleSheet.create({
    container: {
      borderColor: colors.elements,
      borderWidth: metrics.borderWidth,
      backgroundColor: colors.background,
      padding: metrics.large,
    }
  })
}
