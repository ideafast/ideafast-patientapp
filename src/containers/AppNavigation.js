/**
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';

import Verify from './Verify';

import {mapDispatchToProps} from '../ducks/actions';
import {Colors, Typography} from '../styles';
import {Contributions, Devices, Support} from '../stacks';

const {Navigator: TabNavigator, Screen: TabScreen} = createBottomTabNavigator();

const AppNavigation = props => {
  if (!props.userID) {
    return <Verify />;
  }

  return (
    <TabNavigator
      initialRouteName="Contributions"
      tabBarOptions={{
        activeTintColor: Colors.WHITE,
        style: {backgroundColor: Colors.PRIMARY},
        labelStyle: {fontSize: Typography.FONT_SIZE_16},
      }}>
      <TabScreen
        name="Contributions"
        component={Contributions.ContributionsStack}
        options={{
          tabBarLabel: 'Contributions',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="pie-chart" color={color} size={size} />
          ),
        }}
      />
      <TabScreen
        name="Devices"
        component={Devices.DevicesStack}
        options={{
          tabBarLabel: 'Devices',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="bluetooth-b" color={color} size={size} />
          ),
        }}
      />
      <TabScreen
        name="Support"
        component={Support.SupportStack}
        options={{
          tabBarLabel: 'Support',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="question-circle-o" color={color} size={size} />
          ),
        }}
      />
    </TabNavigator>
  );
};

const AppNavigationContainer = connect(
  state => state,
  mapDispatchToProps,
)(AppNavigation);

export default AppNavigationContainer;
