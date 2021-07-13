import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList
} from 'react-native';
import animacaoData from '../../utils/animacao';
import { themes } from "../../themes";
import { styles } from "../../globalStyles";


export function Animacao() {

  const renderAnimacao = ({item}) => {
    return (
      <Image
        source={item.image}
        style={[
          styles.moviesItem,
          { marginLeft: item.id === '1' ? 20 : 0},
        ]}>
      </Image>
    );
  };

  return (

    <View style={styles.moviesContainer}>
    <Text style={styles.moviesTitle}>Filmes de animação</Text>
    <View style={styles.moviesItemsContainer}>
      <FlatList
        data={animacaoData}
        renderItem={renderAnimacao}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  </View>
  );
};

