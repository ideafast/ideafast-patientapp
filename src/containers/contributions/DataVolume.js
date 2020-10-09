/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Typography} from '../../styles';
import {VictoryPie, VictoryLabel} from 'victory-native';
import {Svg} from 'react-native-svg';
import {FormatBytes} from '../../util/General';

const DataVolume: () => React$Node = ({filterData, colorScale}) => {
  const deviceSizes = filterData.map(d =>
    d.metrics.sessions.reduce((result, item) => result + item.size, 0),
  );

  const formattedSizes = deviceSizes.map(size => FormatBytes(size));

  return (
    <View style={styles.view}>
      <Text style={Typography.TITLE}>Data Volume</Text>
      <View style={styles.victoryPie}>
        <Svg width="100%" height="100%" viewBox="0 0 360 300">
          <VictoryPie
            // TODO: this should be an adapative height
            width={360}
            height={300}
            innerRadius={65}
            labelPosition={() => 'centroid'}
            // TODO: what if size is NaN or undefined?
            labels={formattedSizes}
            padAngle={() => 2}
            data={deviceSizes}
            colorScale={colorScale}
            labelComponent={
              <VictoryLabel
                dy={0}
                style={{fontSize: Typography.FONT_SIZE_20}}
              />
            }
          />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  victoryPie: {
    // TODO: this should be an adapative height
    height: 130,
    alignItems: 'center',
  },
});

export default DataVolume;
