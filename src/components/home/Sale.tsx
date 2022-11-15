import React from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import styles from './style';

interface SaleProp {
  saleText?: string;
  color?: '#FFC618' | '#FF5A5A';
}
const Sale = (props: SaleProp) => {
  return (
    <View style={[styles.saleContainer, {borderTopColor: props.color}]}>
      <Text style={styles.saleText}>{props.saleText}</Text>
    </View>
  );
};

export default Sale