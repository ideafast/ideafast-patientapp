/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
// Setup Mock/Live API depending on Config
import './src/api/';

import './src/i18n/';

AppRegistry.registerComponent(appName, () => App);
