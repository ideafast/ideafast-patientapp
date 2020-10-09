/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View, Text} from 'react-native';
import {Typography} from '../../../styles';
import {VictoryGroup, VictoryBar, VictoryChart} from 'victory-native';

const DataQuality: () => React$Node = ({filteredData, colorScale}) => {
  const {t} = useTranslation('contributions');

  // TODO: this should instead use the menu calendar filter;
  // Note: using maxDays as a temporary fix to show UI
  const maxDays = filteredData.find(
    days =>
      days.metrics.days ===
      Math.max.apply(Math, filteredData.map(item => item.metrics.days)),
  );

  const formatDate = iso => new Date(iso).toISOString().split('T')[0];

  const xLabel = t('visualisations.quality.xAxisLabel', {
    startDate: formatDate(maxDays.metrics.start),
    endDate: formatDate(maxDays.metrics.end),
    days: maxDays.metrics.days,
  });

  const deviceQuality = filteredData.map(d => [
    {
      x: xLabel,
      y: d.metrics.sessions.reduce((result, item) => result + item.quality, 0),
    },
  ]);

  return (
    <View style={styles.view}>
      <Text style={Typography.TITLE}>{t('visualisations.quality.title')}</Text>
      <View style={styles.victoryChart}>
        <VictoryChart
          // TODO: this should be an adapative height
          width={360}
          height={130}
          padding={{top: 20, bottom: 30, right: 50, left: 50}}>
          {/* TODO: abstract VictoryGroup out to use Progress for consistency */}
          <VictoryGroup
            offset={30}
            colorScale={colorScale}
            style={{
              data: {
                fillOpacity: 0.8,
                stroke: 'black',
                strokeWidth: 1,
              },
            }}>
            {deviceQuality.map((param, i) => {
              return <VictoryBar data={param} key={i} />;
            })}
          </VictoryGroup>
        </VictoryChart>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  victoryChart: {
    height: 130,
    alignItems: 'center',
  },
});

export default DataQuality;
