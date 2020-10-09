/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors, Typography, Spacing} from '../../styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ContributionItem: () => React$Node = ({icon, title, subtitle}) => {
  return (
    <View style={[styles.container, Typography.BORDER]}>
      <FontAwesome5
        name={icon}
        color={Colors.ORANGE}
        size={Typography.FONT_SIZE_30}
        style={styles.icon}
      />
      <View style={styles.content}>
        <Text style={[Typography.TITLE, styles.centerText]}>{title}</Text>
        <Text style={[Typography.SUBTITLE, styles.centerText]}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: Spacing.SCALE_4,
    paddingTop: Spacing.SCALE_8,
    paddingBottom: Spacing.SCALE_8,
  },
  icon: {
    padding: Spacing.SCALE_4,
  },
  content: {
    paddingLeft: Spacing.SCALE_4,
    paddingRight: Spacing.SCALE_4,
  },
  centerText: {
    alignSelf: 'center',
    textAlign: 'center',
  },
});

export default ContributionItem;
