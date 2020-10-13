/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {Spacing, Typography, Shared} from '../styles';

const CircleIndicators: () => React$Node = ({num, onPress, isActive}) => {
  return (
    <View style={styles.container}>
      {Array.from(Array(num).keys()).map(index => {
        return (
          <TouchableHighlight key={index} style={styles.view}>
            <TouchableOpacity
              onPress={() => {
                onPress(index);
              }}
              style={[Shared.CIRCLE, Typography.BORDER]}>
              {isActive === index && <View style={Shared.CHECKED_CIRCLE} />}
            </TouchableOpacity>
          </TouchableHighlight>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  view: {
    marginRight: Spacing.SCALE_4,
    marginTop: Spacing.SCALE_8,
  },
});

export default CircleIndicators;
