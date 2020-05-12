/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';

import configureStore from './configureStore';
import Home from './containers/Home';

const store = configureStore({number: 0});

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
