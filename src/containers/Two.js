/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

const Two: () => React$Node = props => {
  return (
    <View style={styles.view}>
      <Text>We're at two. Click below to go to three.</Text>
      <Button
        title="Go to three"
        onPress={() => props.navigation.navigate('Three')}
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

const TwoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Two);

export default TwoContainer;
