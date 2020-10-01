import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, Typography, Spacing} from '../../styles';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const DeviceIcons: () => React$Node = ({status}) => {
  const chooseIcon = icon => (
    <MaterialIcon key={icon} style={styles.icon} name={icon} />
  );

  // TODO: check locally if the device is connected to BLE
  const isDeviceConnectedToBLE = uuid => true;
  // TODO: push a notification to the user
  const pushNotfication = message => true;

  /* eslint-disable no-shadow */
  const iconsForStatus = status => {
    const icons = [];

    if (status.features.ble) {
      const isBLEOn = isDeviceConnectedToBLE(status.features.ble.uuid);
      const isConnectedToBLE = isBLEOn ? 'bluetooth' : 'bluetooth-off';

      // TODO: determine if usage is witin wear-time before pushing
      if (!isBLEOn) {
        pushNotfication('');
      }

      icons.push(chooseIcon(isConnectedToBLE));
    }

    if (status.connection.battery) {
      const percent = status.connection.battery;
      const batteryStatus = percent === 100 ? 'battery' : `battery-${percent}`;
      icons.push(chooseIcon(batteryStatus));
    }

    if (status.features.wired) {
      const isWiredConnected = status.connection.wifi
        ? 'power-plug-outline'
        : 'power-plug-off-outline';
      icons.push(chooseIcon(isWiredConnected));
    }

    if (status.features.wifi) {
      const wifiIcon = status.connection.wifi ? 'wifi' : 'wifi-off';
      icons.push(chooseIcon(wifiIcon));
    }

    return icons;
  };

  return iconsForStatus(status);
};

const styles = StyleSheet.create({
  icon: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.BLACK,
    padding: Spacing.SCALE_4,
  },
});

export default DeviceIcons;
