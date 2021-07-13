import { StyleSheet } from "react-native";
import { themes } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },

  title: {
    marginHorizontal: 20,
    fontFamily: themes.fonts.bold,
    fontSize: 14,
    color: themes.colors.highlight,
  },

  list: {
    paddingVertical: 7,
  },
});
