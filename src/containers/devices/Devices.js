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
  const hasError = device => !!device.status.error;

  const setSyncStatus = device => {
    const filesize = device.status.data.size;
    const errorCode = device.status.error;
    const errorMessage = code => errorByCode(code).message;

    if (!device.status.data.isOnDevice) {
      // Note: Axivity, eBedSensor, & McRoberts data transfer is at end
      const isDeviceExcluded = [0, 3, 5].includes(device.id);
      // Not sure if this is needed. Could be removed?
      const message = isDeviceExcluded
        ? 'Data will be uploaded when device returned'
        : 'No data uploaded yet';
      return hasError(device) ? errorMessage(errorCode) : message;
    }

    const lastUploaded = device.status.data.lastUploaded;
    const status = `Synced ${FormatBytes(filesize)} ${LastUploadTime(
      lastUploaded,
    )}`;

    return hasError(device) ? errorMessage(errorCode) : status;
  };

  const renderDeviceIcons = device => {
    if (hasError(device)) {
      const actionText = errorByCode(device.status.error).action;

      return (
        <Button
          title={actionText}
          color={Colors.PRIMARY}
          // TODO: navigate to appropriate SupportDoc#Header
          // could be achieved by navigating to SupportDoc, passing in a pointer (navToHeader?)
          // and then using that in useEffect to navigate to the heading in markdown?
          // therefore each error in deviceErrors should have one navToHeader property?
          // onPress={() => {}}
        />
      );
    }

    return <DeviceIcons key={device.id} status={device.status.hardware} />;
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
          keyExtractor={device => device.name}
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
