import {StyleSheet} from 'react-native';
import Color from '../../theme/colors';

const styles = StyleSheet.create({
  user: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headText: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 26,
    color: Color.black,
  },

  listOption: {},
  option: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: 'rgba(0, 0, 0,0.1)',
  },
  optionText: {
    marginLeft: 10,
    color: Color.textList,
    paddingTop: 16,
    paddingBottom: 16,
  },
  imgUser: {
    flex: 1,
    borderRadius: 100,
  },
  imgUserContainer: {
    padding: 5,
    marginRight: 8,
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: 'rgb(255, 255, 255)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 17,
  },
  welcomeText: {},
  userName: {
    fontWeight: '700',
    fontSize: 20,
    color: Color.black,
  },
});

export default styles;
