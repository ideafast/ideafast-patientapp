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
  // TODO: pull from /devices/ API to populate userDevices

  const devices = props.userDevices.filter(d => d.id !== 'SMP');
  const [activeDevices, setActiveDevices] = useState(devices);

  const onCheckboxSelected = device => {
    const selectedDevices = activeDevices.includes(device)
      ? activeDevices.filter(d => d.id !== device.id)
      : [...activeDevices, device];
    setActiveDevices(selectedDevices);
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
        <DataCharts filteredData={activeDevices} colorScale={colorScale} />
        <DataProgress
          filteredData={activeDevices}
          totalDevices={devices.length}
          colorScale={colorScale}
        />
        <ContributionsMenu filteredData={devices} />
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
