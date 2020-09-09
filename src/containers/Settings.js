/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

const Settings: () => React$Node = props => {
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <Text h4 style={styles.headerTxt}>
          Connecting your device
        </Text>
      </View>
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

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);

export default SettingsContainer;
