/**
 * @format
 * @flow strict-local
 * <div>Icons made by <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
 * TextInput is temporary for this screen, when welcome screen is implemented then we can adjust this part.
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
        <Image source={require('../assets/man1.png')} style={{ width: 160, height: 160 }}
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
