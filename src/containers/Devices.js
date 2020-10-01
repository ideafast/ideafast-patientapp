/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Colors, Typography} from '../styles';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {mapDispatchToProps} from '../ducks/actions';

const Devices: () => React$Node = props => {
  const {t} = useTranslation('devices');
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{t('text')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 24,
  },
  text: {
    fontSize: Typography.FONT_SIZE_20,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.black,
  },
});

const mapStateToProps = state => state;

const DevicesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Devices);

export default DevicesContainer;
