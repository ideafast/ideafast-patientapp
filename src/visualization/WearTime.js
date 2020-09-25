/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Colors, Typography, Spacing} from '../styles';
import {connect} from 'react-redux';
import Logo from '../assets/logo.svg';
import Star from '../assets/star.svg';

import {mapDispatchToProps} from '../ducks/actions';

const WearTime: () => React$Node = props => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Progress</Text>
      <View style={[styles.borderBar, styles.parent]}>
        <Text style={styles.text}>Wear Time</Text>
        <Star style={styles.star} height={50} width={50} position="absolute" />
        <Logo style={styles.chart} height={50} width={50} position="absolute" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 4,
    //textAlign: 'right',
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
    paddingVertical: Spacing.SCALE_24,
    //paddingHorizontal: 34,
    borderWidth: 1,
    borderColor: Colors.WHITESMOKE,
    marginRight: Spacing.SCALE_16,
    marginLeft: Spacing.SCALE_16,
  },
  text: {
    fontSize: Typography.FONT_SIZE_20,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.BLACK,
    position: 'absolute',
    flexWrap: 'wrap',
    marginLeft: Spacing.SCALE_90,
    //alignSelf: 'center',
  },
  star: {
    marginLeft: Spacing.SCALE_8,
    position: 'absolute',
  },
  chart: {
    marginRight: Spacing.SCALE_90,
    position: 'absolute',
    //justifyContent: 'flex-end',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
});

const mapStateToProps = state => state;

const WearTimeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WearTime);

export default WearTimeContainer;
