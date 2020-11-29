import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import TransferScreen from '../screens/TransferScreen';
import TransferSuccessScreen from '../screens/TransferSuccessScreen';

const Stack = createStackNavigator();

const TransferNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Transfer" component={TransferScreen} />
    <Stack.Screen name="TransferSuccess" component={TransferSuccessScreen} />
  </Stack.Navigator>
);

export default TransferNavigator;
