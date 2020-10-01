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
import {Typography, Spacing, Colors} from '../styles';

import {mapDispatchToProps} from '../ducks/actions';
import {useTranslation} from 'react-i18next';

const Verify: () => React$Node = props => {
  const {t} = useTranslation('verify');

  const [userID, setUserID] = useState('');

  const verify = async () => props.verifyUserID(userID);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.logo}>
        <Logo width="100%" height="100%" />
      </View>
      <Text style={styles.text}>{t('title')}</Text>
      <Text style={styles.text}>{t('id')}</Text>
      <TextInput
        style={styles.input}
        placeholder={t('token')}
        onChangeText={text => setUserID(text)}
      />
      <LoadingButton
        title={t('verify')}
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
    paddingVertical: Spacing.SCALE_36,
    paddingHorizontal: Spacing.SCALE_42,
  },
  logo: {
    paddingVertical: Spacing.SCALE_16,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 200,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    marginVertical: Spacing.SCALE_16,
  },
  text: {
    fontSize: Typography.FONT_SIZE_20,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    textAlign: 'center',
  },
});

const mapStateToProps = state => state;

const VerifyContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Verify);

export default VerifyContainer;
