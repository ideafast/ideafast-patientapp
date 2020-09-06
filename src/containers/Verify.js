/**
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, TextInput, View} from 'react-native';
import Logo from '../assets/logo.svg';
import {Text} from 'react-native-elements';
import {connect} from 'react-redux';

import LoadingButton from '../components/LoadingButton';
import {colors, fonts, margin, padding} from '../styles/base';

import {mapDispatchToProps} from '../ducks/actions';

const Verify: () => React$Node = props => {
  const [userID, setUserID] = useState('');

  const verify = async () => props.verifyUserID(userID);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
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
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: padding.lg,
    paddingHorizontal: padding.xl,
  },
  content: {
    paddingVertical: padding.md,
    paddingHorizontal: padding.xl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  idInput: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.primary,
    marginVertical: margin.sm,
  },
  sectionTitle: {
    fontSize: fonts.md,
    fontWeight: fonts.bold,
    textAlign: 'center',
  },
});

const mapStateToProps = state => state;

const VerifyContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Verify);

export default VerifyContainer;
