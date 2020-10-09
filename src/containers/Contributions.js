/**
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import DataCharts from '../components/DataCharts';
import DataProgress from './contributions/DataProgress';
import {Colors} from '../styles';
import DeviceCheckBoxes from '../containers/contributions/DeviceCheckBoxes';
import ContributionsMenu from './contributions/ContributionsMenu';

import {mapDispatchToProps} from '../ducks/actions';

const Contributions: () => React$Node = props => {
  // TODO: these must be filtered based on user ...
  const devices = props.devices.filter(d => d.id !== 'SMP');
  const [activeDevices, setActiveDevices] = useState(devices);
  // TODO: abstract this out to hit one endpoint (/devices/)
  const propDeviceMetrics = props.deviceMetrics.filter(d => d.id !== 'SMP');

  const [filterData, setFilterData] = useState(propDeviceMetrics);

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

  const colorScale = activeDevices.map(d => d.color);

  return (
    <View style={styles.view}>
      <ScrollView style={styles.container}>
        <DeviceCheckBoxes
          devices={devices}
          activeDevices={activeDevices}
          onPress={onCheckboxSelected}
        />
        <DataCharts
          // activeDevices={activeDevices}
          filterData={filterData}
          colorScale={colorScale}
        />
        <DataProgress
          activeDevices={activeDevices}
          filterData={filterData}
          totalDevices={devices.length}
          colorScale={colorScale}
        />
        <ContributionsMenu filterData={filterData} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});

const mapStateToProps = state => state;

const ContributionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contributions);

export default ContributionsContainer;
