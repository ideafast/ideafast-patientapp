import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Colors, Typography, Spacing} from '../styles';

const SettingsRow: () => React$Node = ({title, children, onPress = null}) => {
  return (
    <TouchableHighlight
      underlayColor={Colors.BORDER}
      style={[styles.container, Typography.BORDER]}
      onPress={onPress}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.children}>{children}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Spacing.SCALE_8,
  },
  title: {
    color: Colors.BLACK,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    fontSize: Typography.FONT_SIZE_18,
  },
  children: {
    fontSize: Typography.FONT_SIZE_16,
    padding: Spacing.SCALE_4,
    color: Colors.PRIMARY,
  },
});

export default SettingsRow;
