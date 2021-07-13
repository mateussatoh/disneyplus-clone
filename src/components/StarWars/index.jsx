import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList
} from 'react-native';
import starWarsData from '../../utils/starWars';
import { styles } from "../../globalStyles";


export function StarWars() {

  const renderStarWars = ({item}) => {
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
    <Text style={styles.moviesTitle}>Série Star Wars</Text>
    <View style={styles.moviesItemsContainer}>
      <FlatList
        data={starWarsData}
        renderItem={renderStarWars}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  </View>
  );
}