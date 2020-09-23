/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Colors, Typography} from '../styles';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

const WearTime: () => React$Node = props => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>This is a container for pie.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 4,
    borderBottomWidth: Typography.BORDER_WIDTH,
    borderColor: Colors.GREY,
  },
  text: {
    fontSize: Typography.FONT_SIZE_20,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.black,
  },
});

const mapStateToProps = state => state;

const WearTimeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WearTime);

export default WearTimeContainer;
