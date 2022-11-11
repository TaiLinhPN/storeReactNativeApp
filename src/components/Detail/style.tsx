import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  app: {
    margin: 20,
    height: '100%',
  },
  imgBanner: {
    display: 'flex',
    resizeMode: 'cover',
    justifyContent: 'center',
    borderRadius: 16,
    overflow: 'hidden',
    height: 200,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  col: {
    flexDirection: 'column',
  },
  addToCartBtn: {},
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
});

export default styles;
