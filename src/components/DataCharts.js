/**
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Spacing, Shared} from '../styles';
import DataQuality from '../containers/contributions/DataQuality';
import DataVolume from '../containers/contributions/DataVolume';
import Circles from './Circles';

const DataCharts: () => React$Node = props => {
  const [activeIndex, setActiveIndex] = useState(0);

  const visualisations = [
    <DataVolume {...props} />,
    <DataQuality {...props} />,
  ];

  return (
    <View style={[styles.view, Shared.BORDER]}>
      {visualisations[activeIndex]}
      <Circles
        num={visualisations.length}
        onPress={i => setActiveIndex(i)}
        isActive={activeIndex}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginTop: Spacing.SCALE_8,
    marginLeft: Spacing.SCALE_16,
    marginRight: Spacing.SCALE_16,
  },
});

export default DataCharts;
