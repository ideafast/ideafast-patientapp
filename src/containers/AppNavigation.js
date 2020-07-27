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
import DeviceManagement from './DeviceManagement';
import Profile from './Profile';
import Help from './Help';
import FAQ from './FAQ';
import ContactDetails from './ContactDetails';
import AboutDevices from './AboutDevices';
import Devices from './Devices';

import {mapDispatchToProps} from '../ducks/actions';

const {Navigator: TabNavigator, Screen: TabScreen} = createBottomTabNavigator();
const {Navigator: StackNavigator, Screen: StackScreen} = createStackNavigator();

const ProfileStack = () => (
  <StackNavigator>
    <StackScreen
      name="Profile"
      component={Profile}
      options={{
        title: 'Profile',
        headerStyle: {
          backgroundColor: '#5533FF',
        },
        headerTintColor: '#fff',
      }}
    />
  </StackNavigator>
);

const DeviceManagementStack = () => (
  <StackNavigator>
    <StackScreen
      name="Device Management"
      component={DeviceManagement}
      options={{
        title: 'Device Management',
        headerStyle: {
          backgroundColor: '#5533FF',
        },
        headerTintColor: '#fff',
      }}
    />
    <StackScreen
      name="Devices"
      component={Devices}
      options={{
        title: 'Devices',
        headerStyle: {
          backgroundColor: '#5533FF',
        },
        headerTintColor: '#fff',
      }}
    />
  </StackNavigator>
);

const HelpStack = () => (
  <StackNavigator>
    <StackScreen
      name="Help"
      component={Help}
      options={{
        title: 'Help',
        headerStyle: {
          backgroundColor: '#5533FF',
        },
        headerTintColor: '#fff',
      }}
    />
    <StackScreen
      name="FAQ"
      component={FAQ}
      options={{
        title: 'FAQ',
        headerStyle: {
          backgroundColor: '#5533FF',
        },
        headerTintColor: '#fff',
      }}
    />
    <StackScreen
      name="AboutDevices"
      component={AboutDevices}
      options={{
        title: 'About Devices',
        headerStyle: {
          backgroundColor: '#5533FF',
        },
        headerTintColor: '#fff',
      }}
    />
    <StackScreen
      name="ContactDetails"
      component={ContactDetails}
      options={{
        title: 'Study Center Contact Details',
        headerStyle: {
          backgroundColor: '#5533FF',
        },
        headerTintColor: '#fff',
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
      initialRouteName="DeviceManagement"
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        style: {backgroundColor: '#5533FF'},
        labelStyle: {fontSize: 13},
      }}>
      <TabScreen
        name="DeviceManagement"
        component={DeviceManagementStack}
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
        name="Help"
        component={HelpStack}
        options={{
          tabBarLabel: 'Help',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="question-circle" color={color} size={size} />
          ),
        }}
      />
      <TabScreen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user-circle" color={color} size={size} />
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
