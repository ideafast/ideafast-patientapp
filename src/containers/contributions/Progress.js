/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Spacing} from '../../styles';
import {connect} from 'react-redux';
import {VictoryGroup, VictoryBar} from 'victory-native';

import {mapDispatchToProps} from '../../ducks/actions';

const Progress: () => React$Node = ({colorScale, progress}) => {
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
    alignItems: 'flex-end',
    paddingTop: Spacing.SCALE_16,
    paddingBottom: Spacing.SCALE_4,
    maxHeight: 300,
  },
});

const mapStateToProps = state => state;

const ProgressContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Progress);

export default ProgressContainer;
