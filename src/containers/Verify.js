/**
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {Text} from 'react-native-elements';
import {connect} from 'react-redux';

import LoadingButton from '../components/LoadingButton';

import {mapDispatchToProps} from '../ducks/actions';

const Verify: () => React$Node = props => {
  const [userID, setUserID] = useState('');

  const verify = async () => props.verifyUserID(userID);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../assets/idea-fast-logo.png')}
          style={styles.image}
        />
      </View>
      <Text h4>Welcome to ideafast-patientapp.</Text>
      <Text h4>Please enter your ID to begin.</Text>
      <TextInput
        style={styles.idInput}
        placeholder="User ID"
        onChangeText={text => setUserID(text)}
      />
      <LoadingButton
        title="Log In"
        disabled={!userID}
        onPress={verify}
        willUnmountOnSuccess
      />
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
    height: 160,
    marginTop: 10,
    marginVertical: 40,
    marginHorizontal: 60,
    //width: 160,
  },
  image: {
    width: 240,
    height: 160,
  },
  idInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
  },
});

const mapStateToProps = state => state;

const VerifyContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Verify);

export default VerifyContainer;
