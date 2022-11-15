import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import color from '../../theme/colors';
import globalStyles from '../../theme/globalStyles';
import Sale from './Sale';
import styles from './style';

interface ProductProp {
  name: string;
  image: string;
  price: number;
//   voteNumber: number;
  sale?: JSX.Element;
}
const Product = (props: ProductProp) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.item]}
      onPress={() => navigation.navigate('Detail' as never)}>
      <Image
        source={{
          uri: `${props.image}`,
        }}
        style={styles.image}></Image>

      {props.sale}

      <View style={styles.content}>
        <Text style={styles.name}>{props.name}</Text>
        <View>
          <Text style={styles.price}>$ {props.price}</Text>
          <View style={[globalStyles.row, styles.voting]}>
            <FontAwesomeIcon color={color.white} icon={faStar} />
            <Text style={styles.voteNumber}>4</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Product;
