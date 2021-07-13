import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList
} from 'react-native';
import novidadesData from '../../utils/novidades';
import { themes } from "../../themes";
import { styles } from "../../globalStyles";


export function Novidades() {

  const renderNovidades = ({item}) => {
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
    <Text style={styles.moviesTitle}>Novidades no Disney+</Text>
    <View style={styles.moviesItemsContainer}>
      <FlatList
        data={novidadesData}
        renderItem={renderNovidades}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  </View>
  );
};
