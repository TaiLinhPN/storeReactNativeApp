import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import globalStyles from '../../theme/globalStyles';
import styles from './style';
const ProductRow = () => {
  interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    rating: number;
  }
  const initializeProduct: Product = {
    id: 1,
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
            <View style={styles.featuredProducts} key={product.id}>
              <Image
                source={{
                  uri: `${product.image}`,
                }}
                style={styles.imgItem}></Image>
              <Text>{product.name}</Text>
              <Text>{product.price}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ProductRow;
