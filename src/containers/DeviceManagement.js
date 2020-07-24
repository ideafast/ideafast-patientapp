/**
 * @format
 * @flow strict-local
 */
import React from 'react';
//import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
//import {ActivityIndicator} from 'react-native';
import ActionButton from 'react-native-action-button';
import {Text} from 'react-native-elements';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

const DeviceManagement: () => React$Node = props => {
  /*
  const [isSearching, setSearching] = useState(false);

  const searchForDevice = async () => {
    setSearching(true);
    console.log('SEARCHING FOR DEVICES');
    await new Promise(r => setTimeout(r, 500));
    setSearching(false);
  };

  if (isSearching) {
    return <ActivityIndicator />;
  }
*/
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <Text h4 style={styles.headerTxt}>
          Connecting your first device
        </Text>
      </View>
      <Text style={styles.txt}>
        You are not connected to any devices. Tap the "+" button below to
        connect to all the devices you have.
      </Text>
      <Text style={styles.txt}>
        If you would like more information about each device, tap the "Help"
        button in the menu below.
      </Text>
      <ActionButton
        buttonColor="#5533FF"
        onPress={() => props.navigation.navigate('Devices')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 24,
  },
  header: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    //alignItems: 'center',
  },
  headerTxt: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.black,
  },
  txt: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
});

const mapStateToProps = state => state;

const DeviceManagementContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeviceManagement);

export default DeviceManagementContainer;
