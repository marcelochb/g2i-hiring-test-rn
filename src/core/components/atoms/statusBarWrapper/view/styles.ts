/* istanbul ignore file */
import { ModelOfTheme } from "@src/core/themes";
import { StyleSheet } from "react-native";

export const styles = (theme: ModelOfTheme) => StyleSheet.create({
    container: {
      flex: 0,
      backgroundColor: theme.colors.background
    }
  });
