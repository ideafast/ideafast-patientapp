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

import {mapDispatchToProps} from '../ducks/actions';

const ProgressTime: () => React$Node = props => {
  const deviceDays = [props.deviceMetrics.map(d => d.metrics.days)];
  const deviceName = [props.devices.map(d => d.name)];
  console.log('*************deviceColor', deviceName);
  const deviceMetricsName = [props.deviceMetrics.map(d => d.name)];
  console.log('*************deviceMetricsName', deviceMetricsName);

  const res = deviceMetricsName
    .filter(x => !deviceName.includes(x))
    .concat(deviceName.filter(x => !deviceMetricsName.includes(x)));
  console.log(res);
  console.log('*************res199999', res);

  const stupidcolor = [props.devices.map(d => d.color)];
  const id = [props.devices.map(d => d.id)];
  console.log(id);
  //console.log(deviceDays);
  return (
    <View style={[styles.chart, styles.view]}>
      {stupidcolor.map((stupid, indexfake) => {
        return (
          <VictoryGroup
            horizontal
            offset={10}
            height={130}
            width={190}
            key={id}
            colorScale={stupid}
            style={{
              data: {
                fillOpacity: 0.9,
                stroke: 'black',
                strokeWidth: 1,
              },
            }}>
            {deviceDays.map((item, index) => {
              return <VictoryBar key={id} data={item} />;
            })}
          </VictoryGroup>
        );
      })}
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
