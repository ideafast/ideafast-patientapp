/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import LanguageSelection from './LanguageSelection';
import SettingsRow from '../components/SettingsRow';
import {useTranslation} from 'react-i18next';

import {mapDispatchToProps} from '../ducks/actions';

const Settings: () => React$Node = props => {
  const {t, i18n} = useTranslation('contributions');
  return (
    <View>
      <SettingsRow title={t('settings.user')} children={props.userID} />
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
