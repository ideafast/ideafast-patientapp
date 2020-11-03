/**
 * @format
 * @flow strict-local
 */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Colors, Spacing} from '../../styles';

import {connect} from 'react-redux';
import {mapDispatchToProps} from '../../ducks/actions';

import DeviceList from '../../components/devices/DeviceList';

const Devices: () => React$Node = props => {
  // Update UI based on API request
  const [isLoading, setIsLoading] = useState(true);
  // When the API request is made
  const [isFetching, setFetching] = useState(true);

  useEffect(() => {
    if (isFetching) {
      const fetchDevices = async () => props.getDevices();
      fetchDevices();
      setFetching(false);
    }
  }, [isFetching]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!isFetching) {
      setIsLoading(false);
    }
  }, [props.devices]); // eslint-disable-line react-hooks/exhaustive-deps

  const isLoadingView = <Text style={styles.loading}>Loading Devices ...</Text>;

  return (
    <View style={styles.view}>
      <SafeAreaView style={styles.container}>
        {isLoading ? isLoadingView : <DeviceList />}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: Colors.WHITESMOKE,
  },
  container: {
    marginTop: Spacing.SCALE_16,
    marginHorizontal: Spacing.SCALE_16,
  },
  loading: {
    textAlign: 'center',
  },
});

const mapStateToProps = state => state;

const DevicesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Devices);

export default DevicesContainer;
