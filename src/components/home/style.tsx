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
    color: color.black,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  
  item: {
    padding: 5,
    width: '50%',
    height: 200,
  },
  featuredProducts: {
    padding: 5,
    width: 200,
    height: 200,
  },
  imgItem: {
    height: 200,
  },
});

export default styles;
