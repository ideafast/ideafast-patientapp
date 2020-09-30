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
import {DataPie} from '../dataVisualization';

import {mapDispatchToProps} from '../ducks/actions';

const DataVolume: () => React$Node = props => {
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
            data={DataPie.data}
            colorScale={DataPie.Colors}
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
  victoryPie: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => state;

const DataVolumeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataVolume);

export default DataVolumeContainer;
