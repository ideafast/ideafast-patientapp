/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Typography, Spacing} from '../../styles';
import {FormatBytes} from '../../util/General';
import ContributionItem from '../../components/contributions/ContributionItem';

const ContributionsMenu: () => React$Node = ({filterData}) => {
  const deviceDays = filterData.reduce(
    (result, item) => result + item.metrics.days,
    0,
  );

  const deviceSizes = FormatBytes(
    filterData.reduce((result, device) => result + device.status.data.size, 0),
  );

  const totalDevices = filterData.length;

  const makeItem = (icon, title, subtitle) => ({icon, title, subtitle});

  const items = [
    makeItem('award', deviceDays, 'Day Streak'),
    makeItem('medal', deviceSizes, 'Total Data'),
    makeItem('robot', totalDevices, 'Devices Worn'),
  ];

  return (
    <View style={styles.view}>
      <Text style={Typography.HEADER}>Contributions</Text>
      <View style={styles.container}>
        {items.map(item => {
          return <ContributionItem {...item} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    margin: Spacing.SCALE_8,
  },
  container: {
    margin: Spacing.SCALE_4,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ContributionsMenu;
