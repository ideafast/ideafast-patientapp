/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View, Text} from 'react-native';
import {Typography, Spacing} from '../../styles';
import {FormatBytes} from '../../util';
import ContributionItem from '../../components/contributions/ContributionItem';

const ContributionsMenu: () => React$Node = ({filteredData}) => {
  const {t} = useTranslation('contributions');

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

  const makeItem = (icon, title, subtitle) => ({icon, title, subtitle});

  const items = [
    makeItem('award', deviceDays, t('meta.streak')),
    makeItem('medal', deviceSizes, t('meta.totalSize')),
    makeItem('robot', filteredData.length, t('meta.totalWorn')),
  ];

  return (
    <View style={styles.view}>
      <Text style={Typography.HEADER}>{t('meta.title')}</Text>
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
