/**
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import configureStore from './configureStore';
import Home from './containers/Home';

const store = configureStore({number: 0});

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Home />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
