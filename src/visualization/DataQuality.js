/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Colors, Typography, Spacing} from '../styles';
import {DataChart} from '../dataVisualization';
import {connect} from 'react-redux';
import {VictoryGroup, VictoryBar, VictoryChart} from 'victory-native';

import {mapDispatchToProps} from '../ducks/actions';

const DataQuality: () => React$Node = props => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Data Quality</Text>
      <View style={styles.victoryChart}>
        <VictoryChart width={300} height={220}>
          <VictoryGroup
            offset={35}
            colorScale={DataChart.colors}
            style={{
              data: {
                fillOpacity: 0.6,
                stroke: 'black',
                strokeWidth: 1,
              },
            }}>
            <VictoryBar data={DataChart.column1} />
            <VictoryBar data={DataChart.column2} />
            <VictoryBar data={DataChart.column3} />
            <VictoryBar data={DataChart.column4} />
            <VictoryBar data={DataChart.column5} />
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
