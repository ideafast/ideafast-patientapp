/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {connect} from 'react-redux';
import {mapDispatchToProps} from '../../ducks/actions';

import {ScrollView} from 'react-native-gesture-handler';
import {Spacing} from '../../styles';

import DeviceRowSupport from '../../components/support/DeviceRowSupport';

const Support: () => React$Node = props => {
  const devices = props.devices.sort(
    (a, b) => a.name.toUpperCase() > b.name.toUpperCase(),
  );
  return (
    <View style={styles.view}>
      <ScrollView style={styles.container}>
        {devices.map(device => {
          return (
            <DeviceRowSupport
              key={device.id}
              name={device.name}
              image={device.image}
              onPress={() => {
                props.navigation.navigate('SupportDoc', {device: device});
              }}
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
  },
  container: {
    marginTop: Spacing.SCALE_16,
    paddingHorizontal: Spacing.SCALE_16,
  },
});

const mapStateToProps = state => state;

const SupportContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Support);

export default SupportContainer;
