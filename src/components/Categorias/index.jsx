import React from 'react';
import {
  View,
  Image,
  FlatList
} from 'react-native';
import categoriasData from '../../utils/categorias';
import { styles } from './styles';


export function Categorias() {

  const renderCategorias = ({item}) => {
    return (
      <Image
        source={item.image}
        style={[
          styles.categoriasItem,
          { marginLeft: item.id === '1' ? 20 : 0},
        ]}>
      </Image>
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
}