/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import ActionButton from 'react-native-action-button';
import {Text} from 'react-native-elements';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

const Devices: () => React$Node = props => {
  return (
    <View style={styles.view}>
      <Text h4>Connecting your first device</Text>
      <Text>
        You are not connected to any devices. Tap the "+" button below to
        connect to all the devices you have.
      </Text>
      <Text>
        If you would like more information about each device, tap the "Discover"
        button in the menu below.
      </Text>
      <ActionButton buttonColor="#5533FF" />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 24,
  },
});

const mapStateToProps = state => state;

const DevicesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Devices);

export default DevicesContainer;
