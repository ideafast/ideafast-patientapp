/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors, Typography, Spacing} from '../styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Progress from '../containers/contributions/Progress';

const WearSync: () => React$Node = ({
  icon,
  color,
  title,
  subtitle,
  data,
  isError = false,
}) => {
  const error = isError ? Colors.WARNING : Colors.BLACK;
  return (
    <View style={[styles.container, Typography.BORDER]}>
      <FontAwesome5 name={icon} color={color} style={styles.icon} />
      <View style={styles.content}>
        <Text style={[Typography.TITLE, styles.title]}>{title}</Text>
        <Text style={[Typography.SUBTITLE, styles.subtitle, {color: error}]}>
          {subtitle}
        </Text>
      </View>
      <Progress data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: Spacing.SCALE_8,
    padding: Spacing.SCALE_8,
  },
  icon: {
    alignItems: 'flex-start',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: Typography.FONT_SIZE_30,
    marginRight: Spacing.SCALE_16,
  },
  content: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: Typography.FONT_SIZE_20,
  },
  subtitle: {
    fontSize: Typography.FONT_SIZE_14,
  },
});

export default WearSync;
