import React, {useEffect, useState} from 'react';
import { ScrollView, View} from 'react-native';
import globalStyles from '../../theme/globalStyles';
import FeaturedProduct from './FeaturedProduct';
import {ProductProp} from './Product';

const ProductRow = () => {

  const initializeProduct: ProductProp = {
    id: 0,
    name: '',
    image: 'https://picsum.photos/400?image=261',
    price: 0,
    rating: 0,
  };

  const [products, setProducts] = useState<ProductProp[]>([initializeProduct]);
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
            <FeaturedProduct
              key={product.id}
              name={product.name}
              image={product.image}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ProductRow;
