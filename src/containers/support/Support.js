/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {connect} from 'react-redux';
import {mapDispatchToProps} from '../../ducks/actions';

import {ScrollView} from 'react-native-gesture-handler';
import {Colors, Typography, Spacing} from '../../styles';

import DeviceRow from '../../components/DeviceRowSimple';

const Support: () => React$Node = props => {
  return (
    <View style={styles.view}>
      <ScrollView style={styles.container}>
        {props.devices.map(device => {
          return (
            <DeviceRow
              style={styles.row}
              key={device.id}
              name={device.name}
              image={device.image}
              onPress={() => {
                props.navigation.navigate('SupportDoc', {device: device});
              }}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: Colors.WHITESMOKE,
  },
  container: {
    marginTop: Spacing.SCALE_16,
    paddingHorizontal: Spacing.SCALE_16,
  },
  text: {
    fontSize: Typography.FONT_SIZE_20,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.black,
  },
});

const mapStateToProps = state => state;

const SupportContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Support);

export default SupportContainer;
