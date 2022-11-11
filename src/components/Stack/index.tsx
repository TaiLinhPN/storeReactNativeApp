import react from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Detail from '../Detail';
import Home from '../home';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeStack"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen name="Detail" component={Detail} />
    </HomeStack.Navigator>
  );
};

export {HomeStackScreen};
