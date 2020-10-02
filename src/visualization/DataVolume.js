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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {mapDispatchToProps} from '../ducks/actions';

const DataVolume: () => React$Node = props => {
  const chart = [];
  console.log('*****************props', props.selectedCheckBox);
  //const deviceSizes = props.deviceMetrics.map(d =>
  //  d.metrics.sessions.map(s => s.size).reduce((a, b) => a + b),
  //);
  //const filter = deviceSizes.filter(
  //  item => item.name === props.selectedCheckBox,
  //);

  let filterData = props.deviceMetrics.find(
    item => item.name.toLowerCase() === props.selectedCheckBox.toLowerCase(),
  );
  console.log('*****filterdata', filterData);

  if (filterData) {
    console.log('hiiiiiiiiiiiiiiiiiiii');
    console.log('*********** khar', filterData.metrics.sessions);
  }
  const deviceSizes = filterData
    ? filterData.metrics.sessions.map(s => s.size).reduce((a, b) => a + b)
    : 0;
  console.log('*****deviceizes', deviceSizes);
  chart.push(deviceSizes);

  const colorScale = props.devices.map(d => d.color);

  return (
    <View style={[styles.view, styles.border]}>
      <Text style={styles.title}>Data Volume</Text>
      <View style={styles.victoryPie}>
        <Svg width="80%" height="80%" viewBox="0 0 360 300">
          <VictoryPie
            standalone={false}
            width={360}
            height={300}
            innerRadius={65}
            labelPosition={({index}) => 'centroid'}
            labels={chart}
            padAngle={({datum}) => 2}
            data={chart}
            colorScale={colorScale}
          />
        </Svg>
        <View style={styles.circle}>
          <FontAwesome5
            name="circle"
            color={Colors.BLACK}
            size={Typography.FONT_SIZE_16}
            style={styles.circle}
          />
          <FontAwesome5
            name="circle"
            color={Colors.BLACK}
            size={Typography.FONT_SIZE_16}
            style={styles.circle}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: Spacing.SCALE_8,
    justifyContent: 'center',
  },
  border: {
    borderWidth: 1,
    borderColor: Colors.GREY,
  },
  title: {
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.BLACK,
  },
  text: {
    fontSize: Typography.FONT_SIZE_12,
    //fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    //marginLeft: Spacing.SCALE_90,
  },
  victoryPie: {
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 300,
  },
  circle: {
    //marginLeft: Spacing.SCALE_8,
    //position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    //flexWrap: 'wrap',
    // margin: Spacing.SCALE_8,
    marginLeft: Spacing.SCALE_8,
    marginRight: Spacing.SCALE_8,
  },
});

const mapStateToProps = state => state;

const DataVolumeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataVolume);

export default DataVolumeContainer;
