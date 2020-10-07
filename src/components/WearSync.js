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
      <View style={[styles.borderBar, styles.star]}>
        <FontAwesome5
          name={icon}
          color={color}
          size={Typography.FONT_SIZE_30}
          style={styles.star}
        />
        <View style={styles.shadow}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.shadow}>{message}</Text>
        </View>
        <View>
          <Progress progress={progress} colorScale={colorScale} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
  },
  title: {
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.BLACK,
  },
  borderBar: {
    borderWidth: 1,
    borderColor: Colors.WHITESMOKE,
    flexDirection: 'row',
    paddingVertical: Spacing.SCALE_8,
  },
  text: {
    fontSize: Typography.FONT_SIZE_20,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.BLACK,
    marginLeft: Spacing.SCALE_16,
  },
  shadow: {
    fontSize: Typography.FONT_SIZE_12,
    color: Colors.BLACK,
    marginLeft: Spacing.SCALE_16,
  },
  warning: {
    fontSize: Typography.FONT_SIZE_12,
    color: Colors.RED,
    marginLeft: Spacing.SCALE_16,
  },
  star: {
    marginLeft: Spacing.SCALE_8,
    marginVertical: Spacing.SCALE_8,
  },
});

const mapStateToProps = state => state;

const WearSyncComponents = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WearSync);

export default WearSyncComponents;
