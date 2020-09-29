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

const DataSync: () => React$Node = props => {
  return (
    <View style={styles.view}>
      <View style={styles.borderBar}>
        <Text style={styles.text}>Data Sync</Text>
        <FontAwesome5
          name="cloud"
          color={Colors.BLUE}
          size={Typography.FONT_SIZE_30}
          style={styles.cloud}
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
    marginTop: Spacing.SCALE_8,
    //marginBottom: Spacing.SCALE_24,
  },
  borderBar: {
    //marginTop: Spacing.SCALE_42,
    //paddingVertical: Spacing.SCALE_8,
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

const DataSyncContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataSync);

export default DataSyncContainer;
