/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

const FAQ: () => React$Node = props => {
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

const FAQContainer = connect(
 mapStateToProps,
 mapDispatchToProps,
)(FAQ);

export default FAQContainer;
