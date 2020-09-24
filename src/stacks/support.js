import {createStackNavigator} from '@react-navigation/stack';
import {Stack} from '../styles';
import React from 'react';
import Support from '../containers/support/Support';
import SupportDoc from '../containers/support/SupportDoc';

export const {
  Navigator: StackNavigator,
  Screen: StackScreen,
} = createStackNavigator();

export const SupportStack = () => (
  <StackNavigator screenOptions={Stack.headerStyle}>
    <StackScreen
      name="Support"
      component={Support}
      options={{
        title: 'Tap a device to learn more',
      }}
    />
    <StackScreen name="SupportDoc" component={SupportDoc} />
  </StackNavigator>
);
