/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Colors, Typography, Spacing} from '../styles';
import {connect} from 'react-redux';
import Logo from '../assets/logo.svg';

import {mapDispatchToProps} from '../ducks/actions';

const ContributionsMenu: () => React$Node = props => {
  const state = [
    {
      text: '7',
      logo: Logo,
    },
    {
      text: '97',
      logo: Logo,
    },
    {
      text: '4/5',
      logo: Logo,
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
              <param.logo
                style={styles.star}
                height={50}
                width={50}
                position="absolute"
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
  star: {
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
