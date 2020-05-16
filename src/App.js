/**
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';

import Devices from './containers/Devices';
import Profile from './containers/Profile';
import Help from './containers/Help';
import FAQ_help from './containers/FAQ_help';
import AboutDevices from './containers/AboutDevices';
import configureStore from './configureStore';

const {Navigator: TabNavigator, Screen: TabScreen} = createBottomTabNavigator();
const {Navigator: StackNavigator, Screen: StackScreen} = createStackNavigator();

const store = configureStore();

const HelpStack = () => (
  <StackNavigator>
    <StackScreen name="Help" component={Help} />
    <StackScreen name="FAQ_help" component={FAQ_help} />
    <StackScreen name="AboutDevices" component={AboutDevices} />
  </StackNavigator>
);

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TabNavigator initialRouteName="Devices">
          <TabScreen name="Devices" component={Devices} />
          <TabScreen name="Profile" component={Profile} />
          <TabScreen name="Help" component={HelpStack} />
        </TabNavigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
