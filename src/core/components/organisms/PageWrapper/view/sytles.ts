import { ModelOfTheme } from "@src/core/themes";
import { StyleSheet } from "react-native";

export const styles = (theme: ModelOfTheme) => StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
    },
    content: {
      flex: 1,
      padding: theme.metrics.base
    },
    scrollView: {
      backgroundColor: theme.colors.background,
      flex: 1,
      paddingHorizontal: theme.metrics.base
    },
    loading: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    button: {
      marginTop: theme.metrics.largest
    },
    error: {marginBottom: theme.metrics.largest}
  });
