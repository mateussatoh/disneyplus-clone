import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import starWarsData from '../../utils/starWars';
import { themes } from "../../themes";
import { styles } from "../../globalStyles";
import { FlatList } from 'react-native-gesture-handler';


export function StarWars() {

  const renderStarWars = ({item}) => {
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
};

