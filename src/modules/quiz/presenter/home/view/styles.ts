import { ModelOfTheme } from "@src/core/themes";
import { StyleSheet } from "react-native";

export const styles = (theme: ModelOfTheme) => {
  const {metrics, colors} = theme;
  return StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: metrics.base,
      height: '100%',
      backgroundColor: colors.background
    }
  })
}
