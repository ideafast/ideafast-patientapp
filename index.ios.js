/**
 * @format
 */

//import React, {Component} from 'react';
import {AppRegistry} from 'react-native'; //
import App from './src/App'; //
import {name as appName} from './app.json';
//import App from "react-native-ble-manager/example/App";

AppRegistry.registerComponent(appName, () => App);
