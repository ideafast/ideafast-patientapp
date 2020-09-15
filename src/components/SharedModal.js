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

          <TouchableHighlight underlayColor={Colors.WHITE} onPress={onPress}>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE_INACTIVE,
  },
  modal: {
    padding: Spacing.SCALE_16,
    backgroundColor: Colors.WHITE,
    borderWidth: 0.25,
    borderColor: Colors.PRIMARY,
    width: '90%',
  },
  title: {
    color: Colors.BLACK,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    fontSize: Typography.FONT_SIZE_30,
    marginBottom: Spacing.SCALE_8,
  },
  cancelText: {
    fontSize: Typography.FONT_SIZE_18,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.PRIMARY,
    margin: Spacing.SCALE_8,
    textAlign: 'right',
  },
});

export default SharedModal;