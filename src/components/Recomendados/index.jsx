import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import recomendadosData from '../../utils/recomendados';
import { themes } from "../../themes";
import { styles } from "../../globalStyles";
import { FlatList } from 'react-native-gesture-handler';


export function Recomendados() {

  const renderRecomendados = ({item}) => {
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
    <Text style={styles.moviesTitle}>Recomendado para Você</Text>
    <View style={styles.moviesItemsContainer}>
      <FlatList
        data={recomendadosData}
        renderItem={renderRecomendados}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  </View>
  );
};
