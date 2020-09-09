import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from '../styles';
import React from 'react';
import Contributions from '../containers/Contributions';

export const {
  Navigator: StackNavigator,
  Screen: StackScreen,
} = createStackNavigator();

export const ContributionsStack = () => (
  <StackNavigator>
    <StackScreen
      name="Contributions"
      component={Contributions}
      options={{
        title: 'Contributions',
        headerStyle: {
          backgroundColor: Colors.PRIMARY,
        },
        headerTintColor: Colors.WHITE,
      }}
    />
  </StackNavigator>
);
