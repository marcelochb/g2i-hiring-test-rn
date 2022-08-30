import { ModelOfTheme } from "@src/core/themes";
import { StyleSheet } from "react-native";

export const styles = (theme: ModelOfTheme) => StyleSheet.create({
    link: {
      height: theme.metrics.buttonHeight,
      width: theme.metrics.buttonWidth,
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
