/**
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import Logo from '../assets/logo.svg';
//import Image from 'react-native-svg';
import {Text} from 'react-native-elements';
import {connect} from 'react-redux';

import LoadingButton from '../components/LoadingButton';
import {Colors} from '../styles/Colors';

import {mapDispatchToProps} from '../ducks/actions';

const Verify: () => React$Node = props => {
  const [userID, setUserID] = useState('');

  const verify = async () => props.verifyUserID(userID);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Logo width={250} height={160} />
      </View>
      <Text style={styles.sectionTitle}>Welcome to IDEA-FAST HubApp.</Text>
      <Text style={styles.sectionTitle}>Please enter your ID to begin.</Text>
      <TextInput
        style={styles.idInput}
        placeholder="User ID"
        onChangeText={text => setUserID(text)}
      />
      <LoadingButton
        title="Verify"
        disabled={!userID}
        onPress={verify}
        willUnmountOnSuccess
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
    marginHorizontal: 60,
  },
  content: {
    marginTop: 10,
    marginVertical: 20,
    marginHorizontal: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  idInput: {
    height: 40,
    borderColor: Colors.primary,
    borderWidth: 1,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => state;

const VerifyContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Verify);

export default VerifyContainer;
