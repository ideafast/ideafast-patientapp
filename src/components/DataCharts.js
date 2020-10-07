/**
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors, Spacing} from '../styles';
import {connect} from 'react-redux';
import DataQuality from '../containers/contributions/DataQuality';
import DataVolume from '../containers/contributions/DataVolume';
import {mapDispatchToProps} from '../ducks/actions';
import Circles from '../components/Circles';

const DataCharts: () => React$Node = ({
  activeDevices,
  filterData,
  colorScale,
}) => {
  const [dataVolume, setDataVolume] = useState(true);

  return (
    <View style={[styles.view, styles.border]}>
      <View style={styles.circle}>
        {dataVolume ? (
          <DataVolume
            activeDevices={activeDevices}
            filterData={filterData}
            colorScale={colorScale}
          />
        ) : (
          <DataQuality
            activeDevices={activeDevices}
            filterData={filterData}
            colorScale={colorScale}
          />
        )}

        <Circles setDataVolume={setDataVolume} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingVertical: Spacing.SCALE_4,
  },
  border: {
    borderWidth: 1,
    borderColor: Colors.WHITESMOKE,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circle: {
    marginHorizontal: Spacing.SCALE_8,
  },
});

const mapStateToProps = state => state;

const DataChartsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataCharts);

export default DataChartsContainer;
