import { ModelOfTheme } from "@src/core/themes";
import { StyleSheet } from "react-native";

export const styles = (theme:ModelOfTheme) => StyleSheet.create({
    container: {
      borderColor: theme.colors.elements,
      borderWidth: theme.metrics.borderWidth,
      backgroundColor: theme.colors.background,
      padding: theme.metrics.large,
    }
  });
