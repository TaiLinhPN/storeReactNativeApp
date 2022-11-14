import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {
  blackColor,
  orangeColor,
  orangeColorShadow,
  primaryBtnColor,
  starColor,
  whiteColor,
} from '../../theme/colors';

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
  spaceBetween: {
    justifyContent: 'space-between',
  },
  flexStart: {
    justifyContent: 'flex-start',
  },
  productName: {
    fontSize: 22,
    fontWeight: '700',
    color: blackColor,
  },
  detailHeaderText: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 16,
    color: blackColor,
  },
  productPrice: {
    fontWeight: '700',
    color: blackColor,
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
    color: primaryBtnColor,
    paddingLeft: 10,
  },
  addToCartBtnPress: {
    backgroundColor: primaryBtnColor,
    borderRadius: 56,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 120,
    paddingRight: 120,
    shadowColor: primaryBtnColor,
    shadowOffset: {
      width: 1,
      height: 7,
    },
    shadowOpacity: 1,
    shadowRadius: 5,

    elevation: 8,
  },
  addToCartBtnText: {
    color: whiteColor,
    fontSize: 16,
    fontWeight: '700',
  },
  addToCartIcon: {
    color: primaryBtnColor,
  },
  choicePackage: {
    borderWidth: 1,
    borderColor: orangeColor,
    borderRadius: 6,
    backgroundColor: orangeColorShadow,
    padding: 10,
    // width: '30%',
    marginRight: 20,
  },
  packagePrice: {
    fontWeight: '700',
    color: orangeColor,
    marginBottom: 6,
  },
  packageQuantity: {
    color: orangeColor,
    marginBottom: 6,
  },
  colRating: {
    width: '35%',
    paddingRight: 10,
  },
  RatingNumber: {
    fontSize: 33,
    fontWeight: '600',
    color: blackColor,
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

  rating: {
    marginBottom: 18,
  },
  voteStar: {color: starColor},
  CusName: {
    fontWeight: '600',
  },
});

export default styles;
