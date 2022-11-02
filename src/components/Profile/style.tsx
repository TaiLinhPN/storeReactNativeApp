import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  app: {
    marginTop: 30,
    margin: 20,
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  listOption: {},
  option: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  optionText: {
    marginLeft: 10,
    color: "blue"
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
    fontWeight: 'bold',
  },
});

export default styles;
