/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Input} from 'react-native-elements';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

const Verify: () => React$Node = props => {
  return (
    <View style={styles.view}>
      <Text>Welcome to ideafast-patientapp.</Text>
      <Text>Please enter your ID to begin.</Text>
      <Input containerStyle={styles.idInput} />
      <Button
        title="Log In"
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
  idInput: {
    borderColor: 'red',
  },
});

const mapStateToProps = state => state;

const VerifyContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Verify);

export default VerifyContainer;
