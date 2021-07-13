import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList
} from 'react-native';
import recomendadosData from '../../utils/recomendados';
import { styles } from "../../globalStyles";


export function Recomendados() {

  const renderRecomendados = ({item}) => {
    return (
      <Image
        source={item.image}
        style={[
          styles.moviesItem,
          { marginLeft: item.id === '1' ? 20 : 0},
        ]}
        imageStyle={styles.moviesImage}>
      </Image>
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
}