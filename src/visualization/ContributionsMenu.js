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

import {mapDispatchToProps} from '../ducks/actions';

const ContributionsMenu: () => React$Node = props => {
  const state = [
    {
      text: props.deviceMetrics
        .map(d => d.metrics.days)
        .reduce((a, b) => a + b),
      logo: 'award',
      shadow: 'Day Streak',
    },
    {
      text:
        props.deviceMetrics
          .map(d => d.status.data.size)
          .reduce((a, b) => a + b) /
          100000000 +
        ' GB',
      logo: 'medal',
      shadow: 'Total Date',
    },
    {
      text:
        props.deviceMetrics.map(d => d.name).reduce((a, b) => a + b) / 10000,
      logo: 'robot',
      shadow: 'device Worn',
    },
  ];

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Contributions</Text>
      <View style={styles.contributions}>
        {state.map((param, i) => {
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
    padding: 4,
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
    fontSize: Typography.FONT_SIZE_12,
    //fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.BLACK,
    paddingLeft: Spacing.SCALE_42,
    //position: 'absolute',
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
