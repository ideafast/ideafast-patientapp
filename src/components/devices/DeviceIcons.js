import React from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import {Colors, Typography, Spacing} from '../../styles';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const DeviceIcons: () => React$Node = ({status}) => {
  const chooseIcon = icon => (
    <MaterialIcon
      style={styles.icon}
      size={Typography.FONT_SIZE_18}
      name={icon}
    />
  );

  const setStatusIcons = status => {
    // TODO: this should be renamed to hardware in the API, e.g. device.status.hardware ?
    const children = [];

    if (status.hasBLE) {
      // TODO: check locally if the device is connected to BLE?
      // NEED_TO_KNOW: device.status.hardware.ble.uuid
      const isConnectedToBLELocally = true;
      const isConnectedToBLE = isConnectedToBLELocally
        ? 'bluetooth'
        : 'bluetooth-off';
      // TODO: if they are disconnected, then send push notfication
      children.push(chooseIcon(isConnectedToBLE));
    }

    if (status.battery) {
      const batteryStatus =
        status.battery === 100 ? 'battery' : `battery-${status.battery}`;
      // TODO: do we reall care if it is charging? Probably: no, but if yes:
      // batteryStatus = status.isCharging ? 'battery-charging' : batteryStatus;
      // const hasBattery = chooseIcon(isConnectedToBLE)
      // TODO: do we want to change color based on status, i.e. if < 30%?
      children.push(chooseIcon(batteryStatus));
    }

    // TODO: for McRoberts + AX6 we could infer a charge-time, e.g. if the server knows
    // the wear-time and when the device was discharged, we can show the battery.
    // However, this might confuse patients.
    if (status.battery === null && status.hasWallCharging) {
      // && device.status?.device.isOnline
      // TODO: we need to push an error here if wallCharging is false
      // TODO: should rename 'isOnline' to 'isCharging'?
      // Might this be easier to do via error messages/codes, e.g. status.errors.find('POWERED_OFF')
      const isWiredConnected = status.isOnline
        ? 'power-plug-outline'
        : 'power-plug-off-outline';
      children.push(chooseIcon(isWiredConnected));
    }

    // TODO: display another icon if device.status.device?.isWiFiOn, e.g. it is charging?
    if (status.hasWiFi) {
      // TODO: rename isWiFiOn -> isWiFiEnabled
      const wifiIcon = status.isWiFiOn ? 'wifi' : 'wifi-off';
      children.push(chooseIcon(wifiIcon));
    }

    return children;
  };

  return setStatusIcons(status);
};

const styles = StyleSheet.create({
  icon: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.BLACK,
    padding: Spacing.SCALE_4,
  },
});

export default DeviceIcons;
