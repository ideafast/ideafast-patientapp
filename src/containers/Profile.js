/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View, Text, TextInput, Button, Image} from 'react-native';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

import ClickMe from '../components/ClickMe';
import FetchFilms from '../components/FetchFilms';
import NumeralDisplay from '../components/NumeralDisplay';

const Profile: () => React$Node = props => {
  return (
    <View style={styles.container}>
      <View style={{ height: 100, marginTop: 10, marginVertical:40, marginHorizontal:60 }}>
        <Image source={require('../images/profile.png')} style={{ width: 160, height: 160 }}
        />
      </View>
      <TextInput
        style={{
        height: 40,
        borderColor: "gray",
        marginVertical: 40,
        marginHorizontal: 60,
        borderWidth: 0.5
        }}
        placeholder="This is your Id number"
        underlineColorAndroid="transparent"
      />
      <View style={{ height: 100, marginTop: 10, marginVertical:40, marginHorizontal:60 }}>
          <Button title="Sign Out" color='#841584' />
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({
  view: {
    flex: 1,
    padding: 24,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical:50,
    marginHorizontal: 60,
  },
  title: {
    textAlign: 'center',
    marginVertical: 10,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 10,
    marginHorizontal: 60,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});


const mapStateToProps = state => state;

const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

export default ProfileContainer;
