import react from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { HomeScreen } from '../../screens';
import DetailScreen from '../../screens/DetailScreen';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen name="Detail" component={DetailScreen} />
    </HomeStack.Navigator>
  );
};

export {HomeStackScreen};
