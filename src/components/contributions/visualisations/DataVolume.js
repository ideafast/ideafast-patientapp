/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View, Text} from 'react-native';
import {VictoryPie, VictoryLabel} from 'victory-native';
import {Svg} from 'react-native-svg';
import {Typography} from '../../../styles';
import {FormatBytes} from '../../../util/General';

const DataVolume: () => React$Node = ({filteredData, colorScale}) => {
  const {t} = useTranslation('contributions');

  const deviceSizes = filteredData.map(d =>
    d.metrics.sessions.reduce((result, item) => result + item.size, 0),
  );

  const formattedSizes = deviceSizes.map(size => FormatBytes(size));

  return (
    <View style={styles.view}>
      <Text style={Typography.TITLE}>{t('visualisations.volume.title')}</Text>
      <View style={styles.visualisation}>
        <Svg width="100%" height="100%" viewBox="0 0 400 300">
          <VictoryPie
            // TODO: this should be an adapative height
            width={400}
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
                style={{fontSize: Typography.FONT_SIZE_30}}
              />
            }
          />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  visualisation: {
    // TODO: this should be an adapative height
    height: 130,
    alignItems: 'center',
  },
});

export default DataVolume;
