import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from '../styles';
import React from 'react';
import AboutDevices from '../containers/AboutDevices';

export const {
  Navigator: StackNavigator,
  Screen: StackScreen,
} = createStackNavigator();

export const SupportStack = () => (
  <StackNavigator>
    <StackScreen
      name="Support"
      component={AboutDevices}
      options={{
        title: 'Support',
        headerStyle: {
          backgroundColor: Colors.PRIMARY,
        },
        headerTintColor: Colors.WHITE,
      }}
    />
  </StackNavigator>
);
