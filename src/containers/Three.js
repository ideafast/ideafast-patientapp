/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

const Three: () => React$Node = props => {
  return (
    <View style={styles.view}>
      <Text>We're at three.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 24,
  },
});

const mapStateToProps = state => state;

const ThreeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Three);

export default ThreeContainer;
