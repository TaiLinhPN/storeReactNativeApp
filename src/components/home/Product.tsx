import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import color from '../../theme/colors';
import globalStyles from '../../theme/globalStyles';
import Sale from './Sale';
import styles from './style';

export interface ProductProp {
  id?: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  sale?: JSX.Element;
  new?: boolean;
}
const Product = (props: ProductProp) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.item]}
      onPress={() =>
        navigation.navigate(
          'Detail' as never,
          // {id: props.id, name: props.name}
        )
      }>
      <Image
        source={{
          uri: `${props.image}`,
        }}
        style={styles.image}></Image>

      {props.sale}

      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.name}>
          {props.name}
        </Text>
        <View>
          <Text style={styles.price}>$ {props.price}</Text>
          <View style={[globalStyles.row, styles.voting]}>
            <FontAwesomeIcon color={color.white} icon={faStar} />
            <Text style={styles.voteNumber}>{props.rating}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Product;
