import { StyleSheet } from "react-native";

import { themes } from "../../themes";

export const styles = StyleSheet.create({
  button: {
    width: 340,
    height: 45,

    borderRadius: 6,

    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: themes.colors.heading,
  },
});
