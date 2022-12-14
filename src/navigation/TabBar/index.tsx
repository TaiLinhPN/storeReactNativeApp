import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStackScreen} from '../Stack';
import DetailScreen from '../../screens/DetailScreen';
import ProfileScreen from '../../screens/ProfileScreen';


const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'blue',
        }}>
        {/* <Tab.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            tabBarIcon: ({focused, color}) => <FontAwesomeIcon icon={faHome} />,
          }}
        /> */}
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({focused, color}) => <FontAwesomeIcon icon={faHome} />,
          }}
        />
        <Tab.Screen
          name="My Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused, color}) => <FontAwesomeIcon icon={faUser} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MyTabs;
