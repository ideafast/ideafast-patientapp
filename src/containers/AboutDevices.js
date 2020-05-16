/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

const AboutDevices: () => React$Node = props => {
  return (
    <View style={styles.view}>
      <Button
        title="About Devices"
        onPress={() => props.navigation.navigate('AboutDevices')}
      />
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

const AboutDevicesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AboutDevices);

export default AboutDevicesContainer;
