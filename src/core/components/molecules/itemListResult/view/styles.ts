import { ModelOfTheme } from "@src/core/themes";
import { StyleSheet } from "react-native";

export const styles = (theme: ModelOfTheme) => StyleSheet.create({
    container: {flexDirection: 'row'},
    question: {marginBottom: theme.metrics.large, marginLeft: theme.metrics.base}
  });
