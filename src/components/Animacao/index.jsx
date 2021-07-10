import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import animacaoData from '../../utils/animacao';
import { themes } from "../../themes";
import { styles } from "../../globalStyles";
import { FlatList } from 'react-native-gesture-handler';


export function Animacao() {

  const renderAnimacao = ({item}) => {
    return (
      <ImageBackground
        source={item.image}
        style={[
          styles.moviesItem,
          { marginLeft: item.id === '1' ? 20 : 0},
        ]}
        imageStyle={styles.moviesImage}>
      </ImageBackground>
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

