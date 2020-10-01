import React from 'react';

import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TouchableOpacity,
} from 'react-native';

import {Colors, Typography, Spacing} from '../styles';
import {useTranslation} from 'react-i18next';

const SharedModal: () => React$Node = ({
  children,
  title,
  isVisible,
  onPress,
}) => {
  const {t, i18n} = useTranslation('language');
  return (
    <Modal transparent={true} visible={isVisible}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.modal}>
          <Text style={styles.title}>{title}</Text>

          {children}

          <TouchableHighlight underlayColor={Colors.WHITE} onPress={onPress}>
            <Text style={styles.cancelText}>{t('cancel')}</Text>
          </TouchableHighlight>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.MODAL,
  },
  modal: {
    padding: Spacing.SCALE_16,
    backgroundColor: Colors.WHITE,
    borderWidth: 0.25,
    borderColor: Colors.BORDER,
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
