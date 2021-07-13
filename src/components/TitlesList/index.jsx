import React from "react";

import { View, Text, FlatList } from "react-native";

import { styles } from "./styles";

import { MovieCard } from "../MovieCard";

export function TitlesList({ title, data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.list}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MovieCard id={item.id} image={item.image} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
