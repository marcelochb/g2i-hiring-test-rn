import { ModelOfTheme } from "@src/core/themes";
import { StyleSheet } from "react-native";

export const styles = (theme: ModelOfTheme) => {
  const {metrics} = theme;
  return StyleSheet.create({
    container: {flexDirection: 'row'},
    question: {marginBottom: metrics.large, marginLeft: metrics.base}
  })
}
