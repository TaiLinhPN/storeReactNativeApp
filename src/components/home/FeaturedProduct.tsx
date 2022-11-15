import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Pressable, Text } from 'react-native';
import { ProductProp } from './Product';

import styles from './style';

interface FeaturedProductProp extends Omit<ProductProp, 'rating' | 'price'> {}

const FeaturedProduct = (props: FeaturedProductProp) => {
  const navigation = useNavigation();
  

  return (
    <Pressable
      onPress={() => navigation.navigate('Detail' as never)}
      style={styles.featuredItem}
      key={props.id}>
      <Image
        source={{
          uri: `${props.image}`,
        }}
        style={styles.featuredImg}></Image>
      <Text numberOfLines={2} style={styles.featuredName}>
        {props.name}
      </Text>
    </Pressable>
  );
};

export default FeaturedProduct