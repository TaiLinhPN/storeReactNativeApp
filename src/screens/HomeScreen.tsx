import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Button,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import ProductCol from '../components/home/ProductCol';
import ProductRow from '../components/home/ProductRow';
import styles from '../components/home/style';
const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.app}>
      <View style={styles.banner}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Detail' as never)}
        />
        <Text style={styles.TextHeader}>Diabetes Care</Text>
        <ImageBackground
          source={{
            uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-fresh-literary-fruit-fresh-food-taobao-banner-image_173851.jpg',
          }}
          style={styles.imgBanner}></ImageBackground>
      </View>

      <Text style={styles.TextHeader}>All products</Text>
      <ProductRow></ProductRow>
      <ProductCol></ProductCol>
    </View>
  );
};

export default HomeScreen;

