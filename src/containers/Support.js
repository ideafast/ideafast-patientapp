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

const Support: () => React$Node = props => {
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>This is a container for support.</Text>
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
    paddingVertical: Spacing.SCALE_8,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: Typography.FONT_SIZE_20,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.black,
  },
});

const mapStateToProps = state => state;

const SupportContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Support);

export default SupportContainer;
