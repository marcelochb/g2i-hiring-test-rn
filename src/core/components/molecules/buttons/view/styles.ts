import { ModelOfTheme } from "@src/core/themes";
import { StyleSheet } from "react-native";

export const styles = (theme: ModelOfTheme) => {
  const {metrics} = theme;
  return StyleSheet.create({
    link: {
      height: metrics.buttonHeight,
      width: metrics.buttonWidth,
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    }
  })
}
