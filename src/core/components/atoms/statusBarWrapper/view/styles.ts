import { ModelOfTheme } from "@src/core/themes";
import { StyleSheet } from "react-native";

export const styles = (theme: ModelOfTheme) =>{
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      flex: 0,
      backgroundColor: colors.background
    }
  })
}
