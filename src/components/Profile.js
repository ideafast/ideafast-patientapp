/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {connect} from 'react-redux';
import {Colors, Typography, Spacing} from '../styles';

import {mapDispatchToProps} from '../ducks/actions';
import {SCALE_4} from '../styles/spacing';

const Profile: () => React$Node = props => {
  return (
    <View style={styles.border}>
      <View style={styles.container}>
        <Text style={styles.text}>User ID</Text>
        <Text style={styles.idNumber} underlineColorAndroid="transparent">
          {props.userID}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SCALE_4,
  },
  idNumber: {
    borderColor: Colors.WHITE,
    marginVertical: Spacing.SCALE_8,
    fontSize: Typography.FONT_SIZE_18,
  },
  text: {
    fontSize: Typography.FONT_SIZE_18,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.black,
  },
  border: {
    borderBottomWidth: 2,
    borderColor: Colors.PRIMARY,
  },
});

const mapStateToProps = state => state;

const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

export default ProfileContainer;
