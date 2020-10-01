import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, Typography, Spacing} from '../../styles';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const DeviceIcons: () => React$Node = ({status}) => {
  const chooseIcon = icon => (
    <MaterialIcon key={icon} style={styles.icon} name={icon} />
  );

  // TODO: check locally if the device is connected to BLE?
  // const isDeviceConnectedToBLE = uuid => true;
  // TODO: push a notification to the user
  const pushNotfication = message => true;

  /* eslint-disable no-shadow */
  const iconsForStatus = status => {
    const icons = [];

    if (status.hasBLE) {
      const isBLEOn = true;
      const isConnectedToBLE = isBLEOn ? 'bluetooth' : 'bluetooth-off';
      // TODO: need to determine if this is witin the wear-time period
      if (!isBLEOn) {
        pushNotfication('');
      }
      icons.push(chooseIcon(isConnectedToBLE));
    }

    if (status.battery) {
      const batteryStatus =
        status.battery === 100 ? 'battery' : `battery-${status.battery}`;
      icons.push(chooseIcon(batteryStatus));
    }

    if (status.hasWallCharging) {
      // && device.status?.device.isOnline
      // TODO: we need to push an error here if wallCharging is false
      // TODO: should rename 'isOnline' to 'isCharging'?
      // Might this be easier to do via error messages/codes, e.g. status.errors.find('POWERED_OFF')
      const isWiredConnected = status.isOnline
        ? 'power-plug-outline'
        : 'power-plug-off-outline';
      icons.push(chooseIcon(isWiredConnected));
    }

    if (status.hasWiFi) {
      // TODO: rename isWiFiOn -> isWiFiEnabled
      const wifiIcon =
        status.isWiFiOn && !status.hasWallCharging ? 'wifi' : 'wifi-off';
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
