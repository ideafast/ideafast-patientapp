/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Button} from 'react-native';
import {Colors} from '../../styles';
import {FlatList} from 'react-native-gesture-handler';

import {connect} from 'react-redux';
import {mapDispatchToProps} from '../../ducks/actions';

import DeviceRow from '../../components/devices/DeviceRow';
import DeviceIcons from '../../components/devices/DeviceIcons';

import {FormatBytes, LastUploadTime} from '../../util';

const DeviceList: () => React$Node = props => {
  const {t} = useTranslation('api');

  const hasError = device => !!device.status.error;

  const setSyncStatus = device => {
    const filesize = device.status.data.size;
    const errorCode = device.status.error;
    const errorMessage = code => t(`${code}.message`);

    if (!device.status.data.isOnDevice) {
      // Note: Axivity, eBedSensor, & McRoberts data transfer is at end
      const isDeviceExcluded = ['AX6', 'BED', 'MMM'].includes(device.id);
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
      const actionText = t(`${device.status.error}.action`);

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
    <DeviceRow
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
    <FlatList
      data={props.devices.sort(compareByError)}
      renderItem={renderItem}
      keyExtractor={device => device.name}
    />
  );
};

const mapStateToProps = state => state;

const DeviceListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeviceList);

export default DeviceListContainer;
