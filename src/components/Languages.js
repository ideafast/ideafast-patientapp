import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Colors, Spacing, Typography} from '../styles';

import {mapDispatchToProps} from '../ducks/actions';

const Languages: () => React$Node = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Application Language</Text>
      <View style={styles.border}>
        <Text style={styles.idNumber} underlineColorAndroid="transparent">
          {props.userID}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
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

const LanguagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Languages);

export default LanguagesContainer;
