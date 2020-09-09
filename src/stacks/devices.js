import {createStackNavigator} from '@react-navigation/stack';
import {Colors, Typography} from '../styles';
import React from 'react';
import Devices from '../containers/Devices';
import Ble from '../containers/Ble';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const {
  Navigator: StackNavigator,
  Screen: StackScreen,
} = createStackNavigator();

export const DevicesStack = props => (
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
        headerRight: () => (
          <MaterialCommunityIcons
            name="plus"
            color={Colors.WHITE}
            size={Typography.FONT_SIZE_30}
            onPress={() => props.navigation.navigate('Ble')}
          />
        ),
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
