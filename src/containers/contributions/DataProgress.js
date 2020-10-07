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

  const a = 97;
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
  const items = [
    {
      title: 'Wear Time',
      icon: 'star',
      color: Colors.ORANGE,
      message: messageWear,
      progrss: progressWear,
    },
    {
      title: 'Data Synced',
      icon: 'cloud',
      color: Colors.BLUE,
      message: messageSync,
      progrss: progressSync,
    },
  ];
  return (
    <View style={styles.view}>
      {items.map((param, i) => {
        return (
          <View style={styles.view} key={i}>
            <WearSync
              title={param.title}
              icon={param.icon}
              color={param.color}
              colorScale={colorScale}
              message={param.message}
              progress={param.progrss}
            />
          </View>
        );
      })}
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
