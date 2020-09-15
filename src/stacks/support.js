import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from '../styles';
import React from 'react';
import Support from '../containers/Support';

export const {
  Navigator: StackNavigator,
  Screen: StackScreen,
} = createStackNavigator();

export const SupportStack = () => (
  <StackNavigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.PRIMARY,
      },
      headerTintColor: Colors.WHITE,
    }}>
    <StackScreen
      name="Support"
      component={Support}
      options={{
        title: 'Tap a device to learn more',
      }}
    />
  </StackNavigator>
);
