import {StyleSheet} from 'react-native';
import color from '../../theme/colors';

const styles = StyleSheet.create({
  banner: {
    height: 150,
  },
  imgBanner: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    borderRadius: 16,
    overflow: 'hidden',
  },
  TextHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 25,
    color: color.primaryText,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  //   featured products: {
  featuredItem: {
    marginRight: 10,
    width: '25%',
    height: 'auto',
    backgroundColor: '#F5F7FA',
    borderRadius: 10,
    overflow: 'hidden',
  },
  featuredImg: {
    height: 100,
  },
  featuredName: {
    padding: 17,
    fontSize: 13,
    color: color.primaryText,
  },

  // All Products
  item: {
    width: '50%',
    height: 'auto',
    borderWidth: 1,
    borderColor: '#EBEBEB',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    height: 158,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  content: {
    padding: 16,
    paddingBottom: 24,
  },
  name: {
    color: color.primaryText,
  },
  price: {
    color: color.primaryText,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
  },
  voting: {
    position: 'absolute',
    top: 8,
    right: -16,
    backgroundColor: '#FFC000',
    padding: 5,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  voteNumber: {
    color: color.white,
    fontSize: 13,
    fontWeight: '700',
    paddingLeft: 6,
  },

  saleContainer: {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    borderTopWidth: 58,
    borderRightWidth: 58,
    borderTopColor: 'red',
    borderRightColor: 'transparent',
  },
  saleText: {
    position: 'absolute',
    color: color.white,
    top: -52,
    transform: [{rotate: '-45deg'}],
  },
});

export default styles;
