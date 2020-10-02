/**
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import CheckBox from '@react-native-community/checkbox';
import {Typography, Spacing} from '../styles';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

const CheckedBoxes: () => React$Node = props => {
  const farzaneh = props.devices;
  const [devices, setDevices] = useState([...farzaneh]);

  const handleChange = (value, index) => {
    console.log('*****************event', value);
    let changeCheckBox = devices.find(item => item.id === index);
    console.log('9999999changeCheckBox', changeCheckBox);
    let newChange = {...changeCheckBox, isSelected: value};
    console.log('newChange', newChange);
    let newData = devices.slice();
    newData[index] = newChange;
    console.log('New Data', newData);

    setDevices(newData);
  };

  console.log('&&&&&&&&&&&&devices', devices);
  console.log(
    '********************** map***********',
    devices.slice(0, 5).map((param, i) => {
      console.log(param);
    }),
  );
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
                  //onValueChange={setSelection}
                  style={styles.checkbox}
                  onValueChange={value => handleChange(value, i)}
                  //onPress={() => setSelection === param.setSelection}
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
    padding: 0,
    //borderBottomWidth: Typography.BORDER_WIDTH,
    //borderColor: Colors.GREY,
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

const CheckedBoxesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckedBoxes);

export default CheckedBoxesContainer;
