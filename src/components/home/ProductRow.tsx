import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
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
    <ScrollView horizontal={true}>
      <View style={styles.containerRow}>
        <View style={styles.itemRow}>
          <Image
            source={{
              uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-fresh-literary-fruit-fresh-food-taobao-banner-image_173851.jpg',
            }}
            style={styles.imgItem}></Image>
          <Text>Táo Trung quả</Text>
          <Text>priec 200</Text>
        </View>

        {products.map((product) => {
          return (
            <View style={styles.itemRow} key={product.id}>
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
      </View>
    </ScrollView>
  );
};

export default ProductRow;
