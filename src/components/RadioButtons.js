import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import {Colors, Spacing, Typography, Shared} from '../styles';

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
                style={[Shared.CIRCLE, Typography.BORDER]}>
                {active === item.code && <View style={Shared.CHECKED_CIRCLE} />}
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
  language: {
    marginBottom: Spacing.SCALE_8,
    marginLeft: Spacing.SCALE_8,
    fontSize: Typography.FONT_SIZE_18,
  },
});

export default RadioButtons;
