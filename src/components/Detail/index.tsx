import {faSquarePlus} from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './style';
const Detail = ({navigation}: any) => {
  return (
    <View style={styles.app}>
      <Text>Product name</Text>
      <Text>Product subtitle</Text>
      <ImageBackground
        source={{
          uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-fresh-literary-fruit-fresh-food-taobao-banner-image_173851.jpg',
        }}
        style={styles.imgBanner}></ImageBackground>

      <View style={[styles.row]}>
        <View style={styles.col}>
          <Text>$56</Text>
          <Text>Etiam mollis</Text>
        </View>

        <View style={[styles.row, {justifyContent:'space-between'}]}>
          <FontAwesomeIcon icon={faSquarePlus} />
          <Text style={[styles.col, styles.addToCartBtn]}>Add to cart</Text>
        </View>
      </View>

      <Text>Package size</Text>
      <View style={[styles.row, {justifyContent: 'flex-start'}]}>
        <ScrollView horizontal={true}>
          <View style={styles.choicePackage}>
            <Text style={styles.packagePrice}>$106</Text>
            <Text style={styles.packageQuantity}>500 pellets</Text>
          </View>

          <View style={styles.choicePackage}>
            <Text style={styles.packagePrice}>$106</Text>
            <Text style={styles.packageQuantity}>500 pellets</Text>
          </View>

          <View style={styles.choicePackage}>
            <Text style={styles.packagePrice}>$106</Text>
            <Text style={styles.packageQuantity}>500 pellets</Text>
          </View>
        </ScrollView>
      </View>

      <Text>Product details</Text>
      <Text>
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ut
        nisi odio. Nulla facilisi. Nunc risus massa, gravida id egestas a,
        pretium vel tellus. Praesent feugiat diam sit amet pulvinar finibus.
        Etiam et nisi aliquet, accumsan nisi sit.
      </Text>

      <Text>Rating and Reviews</Text>
      <View style={styles.row}>
        <View style={styles.col}>
          <View style={styles.row}>
            <Text>4.4</Text>
            <FontAwesomeIcon icon={faStar} />
          </View>
          <Text>923 Ratings and 257 Reviews</Text>
        </View>
      </View>
    </View>
  );
};

export default Detail;
