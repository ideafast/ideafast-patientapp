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

const Devices: () => React$Node = props => {
  /* Device has been navigate to the Ble container
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
          Connecting your device
        </Text>
      </View>
      <Text style={styles.txt}>
        Tap the "+" button below to connect to all the devices you have.
      </Text>
      <Text style={styles.txt}>
        If you would like more information about each device, tap the "Help"
        button in the menu below.
      </Text>
      <ActionButton
        buttonColor="#5533FF"
        onPress={() => props.navigation.navigate('Ble')}
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
    paddingHorizontal: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    //margin:10,
  },
  headerTxt: {
    fontSize: 30,
    fontWeight: '600',
    color: Colors.black,
  },
  txt: {
    fontSize: 20,
    fontWeight: '400',
    color: Colors.dark,
    margin: 10,
  },
});

const mapStateToProps = state => state;

const DevicesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Devices);

export default DevicesContainer;
