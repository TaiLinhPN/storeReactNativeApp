import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Button, Image, ScrollView, Text, View} from 'react-native';
import styles from './style';

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
const ProductCol = () => {
  
  const navigation = useNavigation()

  const [products, setProducts] = useState<Product[]>([initializeProduct]);
  useEffect(() => {
    fetch('https://61daee3c4593510017aff71b.mockapi.io/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {products.map((product) => {
          return (
            <View style={styles.item} key={product.id}>
              <Image
                source={{
                  uri: `${product.image}`,
                }}
                style={styles.imgBanner}></Image>
              <Text>{product.name}</Text>
              <Text>{product.price}</Text>
              <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Detail' as never)}
              />
            </View>
          );
        })}

        
      </View>
    </ScrollView>
  );
};

export default ProductCol;
