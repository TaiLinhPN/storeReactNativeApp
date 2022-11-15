import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import color from '../../theme/colors';
import Product from './Product';
import Sale from './Sale';
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
  const [products, setProducts] = useState<Product[]>([initializeProduct]);
  useEffect(() => {
    fetch('https://61daee3c4593510017aff71b.mockapi.io/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <View style={[styles.container]}>
      {products.map((product, index) => {
        return (
          <Product
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
            sale={<Sale color={'#FFC618'} saleText={'Sale off'} />}
          />
        );
      })}
    </View>
  );
};

export default ProductCol;
