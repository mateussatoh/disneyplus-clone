import React from "react";

import { Image } from "react-native";

import { styles } from "./styles";

export function MovieCard({ image, id }) {
  return (
    <Image
      source={image}
      style={[styles.container, { marginLeft: id === "1" ? 20 : 0 }]}
    ></Image>
  );
}
