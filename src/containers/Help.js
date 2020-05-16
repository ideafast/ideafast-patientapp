/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Help: () => React$Node = props => {
  return (
    <View style={styles.view}>
      <View>
         <Text>Help!</Text>
      </View>
      <View>
         <Button
            title="Frequently Ask Questions"
            onPress={() => props.navigation.navigate('FAQ_help')}
         />
      </View>
      <View>
         <Button
         title="About Devices"
         onPress={() => props.navigation.navigate('AboutDevices')}
         />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => state;

const HelpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Help);

export default HelpContainer;
