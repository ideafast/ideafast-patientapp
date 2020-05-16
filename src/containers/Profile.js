/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

import ClickMe from '../components/ClickMe';
import FetchFilms from '../components/FetchFilms';
import NumeralDisplay from '../components/NumeralDisplay';

const Profile: () => React$Node = props => {
  return (
    <View style={styles.view}>
      <ClickMe setNumber={props.setNumber} />
      <NumeralDisplay number={props.number} />
      <FetchFilms fetchFilms={props.fetchFilms} films={props.films} />
      <Text>This is your profile!</Text>
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

const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

export default ProfileContainer;
