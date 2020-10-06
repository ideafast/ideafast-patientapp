/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors, Typography, Spacing} from '../styles';
import {connect} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Progress from '../containers/contributions/Progress';

import {mapDispatchToProps} from '../ducks/actions';

const WearSync: () => React$Node = ({
  title,
  icon,
  color,
  progress,
  message,
  colorScale,
}) => {
  return (
    <View style={styles.view}>
      <View style={styles.borderBar}>
        <Text style={styles.text}>{title}</Text>
        <FontAwesome5
          name={icon}
          color={color}
          size={Typography.FONT_SIZE_30}
          style={styles.star}
        />
        <Text style={styles.shadow}>{message}</Text>
        <Progress progress={progress} colorScale={colorScale} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: Spacing.SCALE_4,
    //flexDirection: 'row',
  },
  title: {
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.BLACK,
    flex: 1,
  },
  borderBar: {
    borderWidth: 1,
    borderColor: Colors.WHITESMOKE,
  },
  text: {
    fontSize: Typography.FONT_SIZE_20,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.BLACK,
    marginLeft: Spacing.SCALE_90,
    flexDirection: 'row',
    //flex: 1,
  },
  shadow: {
    fontSize: Typography.FONT_SIZE_12,
    color: Colors.BLACK,
    marginLeft: Spacing.SCALE_90,
    //flexDirection: 'row',
  },
  warning: {
    fontSize: Typography.FONT_SIZE_12,
    color: Colors.RED,
    marginLeft: Spacing.SCALE_90,
  },
  star: {
    marginLeft: Spacing.SCALE_8,
    flexDirection: 'row',
  },
});

const mapStateToProps = state => state;

const WearSyncComponents = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WearSync);

export default WearSyncComponents;
