/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

const ContactDetails: () => React$Node = props => {
  return (
    <View style={styles.view}>
      <Text>This is our contact information!</Text>
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

const ContactDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactDetails);

export default ContactDetailsContainer;
