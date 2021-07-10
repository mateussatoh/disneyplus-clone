import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import categoriasData from '../../utils/categorias';
import { FlatList } from 'react-native-gesture-handler';
import { themes } from "../../themes";
import { styles } from './styles';


export function Categorias() {

  const renderCategorias = ({item}) => {
    return (
      <ImageBackground
        source={item.image}
        style={[
          styles.categoriasItem,
          { marginLeft: item.id === '1' ? 20 : 0},
        ]}
        imageStyle={styles.categoriasImage}>
      </ImageBackground>
    );
  };

  return (

    <View style={styles.categorias}>
      <FlatList
        data={categoriasData}
        renderItem={renderCategorias}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

