/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors, Typography, Spacing} from '../styles';
import {DataProgress} from '../dataVisualization';
import {connect} from 'react-redux';
import {VictoryGroup, VictoryBar} from 'victory-native';

import {mapDispatchToProps} from '../ducks/actions';

const Progress: () => React$Node = props => {
  return (
    <View style={[styles.chart, styles.view]}>
      <VictoryGroup
        horizontal
        offset={10}
        height={150}
        width={150}
        colorScale={DataProgress.colors}
        style={{
          data: {
            fillOpacity: 0.9,
            stroke: 'black',
            strokeWidth: 1,
          },
        }}>
        <VictoryBar data={DataProgress.column1} />
        <VictoryBar data={DataProgress.column2} />
        <VictoryBar data={DataProgress.column3} />
        <VictoryBar data={DataProgress.column4} />
        <VictoryBar data={DataProgress.column5} />
      </VictoryGroup>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: Spacing.SCALE_16,
    flexDirection: 'row-reverse',
  },
  title: {
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.BLACK,
    marginLeft: Spacing.SCALE_8,
    //padding: Spacing.SCALE_24,
    //marginTop: Spacing.SCALE_8,
    //marginBottom: Spacing.SCALE_8,
  },
  chart: {
    marginRight: Spacing.SCALE_200,
    //paddingHorizontal: Spacing.SCALE_24,
    //paddingVertical: Spacing.SCALE_4,
    //position: 'absolute',
    justifyContent: 'flex-end',
    //flexDirection: 'row',
    //alignSelf: 'flex-end',
    alignItems: 'flex-end',
    //flexDirection: 'row',
    //flex: 1,
    //flexDirection: 'row-reverse',
    paddingTop: Spacing.SCALE_16,
    paddingBottom: Spacing.SCALE_4,
  },
});

const mapStateToProps = state => state;

const ProgressContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Progress);

export default ProgressContainer;
