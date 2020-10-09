/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Typography, Spacing} from '../../styles';
import {FormatBytes} from '../../util/General';
import ContributionItem from '../../components/contributions/ContributionItem';

const ContributionsMenu: () => React$Node = ({filteredData}) => {
  const deviceDays = filteredData.reduce(
    (result, item) => result + item.metrics.days,
    0,
  );

  const deviceSizes = FormatBytes(
    filteredData.reduce(
      (result, device) => result + device.status.data.size,
      0,
    ),
  );

  const totalDevices = filteredData.length;

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
          return <ContributionItem key={item.icon} {...item} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: Spacing.SCALE_8,
  },
  container: {
    marginTop: Spacing.SCALE_8,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ContributionsMenu;
