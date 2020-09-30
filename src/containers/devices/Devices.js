/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View, SafeAreaView, Button} from 'react-native';
import {Colors, Spacing} from '../../styles';
import {FlatList} from 'react-native-gesture-handler';

import {connect} from 'react-redux';
import {mapDispatchToProps} from '../../ducks/actions';

import DeviceRowItem from '../../components/devices/DeviceRowItem';
import DeviceIcons from '../../components/devices/DeviceIcons';

import {FormatBytes, LastUploadTime} from '../../util/General';

const Devices: () => React$Node = props => {
  const errorByCode = code => props.deviceErrors[code][props.userLang];
  const errorMessage = code => errorByCode(code).message;
  const errorAction = code => errorByCode(code).action;
  const hasError = device => device.status.errors.length > 0;

  const setSyncStatus = device => {
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
    const status = `Synced ${FormatBytes(filesize)} ${LastUploadTime(
      lastUploaded,
    )}`;

    return hasError(device) ? errorMessage(errorCode) : status;
  };

  const renderDeviceIcons = device => {
    if (hasError(device)) {
      const actionText = errorAction(device.status.errors[0]);
      // TODO: navigate to support depending on click?
      return <Button title={actionText} color={Colors.PRIMARY} />;
    }

    return <DeviceIcons status={device.status.device} />;
  };

  const renderItem = ({item: device}) => (
    <DeviceRowItem
      key={device.id}
      name={device.name}
      image={device.image}
      status={setSyncStatus(device)}
      children={renderDeviceIcons(device)}
      isError={hasError(device)}
    />
  );

  const compareByError = (a, b) => !hasError(a) || hasError(b);

  return (
    <View style={styles.view}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={props.devices.sort(compareByError)}
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
});

const mapStateToProps = state => state;

const DevicesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Devices);

export default DevicesContainer;
