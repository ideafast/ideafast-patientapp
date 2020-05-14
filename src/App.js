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

import Intro from './containers/Intro';
import Home from './containers/Home';
import Away from './containers/Away';
import One from './containers/One';
import Two from './containers/Two';
import Three from './containers/Three';
import configureStore from './configureStore';

const {Navigator: TabNavigator, Screen: TabScreen} = createBottomTabNavigator();
const {Navigator: StackNavigator, Screen: StackScreen} = createStackNavigator();

const store = configureStore();

const OneStack = () => (
  <StackNavigator>
    <StackScreen name="One" component={One} />
    <StackScreen name="Two" component={Two} />
    <StackScreen name="Three" component={Three} />
  </StackNavigator>
);

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TabNavigator initialRouteName="Intro">
          <TabScreen name="Intro" component={Intro} />
          <TabScreen name="Home" component={Home} />
          <TabScreen name="Away" component={Away} />
          <TabScreen name="One" component={OneStack} />
        </TabNavigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
