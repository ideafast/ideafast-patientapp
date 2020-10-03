/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Spacing} from '../styles';
import {DataProgress} from '../dataVisualization';
import {connect} from 'react-redux';
import {VictoryGroup, VictoryBar} from 'victory-native';

import {mapDispatchToProps} from '../ducks/actions';

const ProgressSyncd: () => React$Node = props => {
  //const deviceSizes = props.deviceMetrics.map(d =>
  //  d.metrics.sessions.map(s => s.size).reduce((a, b) => a + b),

  return (
    <View style={[styles.chart, styles.view]}>
      <VictoryGroup
        horizontal
        offset={10}
        height={150}
        width={190}
        //height="100%"
        //width="100%"
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
  chart: {
    marginRight: Spacing.SCALE_150,
    justifyContent: 'flex-end',
    //flexDirection: 'row',
    //alignSelf: 'flex-end',
    alignItems: 'flex-end',
    paddingTop: Spacing.SCALE_16,
    paddingBottom: Spacing.SCALE_4,
    //width: '100%',
    //height: '100%',
    maxHeight: 300,
  },
});

const mapStateToProps = state => state;

const ProgressSyncdContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProgressSyncd);

export default ProgressSyncdContainer;
