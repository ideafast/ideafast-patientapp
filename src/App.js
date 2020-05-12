/**
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';

import Away from './containers/Away';
import Home from './containers/Home';
import configureStore from './configureStore';

const {Navigator, Screen} = createStackNavigator();

const store = configureStore();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Navigator initialRouteName="Home">
          <Screen name="Away" component={Away} />
          <Screen name="Home" component={Home} />
        </Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
