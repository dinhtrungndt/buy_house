import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../screens/SplashScreen';
import Tabs from './Tabs';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import OnBoardingScreen from '../screens/OnBoarding';
import NewsDetails from '../screens/NewsDetails';
import CategoryScreen from '../screens/CategoryList';
import AboutScreen from '../screens/About';

const MainStack = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SplashScreen'>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
    </Stack.Navigator>
  )
}

export default MainStack