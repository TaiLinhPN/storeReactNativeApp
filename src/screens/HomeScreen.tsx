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
import globalStyles from '../theme/globalStyles';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.app}>
      <ScrollView>
        <View style={styles.banner}>
          <ImageBackground
            source={{
              uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-fresh-literary-fruit-fresh-food-taobao-banner-image_173851.jpg',
            }}
            style={styles.imgBanner}/>
        </View>

        <Text style={styles.TextHeader}>Diabetes Care</Text>
        <ProductRow />

        <Text style={styles.TextHeader}>All products</Text>
        <ProductCol />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
