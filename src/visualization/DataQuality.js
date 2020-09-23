/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Colors, Typography, Spacing} from '../styles';
import {connect} from 'react-redux';
import {VictoryGroup, VictoryBar, VictoryChart} from 'victory-native';

import {mapDispatchToProps} from '../ducks/actions';

const DataQuality: () => React$Node = props => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Data Quality</Text>
      <View style={styles.victoryChart}>
        <VictoryChart width={300} height={220}>
          <VictoryGroup
            offset={35}
            colorScale={['#5ba5ce', '#fe234f', '#595a5e', '#219ca3', '#d1fcff']}
            style={{
              data: {
                fillOpacity: 0.6,
                stroke: 'black',
                strokeWidth: 1,
              },
            }}>
            <VictoryBar data={[{x: '11/07/20 to 13/07/20 (3 days)', y: 1}]} />
            <VictoryBar data={[{x: '11/07/20 to 13/07/20 (3 days)', y: 0.8}]} />
            <VictoryBar
              data={[{x: '11/07/20 to 13/07/20 (3 days)', y: 0.75}]}
            />
            <VictoryBar data={[{x: '11/07/20 to 13/07/20 (3 days)', y: 1}]} />
            <VictoryBar data={[{x: '11/07/20 to 13/07/20 (3 days)', y: 0.2}]} />
          </VictoryGroup>
        </VictoryChart>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 4,
  },
  title: {
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.BLACK,
    marginLeft: Spacing.SCALE_8,
    marginTop: Spacing.SCALE_8,
  },
  victoryChart: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => state;

const DataQualityContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataQuality);

export default DataQualityContainer;
