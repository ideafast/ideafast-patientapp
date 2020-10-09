/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Typography} from '../../../styles';
import {VictoryGroup, VictoryBar, VictoryChart} from 'victory-native';

const DataQuality: () => React$Node = ({filteredData, colorScale}) => {
  const maxDays = filteredData.find(
    days =>
      days.metrics.days ===
      Math.max.apply(Math, filteredData.map(item => item.metrics.days)),
  );

  const formatDate = iso => new Date(iso).toISOString().split('T')[0];

  const deviceQuality = filteredData.map(d => [
    {
      x: `${formatDate(maxDays.metrics.start)} to ${formatDate(
        maxDays.metrics.end,
      )} (${maxDays.metrics.days} days)`,
      y: d.metrics.sessions.reduce((result, item) => result + item.quality, 0),
    },
  ]);

  return (
    <View style={styles.view}>
      <Text style={Typography.TITLE}>Data Quality</Text>
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
