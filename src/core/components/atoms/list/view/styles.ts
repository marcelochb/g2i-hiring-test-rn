import { ModelOfTheme } from "@src/core/themes";
import { StyleSheet } from "react-native";

export const styles = (theme: ModelOfTheme) => StyleSheet.create({
    container: { padding: theme.metrics.large}
  });
