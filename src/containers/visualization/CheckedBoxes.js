/**
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import CheckBox from '@react-native-community/checkbox';
import {Typography, Spacing} from '../../styles';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../../ducks/actions';

const CheckedBoxes: () => React$Node = props => {
  const device = props.devices;
  const [devices, setDevices] = useState([...device]);

  const handleChange = (value, index) => {
    const changeCheckBox = devices.find(item => item.id === index);
    const newChange = {...changeCheckBox, isSelected: value};
    const newData = devices.slice();
    newData[index] = newChange;
    setDevices(newData);
    props.handleSelectCheckBox({name: changeCheckBox.name, value});
  };
  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        {devices &&
          devices.slice(0, 5).map((param, i) => {
            return (
              <View style={styles.checkboxContainer} key={param.id}>
                <CheckBox
                  tintColors={{true: param.color, false: 'black'}}
                  value={param.isSelected}
                  style={styles.checkbox}
                  onValueChange={value => handleChange(value, i)}
                />
                <Text style={styles.label}>{param.name}</Text>
              </View>
            );
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Spacing.SCALE_1,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: Spacing.SCALE_1,
    fontSize: Typography.FONT_SIZE_12,
    alignSelf: 'center',
  },
});

const mapStateToProps = state => state;

const CheckedBoxesComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckedBoxes);

export default CheckedBoxesComponent;
