import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ScanQRScreen from '../screens/ScanQRScreen';
import TopUpNavigator from './TopUpNavigator';
import TransferNavigator from './TransferNavigator';

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="ScanQR" component={ScanQRScreen} />
    <Stack.Screen name="TopUp" component={TopUpNavigator} />
    <Stack.Screen name="Transfer" component={TransferNavigator} />
  </Stack.Navigator>
);

export default HomeNavigator;
