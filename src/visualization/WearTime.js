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
import ProgressTime from './ProgressTime';
//import CheckedBoxes from '../visualization/CheckedBoxes';

import {mapDispatchToProps} from '../ducks/actions';

const WearTime: () => React$Node = ({
  title,
  icon,
  color,
  selectedCheckBox,
  deviceMetrics,
}) => {
  const filterData = deviceMetrics.filter(elem =>
    selectedCheckBox.find(
      ({name, value}) =>
        elem.name.toLowerCase() === name.toLowerCase() && value,
    ),
  );

  let totalDevices = deviceMetrics.length;
  let countDevice = filterData.length;
  let syncData = deviceMetrics.filter(d => d.status.data.isOnDevice).length;

  let messageSync =
    syncData === totalDevices ? (
      'All Data is synced'
    ) : (
      <Text style={styles.warning}>
        {syncData}/{totalDevices} is synced
      </Text>
    );
  let message =
    title === 'Wear Time'
      ? `days for ${countDevice}/${totalDevices} devices`
      : messageSync;
  //console.log(message);
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Progress</Text>
      <View style={styles.borderBar}>
        <Text style={styles.text}>{title}</Text>
        <FontAwesome5
          name={icon}
          color={color}
          size={Typography.FONT_SIZE_30}
          style={styles.star}
        />
        <Text style={styles.shadow}>{message}</Text>
        <ProgressTime selectedCheckBox={selectedCheckBox} title={title} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 4,
    //flexDirection: 'row',
  },
  title: {
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.BLACK,
    marginLeft: Spacing.SCALE_8,
    marginTop: Spacing.SCALE_8,
  },
  borderBar: {
    //paddingHorizontal: Spacing.SCALE_8,
    borderWidth: 1,
    borderColor: Colors.WHITESMOKE,
    marginRight: Spacing.SCALE_16,
    marginLeft: Spacing.SCALE_16,
  },
  text: {
    fontSize: Typography.FONT_SIZE_20,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.BLACK,
    marginLeft: Spacing.SCALE_90,
  },
  shadow: {
    fontSize: Typography.FONT_SIZE_12,
    //fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.BLACK,
    marginLeft: Spacing.SCALE_90,
  },
  warning: {
    fontSize: Typography.FONT_SIZE_12,
    //fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.RED,
    marginLeft: Spacing.SCALE_90,
  },
  star: {
    marginLeft: Spacing.SCALE_8,
  },
});

const mapStateToProps = state => state;

const WearTimeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WearTime);

export default WearTimeContainer;
