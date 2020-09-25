/**
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import CheckBox from '@react-native-community/checkbox';
import {Colors, Typography, Spacing} from '../styles';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

const CheckedBoxes: () => React$Node = props => {
  const state = {
    checkedId: -1,
    checkboxes: [
      {id: 'dreem', title: 'Dreem'},
      {id: 'ax6', title: 'Ax6'},
      {id: 'byteflies', title: 'Byteflies'},
      {id: 'thinkFast', title: 'ThinkFast'},
    ],
  };
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        {state.checkboxes.map((param, i) => {
          return (
            <View style={styles.checkboxContainer} key={i}>
              <CheckBox
                value={isSelected}
                onValueChange={newValue => setSelection(newValue)}
                style={styles.checkbox}
              />
              <Text style={styles.label}>{param.title}</Text>
            </View>
          );
        })}
      </View>
      <Text style={styles.checkboxContainer}>
        Is CheckBox selected: {isSelected ? 'yes' : 'no'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    borderBottomWidth: Typography.BORDER_WIDTH,
    borderColor: Colors.GREY,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: Spacing.SCALE_4,
  },
});

const mapStateToProps = state => state;

const CheckedBoxesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckedBoxes);

export default CheckedBoxesContainer;
