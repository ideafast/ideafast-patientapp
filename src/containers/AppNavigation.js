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
import ContactDetails from './ContactDetails';
import AboutDevices from './AboutDevices';

import {mapDispatchToProps} from '../ducks/actions';

const {Navigator: TabNavigator, Screen: TabScreen} = createBottomTabNavigator();
const {Navigator: StackNavigator, Screen: StackScreen} = createStackNavigator();

const HelpStack = () => (
  <StackNavigator>
    <StackScreen name="Help" component={Help} />
    <StackScreen name="FAQ"
                 component={FAQ}
                 options={{ title: 'FAQ',
                            headerStyle: {
                            backgroundColor:'#5533FF',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                            //fontWeight: 'bold',
                            },
                 }}
    />
    <StackScreen name="AboutDevices"
                 component={AboutDevices}
                 options={{ title: 'About Devices',
                            headerStyle: {
                            backgroundColor:'#5533FF',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                            //fontWeight: 'bold',
                            },
                 }}
    />
    <StackScreen name="ContactDetails"
                 component={ContactDetails}
                 options={{ title: 'Study Center Contact Details',
                            headerStyle: {
                            backgroundColor:'#5533FF',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                            //fontWeight: 'bold',
                            },
                 }}
    />
  </StackNavigator>
);

const AppNavigation = props => {
  if (!props.userID) {
    return <Verify />;
  }
  return (
    <TabNavigator initialRouteName="Devices"
    tabBarOptions={{ activeTintColor: '#FFFFFF', style: {backgroundColor: '#5533FF'},
     labelStyle: {fontSize: 13}}}>
      <TabScreen name="Devices" component={Devices}
        options={{
            tabBarLabel: 'Devices',
            tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bluetooth-audio" color={color} size={size} />
            ),
        }}
       />
      <TabScreen name="Help" component={HelpStack}
        options={{
            tabBarLabel: 'Help',
            tabBarIcon: ({ color, size }) => (
            <FontAwesome name="question-circle" color={color} size={size} />
            ),
        }}
       />
       <TabScreen name="Profile" component={Profile}
        options={{
            tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
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
