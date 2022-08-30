import { ModelOfTheme } from "@src/core/themes";
import { StyleSheet } from "react-native";

export const styles = (theme: ModelOfTheme) => StyleSheet.create({
    container: {
      padding: theme.metrics.largest,
      marginBottom: theme.metrics.large,
      marginHorizontal: theme.metrics.base,
      paddingVertical: theme.metrics.largest
    },
    buttonView: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: theme.metrics.largest
    },
    button: {flex: 1}
  });
