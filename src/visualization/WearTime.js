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

import {mapDispatchToProps} from '../ducks/actions';

const WearTime: () => React$Node = props => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Progress</Text>
      <View style={[styles.borderBar, styles.parent]}>
        <Text style={styles.text}>Wear Time</Text>
        <Logo style={styles.star} height={50} width={50} position="absolute" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    //flex: 1,
    padding: 4,
    //flexDirection: 'row',
    textAlign: 'right',
    //flexDirection: 'row',
    //flexWrap: "wrap",
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
    borderColor: Colors.WHITE,
    marginRight: Spacing.SCALE_16,
    marginLeft: Spacing.SCALE_16,
    //paddingHorizontal: 18,
    //alignItems: 'center',
  },
  text: {
    fontSize: Typography.FONT_SIZE_20,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.BLACK,
    //marginLeft: Spacing.SCALE_42,
    //marginBottom: Spacing.SCALE_8,
    position: 'absolute',
    //textAlign: 'center',
    flexWrap: 'wrap',
    alignSelf: 'center',
    //flexDirection: 'row',
    //flex: 1,
  },
  star: {
    //paddingVertical: Spacing.SCALE_16,
    //flexDirection: 'row',
    //justifyContent: 'center',
    //alignItems: 'center',
    //borderRadius: 70,
    marginLeft: Spacing.SCALE_8,
    position: 'absolute',
    //maxHeight: 200,
  },
  parent: {
    //flexDirection: 'row',
    //backgroundColor: 'white',
    //textAlign: 'right',
  },
});

const mapStateToProps = state => state;

const WearTimeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WearTime);

export default WearTimeContainer;
