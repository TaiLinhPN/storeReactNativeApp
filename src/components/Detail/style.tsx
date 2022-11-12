import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';

export const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
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
  productName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },
  detailHeaderText: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 16,
    color: '#000',
  },
  productPrice: {
    fontWeight: '700',
    color: '#000',
  },
  productSub: {
    marginTop: 4,
    marginBottom: 18,
    fontSize: 14,
  },
  imgBanner: {
    display: 'flex',
    resizeMode: 'cover',
    justifyContent: 'center',
    borderRadius: 16,
    overflow: 'hidden',
    height: 200,
    marginBottom: 26,
  },
  addToCartBtn: {
    color: 'rgba(0, 106, 255, 1)',
    paddingLeft: 10,
  },
  addToCartIcon: {
    color: 'rgba(0, 106, 255, 1)',
  },
  choicePackage: {
    borderWidth: 1,
    borderColor: '#FFA41B',
    borderRadius: 6,
    backgroundColor: 'rgba(255, 164, 27, 0.05)',
    padding: 10,
    // width: '30%',
    marginRight: 20,
  },
  packagePrice: {
    fontWeight: '700',
    color: '#FFA41B',
    marginBottom: 6,
  },
  packageQuantity: {
    color: '#FFA41B',
    marginBottom: 6,
  },
  colRating: {
    width: '35%',
    paddingRight: 10,
  },
  RatingNumber: {
    fontSize: 33,
    fontWeight: '600',
    color: '#000',
  },
  voteChart: {
    height: 3,
    width: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  fillVote: {
    backgroundColor: 'rgba(65, 87, 255, 1)',
    height: 3,
  },
  separationLine: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  flexStart: {
    justifyContent: 'flex-start',
  },
  rating:{
    marginBottom: 18,
  },
  voteStar: {color: 'rgba(255, 192, 0, 1)'},
  CusName: {
    fontWeight: '600',
  },
});

export default styles;
