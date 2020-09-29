/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Colors, Typography, Spacing} from '../styles';
import {connect} from 'react-redux';
import {VictoryPie} from 'victory-native';
import {Svg} from 'react-native-svg';

import {mapDispatchToProps} from '../ducks/actions';

const DataVolume: () => React$Node = props => {
  //const metrics = props.devices.map(device => device.metrics);

  //const device = metrics.map(s => s.reduce((a, b) => a + b));
  //console.log(device);

  const deviceSizes = props.deviceMetrics.map(d =>
    d.metrics.sessions.map(s => s.size).reduce((a, b) => a + b),
  );
  //console.log(metrics[1]);
  //const size = metrics.map(session => session);
  //.reduce((a, b) => a + b);
  //console.log(metrics.map(s => s.map(d => d.size)));
  //const size = metrics.map(s => s.map(d => d.size));
  //console.log(metrics.map(s => s.map(d => d.size)));
  //console.log(props.size);

  return (
    <View style={[styles.view, styles.border]}>
      <Text style={styles.title}>Data Volume</Text>
      <View style={styles.victoryPie}>
        <Svg>
          <VictoryPie
            standalone={false}
            width={350}
            height={190}
            innerRadius={15}
            labelPosition={({index}) => 'centroid'}
            padAngle={({datum}) => 2}
            data={deviceSizes}
            colorScale={props.devices.map(d => d.color)}
          />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: Spacing.SCALE_8,
    justifyContent: 'center',
    //alignItems: 'center',
    //marginTop: Spacing.SCALE_8,
    //paddingHorizontal: Spacing.SCALE_42,
    //flexDirection: 'row',
  },
  border: {
    //paddingHorizontal: Spacing.SCALE_24,
    //paddingVertical: Spacing.SCALE_4,
    //paddingEnd: 160,
    //padding:8,
    borderWidth: 1,
    borderColor: Colors.GREY,
    //marginRight: Spacing.SCALE_16,
    //marginLeft: Spacing.SCALE_16,
  },
  title: {
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.BLACK,
    //marginLeft: Spacing.SCALE_8,
    //marginTop: Spacing.SCALE_16,
    //paddingBottom: Spacing.SCALE_16,
  },
  victoryPie: {
    justifyContent: 'center',
    alignItems: 'center',
    //marginBottom: Spacing.SCALE_16,
    //paddingBottom: Spacing.SCALE_42,
  },
});

const mapStateToProps = state => state;

const DataVolumeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataVolume);

export default DataVolumeContainer;
