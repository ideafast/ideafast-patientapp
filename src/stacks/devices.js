import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from '../styles';
import React from 'react';
import Devices from '../containers/Devices';
import Ble from '../containers/Ble';

export const {
  Navigator: StackNavigator,
  Screen: StackScreen,
} = createStackNavigator();

export const DevicesStack = () => (
  <StackNavigator>
    <StackScreen
      name="Devices"
      component={Devices}
      options={{
        title: 'Devices',
        headerStyle: {
          backgroundColor: Colors.PRIMARY,
        },
        headerTintColor: Colors.WHITE,
      }}
    />
    <StackScreen
      name="Ble"
      component={Ble}
      options={{
        title: 'Bluetooth scanner',
        headerStyle: {
          backgroundColor: Colors.PRIMARY,
        },
        headerTintColor: Colors.WHITE,
      }}
    />
  </StackNavigator>
);
