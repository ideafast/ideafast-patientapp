import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Picker} from 'react-native';

import {Spacing, Colors} from '../../styles';

const DropDownMenu: () => React$Node = props => {
  const options = [
    {lable: '3 Days', value: 3},
    {lable: '3 Months', value: 30},
    {lable: '1 Week', value: 7},
    {lable: '1 Day', value: 1},
    {lable: 'All', value: ''},
  ];

  const optionItem = options.map((item, index) => (
    <Picker.Item label={item.lable} value={item.value} key={index} />
  ));
  const [days, setDays] = useState('');

  return (
    <Picker
      selectedValue={days}
      style={styles.picker}
      mode="dropdown"
      onValueChange={(itemValue, itemIndex) => setDays(itemValue)}>
      {optionItem}
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

export default DropDownMenu;
