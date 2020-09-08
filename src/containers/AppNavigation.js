/**
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

import Verify from './Verify';
import Devices from './Devices';
import Profile from './Profile';
import Help from './Help';
import Ble from './Ble';

import {mapDispatchToProps} from '../ducks/actions';
import {Colors, Typography} from '../styles';

const {Navigator: TabNavigator, Screen: TabScreen} = createBottomTabNavigator();
const {Navigator: StackNavigator, Screen: StackScreen} = createStackNavigator();

const ContributionsStack = () => (
  <StackNavigator>
    <StackScreen
      name="Contributions"
      component={Devices}
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

const DevicesStack = () => (
  <StackNavigator>
    <StackScreen
      name="Devices"
      component={Help}
      options={{
        title: 'Devices',
        headerStyle: {
          backgroundColor: Colors.PRIMARY,
        },
        headerTintColor: Colors.WHITE,
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

const SupportStack = () => (
  <StackNavigator>
    <StackScreen
      name="Support"
      component={Profile}
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

const AppNavigation = props => {
  if (!props.userID) {
    return <Verify />;
  }

  return (
    <TabNavigator
      initialRouteName="Contributions"
      tabBarOptions={{
        activeTintColor: Colors.WHITE,
        style: {backgroundColor: Colors.PRIMARY},
        labelStyle: {fontSize: Typography.FONT_SIZE_16},
      }}>
      <TabScreen
        name="Contributions"
        component={ContributionsStack}
        options={{
          tabBarLabel: 'Contributions',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="pie-chart" color={color} size={size} />
          ),
        }}
      />
      <TabScreen
        name="Devices"
        component={DevicesStack}
        options={{
          tabBarLabel: 'Devices',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="bluetooth-b" color={color} size={size} />
          ),
        }}
      />
      <TabScreen
        name="Support"
        component={SupportStack}
        options={{
          tabBarLabel: 'Support',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="question-circle-o" color={color} size={size} />
          ),
        }}
      />
    </TabNavigator>
  );
};

const AppNavigationContainer = connect(
  state => state,
  mapDispatchToProps,
)(AppNavigation);

export default AppNavigationContainer;
