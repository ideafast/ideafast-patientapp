/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors, Typography, Spacing} from '../../styles';
import {connect} from 'react-redux';
import {VictoryPie, VictoryLabel} from 'victory-native';
import {Svg} from 'react-native-svg';

import {mapDispatchToProps} from '../../ducks/actions';

const DataVolume: () => React$Node = ({filterData, colorScale}) => {
  const deviceSizes = filterData.map(d =>
    d.metrics.sessions.reduce((result, item) => result + item.size, 0),
  );

  return (
    <View style={[styles.view]}>
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
  text: {
    fontSize: Typography.FONT_SIZE_12,
    color: Colors.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  victoryPie: {
    height: 130,
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
