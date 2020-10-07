import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {Colors, Spacing, Typography} from '../../styles';

const Checkbox: () => React$Node = ({
  text,
  isActive,
  onPress,
  color = Colors.PRIMARY,
}) => {
  return (
    <TouchableHighlight underlayColor={Colors.WHITE} onPress={onPress}>
      <View style={styles.checkbox}>
        <TouchableOpacity onPress={onPress} style={styles.box}>
          {isActive && (
            <View style={[styles.checked, {backgroundColor: color}]} />
          )}
        </TouchableOpacity>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    flexDirection: 'row',
    //margin: Spacing.SCALE_4,
    paddingVertical: Spacing.SCALE_4,
  },
  box: {
    height: Spacing.SCALE_16,
    width: Spacing.SCALE_16,
    borderWidth: 0.25,
    borderColor: Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    width: Spacing.SCALE_16,
    height: Spacing.SCALE_16,
    backgroundColor: Colors.PRIMARY,
  },
  text: {
    marginLeft: Spacing.SCALE_4,
    fontSize: Typography.FONT_SIZE_12,
  },
});

export default Checkbox;
