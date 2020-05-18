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
      <View style={styles.content}>
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
      <View style={styles.content}>
          <Button title="Sign Out" color='#841584' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical:50,
    marginHorizontal: 60,
    //padding: 24,
  },
  content:{
    height: 100,
    marginTop: 10,
    marginVertical:40,
    marginHorizontal:60,
    //width: 160,
  },
});


const mapStateToProps = state => state;

const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

export default ProfileContainer;
