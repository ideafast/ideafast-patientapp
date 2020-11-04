/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Button, RefreshControl} from 'react-native';
import {Colors} from '../../styles';
import {FlatList} from 'react-native-gesture-handler';

import DeviceRow from '../../components/devices/DeviceRow';
import DeviceIcons from '../../components/devices/DeviceIcons';

import {FormatBytes, LastUploadTime} from '../../util';

const DeviceList: () => React$Node = ({devices, refreshing, onRefresh}) => {
  const {t} = useTranslation(['api', 'devices']);

  const hasError = device => !!device.status.error;

  const statusForManualTransfer = deviceID => {
    // Note: Axivity, eBedSensor, & McRoberts data transfer is at end
    return ['AX6', 'BED', 'MMM'].includes(deviceID)
      ? t('devices:status.manualTransfer')
      : t('devices:status.noData');
  };

  const setSyncStatus = device => {
    const lastUploaded = LastUploadTime(device.status.data.lastUploaded);
    const filesize = FormatBytes(device.status.data.size);

    const status = !device.status.data.isOnDevice
      ? statusForManualTransfer(device.id)
      : t('devices:status.sync', {
          filesize,
          lastUploaded,
        });

    return hasError(device) ? t(`${device.status.error}.message`) : status;
  };

  const renderDeviceIcons = device => {
    if (hasError(device)) {
      return (
        <Button
          title={t(`${device.status.error}.action`)}
          color={Colors.PRIMARY}
          // TODO: navigate to appropriate SupportDoc#Header
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
      alwaysBounceVertical={true}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          enabled={true}
          colors={[Colors.PRIMARY]}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      data={devices.sort(compareByError)}
      renderItem={renderItem}
      keyExtractor={device => device.name}
    />
  );
};

export default DeviceList;
