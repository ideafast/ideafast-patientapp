/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, Text, Image, TouchableHighlight, View} from 'react-native';
import {Colors, Typography, Spacing} from '../../styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DeviceRow: () => React$Node = ({
  image,
  name,
  status = '',
  isError = false,
  children = null,
  onPress = null,
}) => {
  const rowStyle = isError ? [styles.row, styles.rowWithError] : styles.row;

  const flexDirection = status.length > 0 ? 'column' : 'row';

  return (
    <TouchableHighlight
      activeOpacity={0.85}
      underlayColor={Colors.BORDER}
      style={rowStyle}
      onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} resizeMode={'center'} />
        <View style={[styles.contentContainer, {flexDirection}]}>
          <View style={styles.content}>
            {isError && (
              <FontAwesome
                style={styles.error}
                size={Typography.FONT_SIZE_18}
                name="exclamation-circle"
              />
            )}
            <Text style={[Typography.TITLE, styles.title]}>{name}</Text>
          </View>
          <Text style={[Typography.SUBTITLE, styles.subtitle]}>{status}</Text>
        </View>
        <View style={styles.actions}>{children}</View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  row: {
    borderWidth: 1,
    marginBottom: Spacing.SCALE_8,
    paddingRight: Spacing.SCALE_8,
    borderColor: Colors.BORDER,
  },
  rowWithError: {
    backgroundColor: Colors.SELECTED,
    borderColor: Colors.PRIMARY,
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
  contentContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  content: {
    flexDirection: 'row',
    marginLeft: Spacing.SCALE_16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: Typography.FONT_SIZE_20,
  },
  subtitle: {
    marginLeft: Spacing.SCALE_16,
    fontSize: Typography.FONT_SIZE_12,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  error: {
    paddingRight: Spacing.SCALE_4,
    paddingTop: Spacing.SCALE_4,
    color: Colors.PRIMARY,
  },
});

export default DeviceRow;
