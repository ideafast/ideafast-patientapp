/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

import ClickMe from '../components/ClickMe';
import FetchFilms from '../components/FetchFilms';
import NumeralDisplay from '../components/NumeralDisplay';

const Away: () => React$Node = props => {
  return (
    <View style={styles.view}>
      <ClickMe setNumber={props.setNumber} />
      <NumeralDisplay number={props.number} />
      <FetchFilms />
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

function mapStateToProps(state) {
  return state;
}

const AwayContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Away);

export default AwayContainer;
