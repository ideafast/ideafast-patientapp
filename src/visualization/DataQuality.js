/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Colors, Typography, Spacing} from '../styles';
import {connect} from 'react-redux';
import {VictoryGroup, VictoryBar, VictoryChart} from 'victory-native';
import moment from 'moment';

import {mapDispatchToProps} from '../ducks/actions';

const DataQuality: () => React$Node = props => {
  let filterData = props.deviceMetrics.filter(elem =>
    props.selectedCheckBox.find(
      ({name, value}) =>
        elem.name.toLowerCase() === name.toLowerCase() && value,
    ),
  );
  let maxDays = filterData.find(
    days =>
      days.metrics.days ===
      Math.max.apply(Math, filterData.map(item => item.metrics.days)),
  );

  const deviceQuality = filterData.map(d => [
    {
      x: `${moment(maxDays.metrics.start).format('YYYY-MM-DD')}  to ${moment(
        maxDays.metrics.end,
      ).format('YYYY-MM-DD')} (${maxDays.metrics.days} days)`,
      y: d.metrics.sessions.map(s => s.quality).reduce((a, b) => a + b),
    },
  ]);

  const colorScale = props.devices
    .filter(elem =>
      filterData.find(
        ({name}) => elem.name.toLowerCase() === name.toLowerCase(),
      ),
    )
    .map(item => item.color);
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Data Quality</Text>
      <View style={styles.victoryChart}>
        <VictoryChart width={300} height={220}>
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
    flex: 1,
    padding: 4,
  },
  title: {
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.BLACK,
    marginLeft: Spacing.SCALE_8,
    marginTop: Spacing.SCALE_8,
  },
  victoryChart: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => state;

const DataQualityContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataQuality);

export default DataQualityContainer;
