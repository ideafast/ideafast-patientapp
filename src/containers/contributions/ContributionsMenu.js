/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors, Typography, Spacing} from '../../styles';
import {connect} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {FormatBytes} from '../../util/General';

import {mapDispatchToProps} from '../../ducks/actions';

const ContributionsMenu: () => React$Node = props => {
  const deviceDays = props.deviceMetrics.reduce(
    (result, item) => result + item.metrics.days,
    0,
  );

  const deviceSizes = FormatBytes(
    props.deviceMetrics.reduce(
      (result, item) => result + item.status.data.size,
      0,
    ),
  );
  const totalDevices = props.deviceMetrics.length;
  const items = [
    {
      text: deviceDays,
      logo: 'award',
      shadow: 'Day Streak',
    },
    {
      text: deviceSizes,
      logo: 'medal',
      shadow: 'Total Data',
    },
    {
      text: totalDevices,
      logo: 'robot',
      shadow: 'devices Worn',
    },
  ];

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Contributions</Text>
      <View style={styles.contributions}>
        {items.map((param, i) => {
          return (
            <View style={styles.borderBar} key={i}>
              <Text style={styles.text}>{param.text}</Text>
              <Text style={styles.shadow}>{param.shadow}</Text>
              <FontAwesome5
                name={param.logo}
                color={Colors.ORANGE}
                size={Typography.FONT_SIZE_30}
                style={styles.logo}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: Spacing.SCALE_1,
    //flex: 1,
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
    borderWidth: 1,
    borderColor: Colors.WHITESMOKE,
    marginLeft: Spacing.SCALE_8,
    width: 120,
    height: 10,
  },
  text: {
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.BLACK,
    paddingLeft: Spacing.SCALE_42,
    position: 'absolute',
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  shadow: {
    fontSize: Typography.FONT_SIZE_10,
    color: Colors.BLACK,
    paddingLeft: Spacing.SCALE_42,
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    marginLeft: Spacing.SCALE_8,
    position: 'absolute',
  },
  contributions: {
    flexDirection: 'row',
  },
});

const mapStateToProps = state => state;

const ContributionsMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContributionsMenu);

export default ContributionsMenuContainer;
