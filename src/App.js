/**
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider, connect} from 'react-redux';

import Verify from './containers/Verify';
import Devices from './containers/Devices';
import Profile from './containers/Profile';
import Help from './containers/Help';
import FAQ from './containers/FAQ';
import ContactUs from './containers/ContactUs';
import AboutDevices from './containers/AboutDevices';
import configureStore from './configureStore';
import {mapDispatchToProps} from './ducks/actions';

const {Navigator: TabNavigator, Screen: TabScreen} = createBottomTabNavigator();
const {Navigator: StackNavigator, Screen: StackScreen} = createStackNavigator();

const store = configureStore();

const HelpStack = () => (
  <StackNavigator>
    <StackScreen name="Help" component={Help} />
    <StackScreen name="FAQ" component={FAQ} />
    <StackScreen name="AboutDevices" component={AboutDevices} />
    <StackScreen name="ContactUs" component={ContactUs} />
  </StackNavigator>
);

const NavigationRoute = props => {
  console.log(props);
  if (!props.userID) {
    return <Verify />;
  }
  return (
    <TabNavigator
      initialRouteName="Profile"
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        style: {backgroundColor: '#5533FF'},
        labelStyle: {fontSize: 13},
      }}>
      <TabScreen
        name="Devices"
        component={Devices}
        options={{
          tabBarLabel: 'Devices',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="bluetooth-audio"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <TabScreen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user-circle" color={color} size={size} />
          ),
        }}
      />
      <TabScreen
        name="Help"
        component={HelpStack}
        options={{
          tabBarLabel: 'Help',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="question-circle" color={color} size={size} />
          ),
        }}
      />
    </TabNavigator>
  );
};

const NavigationRouteContainer = connect(
  state => state,
  mapDispatchToProps,
)(NavigationRoute);

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationRouteContainer />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
