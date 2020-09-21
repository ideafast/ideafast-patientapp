/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import LanguageSelection from './LanguageSelection';
import SettingsRow from '../components/SettingsRow';

import {mapDispatchToProps} from '../ducks/actions';

const Settings: () => React$Node = props => {
  return (
    <View>
      <SettingsRow title={'User ID'} children={props.userID} />
      <LanguageSelection />
    </View>
  );
};

const mapStateToProps = state => state;

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);

export default SettingsContainer;
