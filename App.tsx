import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyTabs from './src/components/TabBar';

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;