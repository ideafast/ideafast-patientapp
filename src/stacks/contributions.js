import {createStackNavigator} from '@react-navigation/stack';
import {Colors, Typography, Spacing} from '../styles';
import React from 'react';
import Contributions from '../containers/Contributions';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Settings from '../containers/Settings';
import Dropdownmenu from '../containers/DropdownMenu';

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
            onPress={() => props.navigation.navigate('Dropdownmenu')}
          />
        ),
        headerLeft: () => <Dropdownmenu />,
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
    <StackScreen
      name="Dropdownmenu"
      component={Dropdownmenu}
      options={{
        title: 'Drop Down',
        headerStyle: {
          backgroundColor: Colors.PRIMARY,
        },
        headerTintColor: Colors.WHITE,
      }}
    />
  </StackNavigator>
);
