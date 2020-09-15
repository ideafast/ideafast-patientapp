import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import {Colors, Spacing} from '../styles';

const RadioButtons: () => React$Node = ({options, active, onPress}) => {
  return (
    <View>
      {options.map((item, index) => {
        return (
          <TouchableHighlight
            key={index}
            underlayColor={Colors.WHITE}
            onPress={() => onPress(item)}>
            <View style={styles.row}>
              <Text style={styles.language}>{item.name}</Text>
              <TouchableOpacity
                onPress={() => onPress(item)}
                style={styles.circle}>
                {active === item.code && <View style={styles.checkedCircle} />}
              </TouchableOpacity>
            </View>
          </TouchableHighlight>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circle: {
    height: Spacing.SCALE_16,
    width: Spacing.SCALE_16,
    borderRadius: Spacing.SCALE_8,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCircle: {
    width: Spacing.SCALE_16,
    height: Spacing.SCALE_16,
    borderRadius: Spacing.SCALE_8,
    backgroundColor: Colors.PRIMARY,
  },
  language: {
    marginBottom: Spacing.SCALE_8,
  },
});

export default RadioButtons;
