/**
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Colors, Spacing} from '../../styles';

import {connect} from 'react-redux';
import {mapDispatchToProps} from '../../ducks/actions';

import DeviceList from '../../components/devices/DeviceList';
import {useDevices} from '../../hooks/useDevices';

const Devices: () => React$Node = props => {
  // Load devices from remote
  const [loading] = useDevices(props.getDevices);
  // For UI to indicate when refreshing
  const [isRefreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await props.getDevices();
    setRefreshing(false);
  };

  const isLoadingView = <Text style={styles.loading}>Loading Devices ...</Text>;

  return (
    <View style={styles.view}>
      <SafeAreaView style={styles.container}>
        {loading ? (
          isLoadingView
        ) : (
          <DeviceList
            devices={props.devices}
            refreshing={isRefreshing}
            onRefresh={onRefresh}
          />
        )}
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
