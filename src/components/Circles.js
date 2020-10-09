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

const Circles: () => React$Node = ({num, onPress, isActive}) => {
  const items = Array.from(Array(num));
  return (
    <View style={styles.container}>
      {items.map((p, index) => {
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
  },
});

export default Circles;
