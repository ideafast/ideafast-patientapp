import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Colors, Spacing, Typography} from '../styles';

import {mapDispatchToProps} from '../ducks/actions';
import {RadioButton} from 'react-native-paper';

const Languages: () => React$Node = props => {
  const [value, setValue] = React.useState('English');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Application Language</Text>
      <View style={styles.border}>
        <RadioButton.Group
          onValueChange={valueText => setValue(valueText)}
          value={value}>
          <RadioButton.Item
            label="English"
            value="English"
            color={Colors.PRIMARY}
          />
          <RadioButton.Item
            label="Dutch"
            value="Dutch"
            color={Colors.PRIMARY}
          />
          <RadioButton.Item
            label="German"
            value="German"
            color={Colors.PRIMARY}
          />
        </RadioButton.Group>
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
