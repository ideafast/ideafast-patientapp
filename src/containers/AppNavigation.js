/**
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

import Verify from './Verify';
import Devices from './Devices';
import Profile from './Profile';
import Help from './Help';
import FAQ from './FAQ';
import ContactUs from './ContactUs';
import AboutDevices from './AboutDevices';

import {mapDispatchToProps} from '../ducks/actions';

const {Navigator: TabNavigator, Screen: TabScreen} = createBottomTabNavigator();
const {Navigator: StackNavigator, Screen: StackScreen} = createStackNavigator();

const HelpStack = () => (
  <StackNavigator>
    <StackScreen name="Help" component={Help} />
    <StackScreen name="FAQ" component={FAQ} />
    <StackScreen name="AboutDevices" component={AboutDevices} />
    <StackScreen name="ContactUs" component={ContactUs} />
  </StackNavigator>
);

const AppNavigation = props => {
  if (!props.userID) {
    return <Verify />;
  }
  return (
    <TabNavigator
      initialRouteName="Profile"
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        style: {backgroundColor: '#5533FF'},
        labelStyle: {fontSize: 13},
      }}>
      <TabScreen
        name="Devices"
        component={Devices}
        options={{
          tabBarLabel: 'Devices',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="bluetooth-audio"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <TabScreen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user-circle" color={color} size={size} />
          ),
        }}
      />
      <TabScreen
        name="Help"
        component={HelpStack}
        options={{
          tabBarLabel: 'Help',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="question-circle" color={color} size={size} />
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
