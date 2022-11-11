import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from './style';
import Profile from '../Profile';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStackScreen} from '../Stack';
import Detail from '../Detail';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'blue',
        }}>
        <Tab.Screen
          name="Detail"
          component={Detail}
          options={{
            tabBarIcon: ({focused, color}) => <FontAwesomeIcon icon={faHome} />,
          }}
        />
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
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MyTabs;
