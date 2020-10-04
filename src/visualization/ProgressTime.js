/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Spacing} from '../styles';
//import {DataProgress} from '../dataVisualization';
import {connect} from 'react-redux';
import {VictoryGroup, VictoryBar} from 'victory-native';
//import moment from 'moment';

import {mapDispatchToProps} from '../ducks/actions';

const ProgressTime: () => React$Node = props => {
  const filterData = props.deviceMetrics.filter(elem =>
    props.selectedCheckBox.find(
      ({name, value}) =>
        elem.name.toLowerCase() === name.toLowerCase() && value,
    ),
  );
  let a = 97;
  const progress =
    props.title === 'Wear Time'
      ? filterData.map((d, i) => [
          {
            x: String.fromCharCode(a + i),
            y: d.metrics.days,
          },
        ])
      : props.deviceMetrics.map((d, i) => [
          {
            x: String.fromCharCode(a + i),
            y: d.status.data.isOnDevice ? 1 : 0,
          },
        ]);
  console.log('progress', progress);

  const colorScale =
    props.title === 'Wear Time'
      ? props.devices
          .filter(elem =>
            filterData.find(
              ({name}) => elem.name.toLowerCase() === name.toLowerCase(),
            ),
          )
          .map(item => item.color)
      : props.devices.map(item => item.color);

  return (
    <View style={[styles.chart, styles.view]}>
      <VictoryGroup
        horizontal
        offset={10}
        height={130}
        width={190}
        colorScale={colorScale}
        style={{
          data: {
            fillOpacity: 0.7,
            stroke: 'black',
            strokeWidth: 0,
          },
        }}>
        {progress.map((item, id) => {
          return <VictoryBar key={id} data={item} />;
        })}
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

const ProgressTimeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProgressTime);

export default ProgressTimeContainer;