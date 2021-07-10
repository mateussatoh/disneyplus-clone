import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { styles } from './styles';
import bannersData from '../../utils/banners';
import { FlatList } from 'react-native-gesture-handler';


export function Banners() {

  const renderBanners = ({item}) => {
    return (
      <ImageBackground
        source={item.image}
        style={[
          styles.bannerItem,
          { marginLeft: item.id === '1' ? 20 : 0},
        ]}
        imageStyle={styles.bannerImage}>
      </ImageBackground>
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
};