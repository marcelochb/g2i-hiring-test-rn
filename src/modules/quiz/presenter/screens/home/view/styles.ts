import { ModelOfTheme } from "@src/core/themes";
import { StyleSheet } from "react-native";

export const styles = (theme: ModelOfTheme) => StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: theme.metrics.base,
      height: '100%',
    }
  });
