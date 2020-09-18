import {createStackNavigator} from '@react-navigation/stack';
import {Colors, Typography, Spacing, Stack} from '../styles';
import React from 'react';
import Devices from '../containers/Devices';
import Ble from '../containers/Ble';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export const {
  Navigator: StackNavigator,
  Screen: StackScreen,
} = createStackNavigator();

export const DevicesStack = props => (
  <StackNavigator screenOptions={Stack.headerStyle}>
    <StackScreen
      name="Devices"
      component={Devices}
      options={{
        title: 'Devices',
        headerRight: () => (
          <SimpleLineIcons
            name="plus"
            color={Colors.WHITE}
            size={Typography.FONT_SIZE_30}
            style={{marginRight: Spacing.SCALE_16}}
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
      }}
    />
  </StackNavigator>
);
