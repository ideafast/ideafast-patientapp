import React from 'react';
import {StyleSheet, Text, Image, TouchableHighlight, View} from 'react-native';
import {Colors, Typography, Spacing} from '../styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DeviceRowSimple: () => React$Node = ({image, name, onPress = null}) => {
  return (
    <TouchableHighlight
      activeOpacity={0.85}
      underlayColor={Colors.BORDER}
      style={styles.row}
      onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{name}</Text>
        </View>
        <FontAwesome style={styles.icon} name="chevron-right" />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  row: {
    borderWidth: 1,
    borderColor: Colors.BORDER,
    marginBottom: Spacing.SCALE_8,
    paddingRight: Spacing.SCALE_8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.SCALE_8,
  },
  image: {
    width: Spacing.SCALE_42,
    height: Spacing.SCALE_42,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  title: {
    color: Colors.BLACK,
    marginLeft: Spacing.SCALE_16,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    fontSize: Typography.FONT_SIZE_20,
  },
  icon: {
    fontSize: Spacing.SCALE_16,
    color: Colors.BLACK,
    padding: Spacing.SCALE_4,
  },
});

export default DeviceRowSimple;
