/**
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';

import configureStore from './configureStore';
import Home from './containers/Home';
import Profile from './containers/Profile';

const {Navigator, Screen} = createStackNavigator();

const store = configureStore({number: 0});

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Navigator>
          <Screen name="Home" component={Home} />
          <Screen name="Profile" component={Profile} />
        </Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
