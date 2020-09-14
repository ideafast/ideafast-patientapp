/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import Profile from '../components/Profile';
import Languages from '../components/Languages';
import LanguageInput from '../components/LanguageInput';

import {mapDispatchToProps} from '../ducks/actions';

const Settings: () => React$Node = props => {
  return (
    <View style={styles.view}>
      <Profile />
      <Languages />
      <LanguageInput />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

const mapStateToProps = state => state;

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);

export default SettingsContainer;
