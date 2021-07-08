import { StyleSheet } from "react-native";

import { themes } from "../../themes";

export const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "80%",
  },
  footer: {
    width: "100%",
    height: "20%",
    alignItems: "center",
  },
  pricing: {
    color: themes.colors.highlight,
  },
});
