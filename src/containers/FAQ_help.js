/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

const FAQ_help: () => React$Node = props => {
  return (
    <View style={styles.view}>
        <Text>This is Frequency Ask Question!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 100,
  },
});

const mapStateToProps = state => state;

const FAQ_helpContainer = connect(
 mapStateToProps,
 mapDispatchToProps,
)(FAQ_help);

export default FAQ_helpContainer;
