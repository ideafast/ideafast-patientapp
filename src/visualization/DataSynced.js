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

const DataSynced: () => React$Node = props => {
  return (
    <View style={styles.view}>
      <View style={styles.borderBar}>
        <Text style={styles.text}>Data Synced</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 4,
  },
  title: {
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.BLACK,
    marginLeft: Spacing.SCALE_8,
    marginTop: Spacing.SCALE_8,
  },
  borderBar: {
    marginTop: Spacing.SCALE_16,
    paddingVertical: Spacing.SCALE_16,
    //paddingHorizontal: 34,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    marginRight: Spacing.SCALE_16,
    marginLeft: Spacing.SCALE_16,
    //paddingHorizontal: 18,
    //alignItems: 'center',
  },
  text: {
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.BLACK,
    marginLeft: Spacing.SCALE_42,
    marginBottom: Spacing.SCALE_8,
  },
});

const mapStateToProps = state => state;

const DataSyncedContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataSynced);

export default DataSyncedContainer;
