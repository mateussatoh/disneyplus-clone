import { StyleSheet } from "react-native";

import { themes } from "../../themes";

export const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 550,
    marginBottom: "auto",
  },
  footer: {
    height: "15%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  pricing: {
    color: themes.colors.highlight,
    width: 300,
  },
});
