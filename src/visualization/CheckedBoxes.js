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

const CheckedBoxes: () => React$Node = props => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Checked boxes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: Spacing.SCALE_8,
    borderBottomWidth: Typography.BORDER_WIDTH,
    borderColor: Colors.GREY,
  },
  text: {
    fontSize: Typography.FONT_SIZE_20,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.black,
    marginTop: Spacing.SCALE_4,
  },
});

const mapStateToProps = state => state;

const CheckedBoxesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckedBoxes);

export default CheckedBoxesContainer;
