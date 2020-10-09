/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../styles';
import CheckBox from '../../components/CheckBox';

const DeviceCheckBoxes: () => React$Node = ({
  devices,
  activeDevices,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      {devices.map(device => {
        return (
          <CheckBox
            key={device.id}
            text={device.name}
            isActive={activeDevices.includes(device)}
            onPress={() => {
              onPress(device);
            }}
            color={device.color}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    borderBottomWidth: 0.25,
    borderBottomColor: Colors.BORDER,
  },
});

export default DeviceCheckBoxes;
