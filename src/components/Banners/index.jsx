import React from 'react';
import {
  View,
  Image,
  FlatList
} from 'react-native';
import { styles } from './styles';
import bannersData from '../../utils/banners';


export function Banners() {

  const renderBanners = ({item}) => {
    return (
      <Image
        source={item.image}
        style={[
          styles.bannerItem,
          { marginLeft: item.id === '1' ? 20 : 0},
        ]}>
      </Image>
    );
  };

  return (

    <View style={styles.banners}>
      <FlatList
        data={bannersData}
        renderItem={renderBanners}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}