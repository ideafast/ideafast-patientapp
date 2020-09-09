import {createStackNavigator} from '@react-navigation/stack';
import {Colors, Typography, Spacing} from '../styles';
import React from 'react';
import Contributions from '../containers/Contributions';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Settings from '../containers/Settings';

export const {
  Navigator: StackNavigator,
  Screen: StackScreen,
} = createStackNavigator();

export const ContributionsStack = props => (
  <StackNavigator>
    <StackScreen
      name="Contributions"
      component={Contributions}
      options={{
        title: 'Contributions',
        headerStyle: {
          backgroundColor: Colors.PRIMARY,
        },
        headerTitleStyle: {
          textAlign: 'center',
          alignSelf: 'center',
        },
        headerTintColor: Colors.WHITE,
        headerRight: () => (
          <SimpleLineIcons
            name="settings"
            color={Colors.WHITE}
            size={Typography.FONT_SIZE_30}
            style={{marginRight: Spacing.SCALE_16}}
            onPress={() => props.navigation.navigate('Settings')}
          />
        ),
        headerLeft: () => (
          <SimpleLineIcons
            name="arrow-down"
            color={Colors.WHITE}
            size={Typography.FONT_SIZE_16}
            style={{marginLeft: Spacing.SCALE_42}}
            onPress={() => props.navigation.navigate('Settings')}
          />
        ),
      }}
    />
    <StackScreen
      name="Settings"
      component={Settings}
      options={{
        title: 'Settings',
        headerStyle: {
          backgroundColor: Colors.PRIMARY,
        },
        headerTintColor: Colors.WHITE,
      }}
    />
  </StackNavigator>
);
