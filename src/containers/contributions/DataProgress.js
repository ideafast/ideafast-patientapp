/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors, Typography, Spacing} from '../../styles';
import WearSync from '../../components/WearSync';

const DataProgress: () => React$Node = ({
  filterData,
  totalDevices,
  colorScale,
}) => {
  const countDevice = filterData.length;
  const isSyncError = countDevice === totalDevices;

  const makeData = (x, y) => ({x: x, y: y});

  // TODO: calculate days worn?
  const daysWorn = 3;
  const messageWear = `${daysWorn} days for ${countDevice}/${totalDevices} devices`;
  const progressWear = filterData.map(d => [makeData(d.id, d.metrics.days)]);

  const messageSync = isSyncError
    ? 'All Data is synced'
    : `${totalDevices - countDevice} device needs synced`;

  // TODO: Why is the Y always 1? What should it be?
  const progressSync = filterData.map(d => [makeData(d.id, 1)]);

  const items = [
    {
      icon: 'star',
      color: Colors.ORANGE,
      title: 'Wear Time',
      subtitle: messageWear,
      data: progressWear,
    },
    {
      icon: 'cloud',
      color: Colors.BLUE,
      title: 'Data Synced',
      subtitle: messageSync,
      data: progressSync,
      // TODO: the logic here needs revisited
      isError: !isSyncError,
    },
  ];
  return (
    <View style={styles.view}>
      <Text style={Typography.HEADER}>Progress</Text>
      <View style={styles.container}>
        {items.map((item, index) => {
          // TODO: rename this component
          return <WearSync {...item} key={index} colorScale={colorScale} />;
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
