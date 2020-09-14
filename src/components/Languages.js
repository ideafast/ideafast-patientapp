import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Colors, Spacing, Typography} from '../styles';

import {mapDispatchToProps} from '../ducks/actions';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';

const Languages: () => React$Node = props => {
  const options = ['English', 'Dutch', 'German'];

  const [value, setValue] = React.useState('English');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Application Languages</Text>
      <View style={styles.border}>
        <RadioGroup
          onValueChange={valueText => setValue(valueText)}
          value={value}
          selectedIndex={0}
          color={Colors.BLACK}>
          {options.map((param, index) => {
            return (
              <RadioButton value={param} key={index} color={Colors.PRIMARY}>
                <Text>{param}</Text>
              </RadioButton>
            );
          })}
        </RadioGroup>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  text: {
    fontSize: Typography.FONT_SIZE_18,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.black,
    marginBottom: Spacing.SCALE_8,
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
