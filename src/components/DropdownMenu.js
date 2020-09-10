import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, Picker} from 'react-native';

import {Spacing, Colors} from '../styles';

import {mapDispatchToProps} from '../ducks/actions';

const DropDownMenu: () => React$Node = props => {
  const OPTIONS = [
    { id: 1, option: '3 Days' }, 
    { id: 2, option: '3 Months'}, 
    { id: 3, option: '1 Week'}, 
    { id: 4, option: '1 Day'},
    { id: 5, option: 'All' }];

  const [option, setOption] = useState("");

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={{option}}
        style={styles.picker}
        mode="dropdown"
        onValueChange={(itemValue, itemIndex) => setOption(itemValue)}
      >
        {
          OPTIONS.map((option, index) => {
            return (
              <Picker.Item 
                label={option.option} 
                value={option.id}
                key={index}
              />
            );
          })}
      </Picker>
    </View>
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

export default DropDownMenu;