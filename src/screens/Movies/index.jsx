import React from "react";

import { View } from "react-native";

import { styles } from "./styles";

import { MovieCard } from "../../components/MovieCard";

export function Movies() {
  return (
    <View>
      <MovieCard />
    </View>
  );
}
