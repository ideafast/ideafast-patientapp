/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

const Intro: () => React$Node = props => {
  return (
    <View style={styles.view}>
      <Text>Welcome. Please click button below to continue.</Text>
      <Button
        title="Sign In"
        onPress={() => props.navigation.navigate('Profile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 24,
  },
});

const mapStateToProps = state => state;

const IntroContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Intro);

export default IntroContainer;
