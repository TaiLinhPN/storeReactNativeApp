import {faSquarePlus} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {CustomText} from '../components/core/StyledText';
import Rating from '../components/Detail/Rating';
import styles from '../components/Detail/style';

const onPressAddToCar = () => {
  console.log("go to cart");
  
};
const DetailScreen = () => {
  return (
    <ScrollView>
      <View style={styles.app}>
        <Text style={styles.productName}>Product name</Text>
        <Text style={styles.productSub}>Product subtitle</Text>
        <ImageBackground
          source={{
            uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-fresh-literary-fruit-fresh-food-taobao-banner-image_173851.jpg',
          }}
          style={styles.imgBanner}></ImageBackground>

        <View style={[styles.row, styles.spaceBetween]}>
          <View style={styles.col}>
            <Text style={styles.productPrice}>$56</Text>
            <Text style={styles.productSub}>Etiam mollis</Text>
          </View>

          <Pressable
            onPress={onPressAddToCar}
            // style={[styles.row, styles.addToCartBtn]}
            style={({pressed}) => [
              {
                // backgroundColor: pressed ? 'rgb(210, 230, 255)' :'white',
                // color: pressed ? 'white' : 'rgba(0, 106, 255, 1)',
              },
              styles.addToCartBtn,
              styles.row,
            ]}>
            <FontAwesomeIcon icon={faSquarePlus} style={styles.addToCartIcon} />
            <Text style={[styles.col, styles.addToCartBtn]}>Add to cart</Text>
          </Pressable>
        </View>
        <View
          style={[styles.separationLine, {height: 1, width: '100%'}]}></View>

        <Text style={styles.detailHeaderText}>Package size</Text>
        <View style={[styles.row, styles.flexStart]}>
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

        <Text style={styles.detailHeaderText}>Product details</Text>
        <Text>
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ut
          nisi odio. Nulla facilisi. Nunc risus massa, gravida id egestas a,
          pretium vel tellus. Praesent feugiat diam sit amet pulvinar finibus.
          Etiam et nisi aliquet, accumsan nisi sit.
        </Text>

        <Rating />
      </View>
    </ScrollView>
  );
};

export default DetailScreen;
