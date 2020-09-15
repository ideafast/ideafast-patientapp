import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Colors, Typography, Spacing} from '../styles';

const SettingsRow: () => React$Node = ({title, content, onPress = null}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>

      <TouchableHighlight underlayColor={Colors.WHITESMOKE} onPress={onPress}>
        <Text style={styles.content}>{content}</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderColor: Colors.PRIMARY,
    padding: Spacing.SCALE_8,
  },
  title: {
    color: Colors.BLACK,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    fontSize: Typography.FONT_SIZE_16,
  },
  content: {
    fontSize: Typography.FONT_SIZE_18,
    padding: Spacing.SCALE_4,
    color: Colors.PRIMARY,
  },
});

export default SettingsRow;
