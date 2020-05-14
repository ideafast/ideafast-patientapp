/**
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';

import Away from './containers/Away';
import Home from './containers/Home';
import One from './containers/One';
import configureStore from './configureStore';

const {Navigator, Screen} = createBottomTabNavigator();
// const {Navigator, Screen} = createStackNavigator();

const store = configureStore();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Navigator initialRouteName="One">
          <Screen name="Away" component={Away} />
          <Screen name="Home" component={Home} />
          <Screen name="One" component={One} />
        </Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
