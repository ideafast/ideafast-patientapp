/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import DataVolume from '../visualization/DataVolume';
import WearTime from '../visualization/WearTime';
import DataSynced from '../visualization/DataSynced';
import CheckedBoxes from '../visualization/CheckedBoxes';
import ContributionsMenu from '../visualization/ContributionsMenu';

import {mapDispatchToProps} from '../ducks/actions';

const Contributions: () => React$Node = props => {
  return (
    <View style={styles.view}>
      <CheckedBoxes />
      <DataVolume />
      <WearTime />
      <DataSynced />
      <ContributionsMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

const mapStateToProps = state => state;

const ContributionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contributions);

export default ContributionsContainer;
