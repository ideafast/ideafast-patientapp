/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from '../../styles';
import {connect} from 'react-redux';
import WearSync from '../../components/WearSync';

import {mapDispatchToProps} from '../../ducks/actions';

const DataProgress: () => React$Node = ({
  filterData,
  totalDevices,
  colorScale,
}) => {
  const countDevice = filterData.length;
  const messageSync =
    countDevice === totalDevices ? (
      'All Data is synced'
    ) : (
      <Text style={styles.warning}>
        {countDevice}/{totalDevices} is synced
      </Text>
    );

  const messageWear = `days for ${countDevice}/${totalDevices} devices`;

  let a = 97;
  const progressWear = filterData.map((d, i) => [
    {
      x: String.fromCharCode(a + i),
      y: d.metrics.days,
    },
  ]);
  const progressSync = filterData.map((d, i) => [
    {
      x: String.fromCharCode(a + i),
      y: 1,
    },
  ]);
  return (
    <View style={styles.view}>
      <View style={styles.view}>
        <WearSync
          title="Wear Time"
          icon="star"
          color={Colors.ORANGE}
          colorScale={colorScale}
          message={messageWear}
          progress={progressWear}
        />
      </View>
      <View style={styles.view}>
        <WearSync
          title="Data Synced"
          icon="cloud"
          color={Colors.BLUE}
          colorScale={colorScale}
          message={messageSync}
          progress={progressSync}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

const mapStateToProps = state => state;

const DataProgressContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataProgress);

export default DataProgressContainer;
