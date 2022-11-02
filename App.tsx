import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyTabs from './src/components/TabBar';

 export const HomeScreen = () => {
  return (
    <></>
  );
}

export const SettingsScreen = () => {
  return (
    <></>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;