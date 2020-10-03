/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Colors, Typography, Spacing} from '../styles';
import {connect} from 'react-redux';
import {VictoryPie, VictoryLabel} from 'victory-native';
import {Svg} from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {mapDispatchToProps} from '../ducks/actions';

const DataVolume: () => React$Node = props => {
  const filterData = props.deviceMetrics.filter(elem =>
    props.selectedCheckBox.find(
      ({name, value}) =>
        elem.name.toLowerCase() === name.toLowerCase() && value,
    ),
  );

  const deviceSizes = filterData.map(d =>
    d.metrics.sessions.map(s => s.size).reduce((a, b) => a + b),
  );

  const colorScale = props.devices
    .filter(elem =>
      filterData.find(
        ({name}) => elem.name.toLowerCase() === name.toLowerCase(),
      ),
    )
    .map(item => item.color);

  return (
    <View style={[styles.view, styles.border]}>
      <Text style={styles.title}>Data Volume</Text>
      <View style={styles.victoryPie}>
        <Svg width="100%" height="100%" viewBox="0 0 360 300">
          <VictoryPie
            standalone={false}
            width={360}
            height={300}
            innerRadius={65}
            labelPosition={({index}) => 'centroid'}
            labels={deviceSizes}
            labelComponent={
              <VictoryLabel
                dy={0}
                style={{fontSize: Typography.FONT_SIZE_30}}
              />
            }
            padAngle={({datum}) => 2}
            data={deviceSizes}
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
    height: 180,
    padding: Spacing.SCALE_8,
    paddingBottom: 60,
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
    color: Colors.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  victoryPie: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: Spacing.SCALE_8,
  },
});

const mapStateToProps = state => state;

const DataVolumeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataVolume);

export default DataVolumeContainer;
