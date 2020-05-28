/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-elements';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

const Profile: () => React$Node = props => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../assets/man1.png')} style={styles.image} />
      </View>
      <Text h4 style={styles.idNumber} underlineColorAndroid="transparent">
        {props.userID}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
    marginHorizontal: 60,
    //padding: 24,
  },
  content: {
    height: 100,
    marginTop: 10,
    marginVertical: 40,
    marginHorizontal: 60,
    //width: 160,
  },
  image: {
    width: 160,
    height: 160,
  },
  idNumber: {
    height: 40,
    borderColor: 'gray',
    marginVertical: 40,
    marginHorizontal: 60,
    borderWidth: 0.5,
  },
});

const mapStateToProps = state => state;

const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

export default ProfileContainer;
