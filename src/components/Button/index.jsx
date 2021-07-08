import React from "react";

import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

import { themes } from "../../themes";

export function Button({ message, transparent }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        transparent
          ? { backgroundColor: themes.colors.background }
          : { backgroundColor: themes.colors.lightBlue },
      ]}
      onPress={() => {}}
    >
      <Text style={styles.text}>{message}</Text>
    </TouchableOpacity>
  );
}
