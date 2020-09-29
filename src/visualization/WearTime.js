/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Colors, Typography, Spacing} from '../styles';
import {connect} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Progress from '../visualization/Progress';

import {mapDispatchToProps} from '../ducks/actions';

const WearTime: () => React$Node = props => {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Progress</Text>
      <View style={[styles.borderBar, styles.parent]}>
        <Text style={styles.text}>Wear Time</Text>
        <FontAwesome5
          name="star"
          color={Colors.ORANGE}
          size={Typography.FONT_SIZE_30}
          style={styles.star}
        />
        <Progress />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 4,
    //flex: 1,
  },
  title: {
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.BLACK,
    marginLeft: Spacing.SCALE_8,
    //marginTop: Spacing.SCALE_4,
    marginBottom: Spacing.SCALE_8,
  },
  borderBar: {
    //marginTop: Spacing.SCALE_42,
    //paddingVertical: Spacing.SCALE_8,
    paddingHorizontal: Spacing.SCALE_8,
    borderWidth: 1,
    borderColor: Colors.WHITESMOKE,
    marginRight: Spacing.SCALE_16,
    marginLeft: Spacing.SCALE_16,
  },
  text: {
    fontSize: Typography.FONT_SIZE_20,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.BLACK,
    //position: 'absolute',
    //flexWrap: 'wrap',
    marginLeft: Spacing.SCALE_90,
    //alignSelf: 'center',
  },
  cloud: {
    marginLeft: Spacing.SCALE_8,
  },
  chart: {
    //marginRight: Spacing.SCALE_90,
    //position: 'absolute',
    //justifyContent: 'flex-end',
    //flexDirection: 'row',
    //alignSelf: 'flex-end',
    //alignItems: 'flex-end',
    //flexDirection: 'row',
  },
});

const mapStateToProps = state => state;

const WearTimeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WearTime);

export default WearTimeContainer;
