/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors, Typography} from '../../styles';
import {connect} from 'react-redux';
import {VictoryGroup, VictoryBar, VictoryChart} from 'victory-native';
import moment from 'moment';

import {mapDispatchToProps} from '../../ducks/actions';

const DataQuality: () => React$Node = ({filterData, colorScale}) => {
  const maxDays = filterData.find(
    days =>
      days.metrics.days ===
      Math.max.apply(Math, filterData.map(item => item.metrics.days)),
  );

  const deviceQuality = filterData.map(d => [
    {
      x: `${moment(maxDays.metrics.start).format('YYYY-MM-DD')}  to ${moment(
        maxDays.metrics.end,
      ).format('YYYY-MM-DD')} (${maxDays.metrics.days} days)`,
      y: d.metrics.sessions.reduce((result, item) => result + item.quality, 0),
    },
  ]);

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Data Quality</Text>
      <View style={styles.victoryChart}>
        <VictoryChart
          width={350}
          height={130}
          padding={{top: 20, bottom: 30, right: 50, left: 50}}>
          <VictoryGroup
            offset={35}
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
  view: {
    overflow: 'hidden',
  },
  title: {
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.BLACK,
  },
  victoryChart: {
    height: 130,
    alignItems: 'center',
  },
});

const mapStateToProps = state => state;

const DataQualityContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataQuality);

export default DataQualityContainer;