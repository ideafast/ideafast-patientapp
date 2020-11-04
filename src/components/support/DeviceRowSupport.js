/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, Spacing} from '../../styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import DeviceRow from '../devices/DeviceRow';

const DeviceRowSupport: () => React$Node = props => {
  const children = <FontAwesome style={styles.icon} name="chevron-right" />;

  return <DeviceRow {...props} children={children} />;
};

const styles = StyleSheet.create({
  icon: {
    fontSize: Spacing.SCALE_16,
    color: Colors.BLACK,
    padding: Spacing.SCALE_4,
  },
});

export default DeviceRowSupport;
