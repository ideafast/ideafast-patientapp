import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, Picker} from 'react-native';

import {Spacing, Colors} from '../styles';

import {mapDispatchToProps} from '../ducks/actions';

const DropDownMenu: () => React$Node = props => {
  const filters = ['3 Days', '3 Months', '1 Week', '1 Day', 'All'];

  const [option, setOption] = useState("");

  return (
    <View>
      <Picker
        selectedValue={{option}}
        style={styles.picker}
        mode="dropdown"
        onValueChange={(itemValue, itemIndex) => setOption(itemValue)}
      >
        {
          filters.map((filter, item) => {
            return (
              <Picker.Item 
                label={filter} 
                value={filter}
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