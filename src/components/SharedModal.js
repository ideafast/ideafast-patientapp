import React from 'react';
import {Modal, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

import {Colors, Typography, Spacing} from '../styles';

const SharedModal: () => React$Node = ({
  children,
  title,
  isVisible,
  onPress,
}) => {
  return (
    <Modal transparent={true} visible={isVisible}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.title}>{title}</Text>

          {children}

          <TouchableHighlight
            style={styles.cancel}
            underlayColor={Colors.WHITE}
            onPress={onPress}>
            <Text style={styles.cancelText}>CANCEL</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.SCALE_4,
  },
  modal: {
    margin: Spacing.SCALE_90,
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    padding: Spacing.SCALE_24,
    shadowColor: Colors.WHITE,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  title: {
    color: Colors.BLACK,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    marginBottom: Spacing.SCALE_8,
    fontSize: Typography.FONT_SIZE_16,
  },
  cancel: {
    backgroundColor: Colors.WHITE,
    padding: Spacing.SCALE_4,
    shadowColor: Colors.WHITE,
  },
  cancelText: {
    fontSize: Typography.FONT_SIZE_14,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.PRIMARY,
    marginBottom: Spacing.SCALE_8,
    textAlign: 'right',
  },
});

export default SharedModal;
