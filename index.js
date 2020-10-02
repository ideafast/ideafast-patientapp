/**
 * @format
 */

import {AppRegistry} from 'react-native';
// i18n comes before app initialization to pass users phone language as default
import './src/i18n/';
import App from './src/App';
import {name as appName} from './app.json';
// Setup Mock/Live API depending on Config
// Might cause an error, since api should be called before app initialization
import './src/api/';



AppRegistry.registerComponent(appName, () => App);
