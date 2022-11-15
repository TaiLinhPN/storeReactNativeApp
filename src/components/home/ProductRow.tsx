import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import globalStyles from '../../theme/globalStyles';
import styles from './style';
const ProductRow = () => {
  const navigation = useNavigation();

  interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    rating: number;
  }
  const initializeProduct: Product = {
    id: 0,
    name: '',
    image: 'https://picsum.photos/400?image=261',
    price: 0,
    rating: 0,
  };

  const [products, setProducts] = useState<Product[]>([initializeProduct]);
  useEffect(() => {
    fetch('https://61daee3c4593510017aff71b.mockapi.io/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);
  return (
    <View style={globalStyles.row}>
      <ScrollView horizontal={true}>
        {products.map(product => {
          return (
            <Pressable
              onPress={() => navigation.navigate('Detail' as never)}
              style={styles.featuredItem}
              key={product.id}>
              <Image
                source={{
                  uri: `${product.image}`,
                }}
                style={styles.featuredImg}></Image>
              <Text style={styles.featuredName}>{product.name}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ProductRow;
