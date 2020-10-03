import {createStackNavigator} from '@react-navigation/stack';
import {Colors, Typography, Spacing, Stack} from '../styles';
import React from 'react';
import Contributions from '../containers/Contributions';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Settings from '../containers/Settings';
//import Dropdownmenu from '../containers/DropdownMenu';
import DataQuality from '../visualization/DataQuality';
import DataVolume from '../visualization/DataVolume';

export const {
  Navigator: StackNavigator,
  Screen: StackScreen,
} = createStackNavigator();

export const ContributionsStack = props => (
  <StackNavigator screenOptions={Stack.headerStyle}>
    <StackScreen
      name="Contributions"
      component={Contributions}
      options={{
        title: 'Contributions',
        //headerTitleStyle: Stack.headerTitleStyle,
        headerRight: () => (
          <SimpleLineIcons
            name="settings"
            color={Colors.WHITE}
            size={Typography.FONT_SIZE_30}
            style={{marginRight: Spacing.SCALE_16}}
            onPress={() => props.navigation.navigate('Settings')}
          />
        ),
        //headerLeft: () => <Dropdownmenu />,
      }}
    />
    <StackScreen
      name="Settings"
      component={Settings}
      options={{title: 'Settings'}}
    />
    <StackScreen
      name="DataQuality"
      component={DataQuality}
      options={{title: 'Data Quality'}}
    />
    <StackScreen
      name="DataVolume"
      component={DataVolume}
      options={{title: 'Data Volume'}}
    />
  </StackNavigator>
);
