import {createStackNavigator} from '@react-navigation/stack';
import react from 'react';
import Detail from '../Detail';
import Home from '../home';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false, // change this to `false`
        }}
      />
      <HomeStack.Screen name="Detail" component={Detail} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;