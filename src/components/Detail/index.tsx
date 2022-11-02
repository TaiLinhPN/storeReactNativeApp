import React from 'react'
import { ImageBackground, Text, View } from 'react-native';

const Detail = ({navigation}: any) => {
  return (
    <View>
      <Text>Detail page</Text>
      <ImageBackground
        source={{
          uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-fresh-literary-fruit-fresh-food-taobao-banner-image_173851.jpg',
        }}></ImageBackground>
    </View>
  );
};

export default Detail;