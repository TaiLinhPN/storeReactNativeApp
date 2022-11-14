import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';

export const windowWidth = Dimensions.get('window').width;
const globalStyles = StyleSheet.create({
  //  app: {
  //   margin: 20,
  //   height: '100%',
  // },
  // row: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // col: {
  //   flexDirection: 'column',
  // },
  // spaceBetween: {
  //   justifyContent: 'space-between',
  // },
  // flexStart: {
  //   justifyContent: 'flex-start',
  // },

   app: {
    margin: 20,
    height: '100%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  col: {
    flexDirection: 'column',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  flexStart: {
    justifyContent: 'flex-start',
  },
  
});

export default globalStyles;
