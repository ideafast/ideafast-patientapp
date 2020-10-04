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
import ProgressTime from './Progress';
//import CheckedBoxes from '../visualization/CheckedBoxes';

import {mapDispatchToProps} from '../ducks/actions';

const WearSync: () => React$Node = ({
  text,
  icon,
  color,
  selectedCheckBox,
  deviceMetrics,
  title,
}) => {
  const filterData = deviceMetrics.filter(elem =>
    selectedCheckBox.find(
      ({name, value}) =>
        elem.name.toLowerCase() === name.toLowerCase() && value,
    ),
  );

  const totalDevices = deviceMetrics.length;
  const countDevice = filterData.length;
  const syncData = deviceMetrics.filter(d => d.status.data.isOnDevice).length;

  const messageSync =
    syncData === totalDevices ? (
      'All Data is synced'
    ) : (
      <Text style={styles.warning}>
        {syncData}/{totalDevices} is synced
      </Text>
    );
  const message =
    text === 'Wear Time'
      ? `days for ${countDevice}/${totalDevices} devices`
      : messageSync;
  //console.log(message);
  return (
    <View style={styles.view}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.borderBar}>
        <Text style={styles.text}>{text}</Text>
        <FontAwesome5
          name={icon}
          color={color}
          size={Typography.FONT_SIZE_30}
          style={styles.star}
        />
        <Text style={styles.shadow}>{message}</Text>
        <ProgressTime
          selectedCheckBox={selectedCheckBox}
          text={text}
          title={title}
        />
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

const WearSyncContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WearSync);

export default WearSyncContainer;
