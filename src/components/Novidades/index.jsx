import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import novidadesData from '../../utils/novidades';
import { themes } from "../../themes";
import { styles } from "../../globalStyles";
import { FlatList } from 'react-native-gesture-handler';


export function Novidades() {

  const renderNovidades = ({item}) => {
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
