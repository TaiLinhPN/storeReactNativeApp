import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../home';
import styles from './style';
import Profile from '../Profile';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import {faDropbox} from '@fortawesome/free-brands-svg-icons';
import Detail from '../Detail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = createStackNavigator();

const  HomeStackScreen = () => {
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
const MyTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'blue',
        }}>
        <Tab.Screen
          name="My Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused, color}) => <FontAwesomeIcon icon={faUser} />,
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({focused, color}) => <FontAwesomeIcon icon={faHome} />,
          }}
        />
        {/* <Tab.Screen
          name="Detail"
          component={Detail}
          options={{
            tabBarIcon: ({focused, color}) => (
              <FontAwesomeIcon icon={faDropbox} />
            ),
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MyTabs;
