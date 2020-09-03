/**
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import Image from 'react-native-remote-svg';
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
        <Image
          source={require('../assets/Idea-Fast.svg')}
          style={styles.image}
        />
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
    height: 160,
    marginTop: 10,
    marginVertical: 40,
    marginHorizontal: 60,
  },
  image: {
    width: 230,
    height: 190,
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
