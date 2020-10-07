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
    <View style={[styles.view]}>
      <View style={styles.chart}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
  chart: {
    flexDirection: 'row',
    marginVertical: Spacing.SCALE_42,
    alignItems: 'flex-end',
    paddingTop: Spacing.SCALE_24,
    paddingBottom: Spacing.SCALE_4,
  },
});

const mapStateToProps = state => state;

const ProgressContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Progress);

export default ProgressContainer;
