import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ScanQRScreen from '../screens/ScanQRScreen';
import HomeNavigator from './HomeNavigator';
import QRScanButton from './QRScanButton';
import routes from './routes';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="ScanQR"
      component={ScanQRScreen}
      options={({navigation}) => ({
        tabBarButton: () => (
          <QRScanButton onPress={() => navigation.navigate(routes.SCANQR)} />
        ),
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="qrcode-scan"
            color={color}
            size={size}
          />
        ),
      })}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name="ios-person" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
