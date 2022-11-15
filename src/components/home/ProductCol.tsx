import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Button, Image, Pressable, ScrollView, Text, View} from 'react-native';
import color from '../../theme/colors';
import globalStyles from '../../theme/globalStyles';
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
  const navigation = useNavigation();

  const [products, setProducts] = useState<Product[]>([initializeProduct]);
  useEffect(() => {
    fetch('https://61daee3c4593510017aff71b.mockapi.io/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <View style={styles.container}>
      {products.map(product => {
        return (
          <Pressable
            key={product.id}
            style={styles.item}
            onPress={() => navigation.navigate('Detail' as never)}>
            <Image
              source={{
                uri: `${product.image}`,
              }}
              style={styles.image}></Image>
            <View style={styles.saleContainer}>
              <Text style={styles.saleText}>sale</Text>
            </View>

            <View style={styles.content}>
              <Text style={styles.name}>{product.name}</Text>
              <View>
                <Text style={styles.price}>$ {product.price}</Text>
                <View style={[globalStyles.row, styles.voting]}>
                  <FontAwesomeIcon color={color.white} icon={faStar} />
                  <Text style={styles.voteNumber}>4.2</Text>
                </View>
              </View>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default ProductCol;
