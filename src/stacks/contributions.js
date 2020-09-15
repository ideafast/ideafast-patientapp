import {createStackNavigator} from '@react-navigation/stack';
import {Colors, Typography, Spacing} from '../styles';
import React from 'react';
import Contributions from '../containers/Contributions';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Settings from '../containers/Settings';
import Dropdownmenu from '../components/DropdownMenu';

export const {
  Navigator: StackNavigator,
  Screen: StackScreen,
} = createStackNavigator();

export const ContributionsStack = props => (
  <StackNavigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.PRIMARY,
      },
      headerTintColor: Colors.WHITE,
    }}>
    <StackScreen
      name="Contributions"
      component={Contributions}
      options={{
        title: 'Contributions',
        headerTitleStyle: {
          textAlign: 'center',
          alignSelf: 'center',
        },
        headerRight: () => (
          <SimpleLineIcons
            name="settings"
            color={Colors.WHITE}
            size={Typography.FONT_SIZE_30}
            style={{marginRight: Spacing.SCALE_16}}
            onPress={() => props.navigation.navigate('Settings')}
          />
        ),
        headerLeft: () => <Dropdownmenu />,
      }}
    />
    <StackScreen
      name="Settings"
      component={Settings}
      options={{title: 'Settings'}}
    />
    <StackScreen
      name="Dropdownmenu"
      component={Dropdownmenu}
      options={{title: 'Drop Down'}}
    />
  </StackNavigator>
);
