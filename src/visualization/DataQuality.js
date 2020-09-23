/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Colors, Typography, Spacing} from '../styles';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

const DataQuality: () => React$Node = props => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Progress</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 4,
  },
  title: {
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.BLACK,
    marginLeft: Spacing.SCALE_8,
    marginTop: Spacing.SCALE_8,
  },
});

const mapStateToProps = state => state;

const DataQualityContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataQuality);

export default DataQualityContainer;
