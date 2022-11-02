import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, SettingsScreen} from '../../../App';
import Home from '../home';
import styles from './style';
import Profile from '../Profile';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faDropbox } from '@fortawesome/free-brands-svg-icons';
import Detail from '../Detail';
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
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
        component={Home}
        options={{
          tabBarIcon: ({focused, color}) => <FontAwesomeIcon icon={faHome} />,
        }}
      />
      <Tab.Screen
        name="Detail"
        component={Detail}
        options={{
          tabBarIcon: ({focused, color}) => (
            <FontAwesomeIcon
              icon={faDropbox}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
