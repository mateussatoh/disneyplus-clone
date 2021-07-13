import React from "react";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

import { themes } from "../../themes";

export function Button({ message, transparent }) {
  const Navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[
        styles.button,
        transparent
          ? { backgroundColor: themes.colors.background }
          : { backgroundColor: themes.colors.lightBlue },
      ]}
      onPress={() => {Navigation.navigate('Movies')}}
    >
      <Text style={styles.text}>{message}</Text>
    </TouchableOpacity>
  );
}