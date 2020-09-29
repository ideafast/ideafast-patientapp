/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View, SafeAreaView, Button} from 'react-native';
import {Colors, Spacing, Typography} from '../../styles';
import {FlatList} from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {connect} from 'react-redux';
import {mapDispatchToProps} from '../../ducks/actions';

import DeviceRowItem from '../../components/devices/DeviceRowItem';

const Devices: () => React$Node = props => {
  const chooseIcon = icon => (
    <MaterialIcon style={styles.icon} size={16} name={icon} />
  );

  // TODO: pull this out into its own component for simplicity.
  const setStatusIcons = device => {
    if (hasError(device)) {
      const actionText = errorAction(device.status.errors[0]);
      return <Button title={actionText} color={Colors.PRIMARY} />;
    }

    // TODO: this should be renamed to hardware in the API, e.g. device.status.hardware ?
    const status = device.status.device;

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

  // TODO: pull this out to "DeviceStatus" component and compose DeviceRowItem instead.
  // Since formatBytes, lastUploadTime, errorMessage, calculateStatus all belong to DeviceStatus?

  const formatBytes = (bytes, decimals = 0) => {
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const size = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
    return `${size} ${sizes[i]}`;
  };

  const lastUploadTime = lastUploaded => {
    const delta = new Date() - new Date(lastUploaded);
    const days = Math.floor(delta / (1000 * 60 * 60 * 24));
    const hours = new Date(delta).getHours();
    return days > 0 ? `${days} days ago` : `${hours} hours ago`;
  };

  const errorByCode = code => props.deviceErrors[code][props.userLang];
  const errorMessage = code => errorByCode(code).message;
  const errorAction = code => errorByCode(code).action;
  const hasError = device => device.status.errors.length > 0;

  const calculateStatus = device => {
    const filesize = device.status.data.size;
    // TODO: does errors need to be a list?
    const errorCode = device.status.errors[0];

    if (!device.status.data.isOnDevice) {
      // TODO: null is default for Axivity, McRoberts; display wear time instead?
      return hasError(device)
        ? errorMessage(errorCode)
        : 'No data uploaded yet.';
    }

    const lastUploaded = device.status.data.lastUploaded;
    const status = `Synced ${formatBytes(filesize)} ${lastUploadTime(
      lastUploaded,
    )}`;

    return hasError(device) ? errorMessage(errorCode) : status;
  };

  const renderItem = ({item: device}) => (
    <DeviceRowItem
      key={device.id}
      name={device.name}
      image={device.image}
      status={calculateStatus(device)}
      children={setStatusIcons(device)}
      isError={hasError(device)}
    />
  );

  const compareByError = (a, b) => !hasError(a) || hasError(b);

  return (
    <View style={styles.view}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={props.devices.sort(compareByError)}
          refreshing={true}
          renderItem={renderItem}
          keyExtractor={device => device.id}
        />
      </SafeAreaView>
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
    marginHorizontal: Spacing.SCALE_16,
  },
  icon: {
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.BLACK,
    padding: Spacing.SCALE_4,
  },
});

const mapStateToProps = state => state;

const DevicesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Devices);

export default DevicesContainer;
