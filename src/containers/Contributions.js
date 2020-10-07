/**
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import DataCharts from '../components/DataCharts';
import DataProgress from './contributions/DataProgress';
import {Colors, Spacing, Typography} from '../styles';
import DeviceCheckBoxes from '../containers/contributions/DeviceCheckBoxes';
import ContributionsMenu from './contributions/ContributionsMenu';

import {mapDispatchToProps} from '../ducks/actions';

const Contributions: () => React$Node = props => {
  const [activeDevices, setActiveDevices] = useState(props.devices);
  const [filterData, setFilterData] = useState(props.deviceMetrics);

  const onCheckboxSelected = device => {
    const selectedDevices = activeDevices.includes(device)
      ? activeDevices.filter(d => d.id !== device.id)
      : [...activeDevices, device];
    const resultMetrixs = [];
    selectedDevices.forEach(itemDevice => {
      const data = props.deviceMetrics.find(elem => elem.id === itemDevice.id);
      if (data) {
        resultMetrixs.push(data);
      }
    });
    setActiveDevices(selectedDevices);
    setFilterData(resultMetrixs);
  };

  const colorScale = activeDevices
    .filter(elem => filterData.find(({id}) => elem.id === id))
    .map(item => item.color);

  return (
    <View style={styles.view}>
      <DeviceCheckBoxes
        devices={props.devices}
        activeDevices={activeDevices}
        onPress={onCheckboxSelected}
      />
      <DataCharts
        activeDevices={activeDevices}
        filterData={filterData}
        colorScale={colorScale}
      />
      <Text style={styles.title}>Progress</Text>
      <DataProgress
        activeDevices={activeDevices}
        filterData={filterData}
        totalDevices={props.deviceMetrics.length}
        colorScale={colorScale}
      />
      <ContributionsMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  title: {
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.BLACK,
    marginLeft: Spacing.SCALE_8,
    paddingVertical: Spacing.SCALE_4,
  },
});

const mapStateToProps = state => state;

const ContributionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contributions);

export default ContributionsContainer;
