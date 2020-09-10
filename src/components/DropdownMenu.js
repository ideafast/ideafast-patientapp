import React, {useState} from 'react';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';

import {Spacing, Colors} from '../styles';

import {mapDispatchToProps} from '../ducks/actions';

const DropDownMenu: () => React$Node = props => {
  const options = ['3 Days', '3 Months', '1 Week', '1 Day', 'All'];

  const [option, setOption] = useState('');

  return (
    <Picker
      selectedValue={option}
      style={styles.picker}
      mode="dropdown"
      onValueChange={(itemValue, itemIndex) => setOption(itemValue)}>
      {options.map((filter, index) => {
        return <Picker.Item label={filter} value={index} key={index} />;
      })}
    </Picker>
  );
};

const styles = StyleSheet.create({
  picker: {
    color: Colors.WHITE,
    minWidth: 120,
    height: 50,
    marginLeft: Spacing.SCALE_8,
    padding: Spacing.SCALE_4,
  },
});

const mapStateToProps = state => state;

const DropDownMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropDownMenu);

export default DropDownMenuContainer;
