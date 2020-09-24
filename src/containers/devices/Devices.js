/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors, Spacing} from '../../styles';
import {ScrollView} from 'react-native-gesture-handler';

import {connect} from 'react-redux';
import {mapDispatchToProps} from '../../ducks/actions';

import DeviceRowItem from '../../components/devices/DeviceRowItem';

const Devices: () => React$Node = props => {
  return (
    <View style={styles.view}>
      <ScrollView style={styles.container}>
        {props.devices.map(device => {
          return (
            <DeviceRowItem
              key={device.id}
              name={device.name}
              image={device.image}
              status="Updated N seconds ago"
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: Colors.WHITESMOKE,
  },
  container: {
    marginTop: Spacing.SCALE_16,
    paddingHorizontal: Spacing.SCALE_16,
  },
});

const mapStateToProps = state => state;

const DevicesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Devices);

export default DevicesContainer;
