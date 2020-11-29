import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TopUpScreen from '../screens/TopUpScreen';
import TopUpSuccessScreen from '../screens/TopUpSuccessScreen';

const Stack = createStackNavigator();

const TopUpNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="TopUp" component={TopUpScreen} />
    <Stack.Screen name="TopUpSuccess" component={TopUpSuccessScreen} />
  </Stack.Navigator>
);

export default TopUpNavigator;
