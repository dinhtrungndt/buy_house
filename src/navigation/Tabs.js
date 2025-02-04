import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/Home';
import Icon from 'react-native-vector-icons/Ionicons';
import FavoriteScreen from '../screens/Favorite';
import NotifiScreen from '../screens/Notification';
import AccountScreen from '../screens/Account';
import {moderateScale} from 'react-native-size-matters';

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator 
    tabBarOptions={{
      activeTintColor: '#062743',
      inactiveTintColor: '#9ea9b3',
      tabStyle: {
        marginVertical: moderateScale(10),
      }}}
      showLabel={false}
    >
      <Tab.Screen name='Home' component={HomeScreen} options={{
        tabBarIcon: ({size, color}) => (
        <Icon name="home-sharp" size={size} color={color} />  
        )
      }}
      />
      <Tab.Screen name='Favorite' component={FavoriteScreen} options={{
        tabBarIcon: ({size, color}) => (
        <Icon name="heart-sharp" size={size} color={color} />  
        )
      }}
      />
      <Tab.Screen name='Notification' component={NotifiScreen} options={{
        tabBarIcon: ({size, color}) => (
        <Icon name="notifications-sharp" size={size} color={color} />  
        )
      }}
      />
      <Tab.Screen name='Account' component={AccountScreen} options={{
        tabBarIcon: ({size, color}) => (
        <Icon name="person-sharp" size={size} color={color} />  
        )
      }}
      />
    </Tab.Navigator>
  )
}

export default Tabs