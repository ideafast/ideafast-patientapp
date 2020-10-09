/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View, Text} from 'react-native';
import {Colors, Typography, Spacing} from '../../styles';
import WearSync from '../../components/contributions/WearSync';

const DataProgress: () => React$Node = ({filteredData, totalDevices}) => {
  const {t} = useTranslation('contributions');

  const countDevice = filteredData.length;
  const isSyncError = countDevice === totalDevices;

  const makeData = (x, y) => ({x: x, y: y});

  // Note: this is hard-coded for now, but will be the days from the date filter
  const daysWorn = 3;
  const messageWear = t('progress.wearTime.subtitle', {
    daysWorn,
    countDevice,
    totalDevices,
  });
  const progressWear = filteredData.map(d => makeData(d.id, d.metrics.days));

  const messageSync = isSyncError
    ? t('progress.dataSync.subtitle')
    : t('progress.dataSync.subtitleWithError', {
        count: totalDevices - countDevice,
      });

  const progressSync = filteredData.map(d => makeData(d.id, 1));

  const items = [
    {
      icon: 'star',
      color: Colors.ORANGE,
      title: t('progress.wearTime.title'),
      subtitle: messageWear,
      data: progressWear,
    },
    {
      icon: 'cloud',
      color: Colors.BLUE,
      title: t('progress.dataSync.title'),
      subtitle: messageSync,
      data: progressSync,
      // TODO: the logic here needs revisited
      isError: !isSyncError,
    },
  ];
  return (
    <View style={styles.view}>
      <Text style={Typography.HEADER}>{t('progress.title')}</Text>
      <View style={styles.container}>
        {items.map((item, index) => {
          // TODO: rename this component
          return <WearSync {...item} key={index} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginLeft: Spacing.SCALE_16,
    marginRight: Spacing.SCALE_16,
  },
  container: {
    marginTop: Spacing.SCALE_8,
  },
});

export default DataProgress;
