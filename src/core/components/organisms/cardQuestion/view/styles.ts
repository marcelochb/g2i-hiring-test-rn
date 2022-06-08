import { ModelOfTheme } from "@src/core/themes";
import { StyleSheet } from "react-native";

export const styles = (theme: ModelOfTheme) => {
  const {metrics} = theme;
  return StyleSheet.create({
    container: {
      padding: metrics.largest,
      marginBottom: metrics.large,
      marginHorizontal: metrics.base,
      paddingVertical: metrics.largest
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: metrics.largest
    }
  })
}
