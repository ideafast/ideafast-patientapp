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
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Data Volume</Text>
      <Svg width={300} height={300}>
        <VictoryPie
          standalone={false}
          width={350}
          height={220}
          innerRadius={35}
          labelPosition={({index}) => 'centroid'}
          padAngle={({datum}) => 2}
          data={[
            {x: '2GB', y: 10},
            {x: '680MB', y: 32},
            {x: '490MB', y: 30},
            {x: '70MB', y: 15},
            {x: '2KB', y: 3},
          ]}
          colorScale={['#5ba5ce', '#fe234f', '#595a5e', '#219ca3', '#d1fcff']}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 4,
    borderBottomWidth: Typography.BORDER_WIDTH,
    borderColor: Colors.GREY,
  },
  title: {
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.BLACK,
    marginLeft: Spacing.SCALE_8,
    marginTop: Spacing.SCALE_8,
  },
});

const mapStateToProps = state => state;

const DataVolumeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataVolume);

export default DataVolumeContainer;
