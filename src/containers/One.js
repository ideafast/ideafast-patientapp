/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

const One: () => React$Node = props => {
  return (
    <View style={styles.view}>
      <Text>We're at one. Click below to go to two.</Text>
      <Button
        title="Go to home"
        onPress={() => props.navigation.navigate('Home')}
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

const OneContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(One);

export default OneContainer;
