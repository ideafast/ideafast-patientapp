import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import {connect} from 'react-redux';
import {mapDispatchToProps} from '../ducks/actions';
import {Colors, Typography, Spacing} from '../styles';

const LanguageInput: () => React$Node = props => {
  const languages = [
    {
      code: 'en',
      name: 'English',
    },
    {
      code: 'de',
      name: 'German',
    },
    {
      code: 'nl',
      name: 'Dutch',
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [lang, setLang] = useState(languages[0].code);

  return (
    <View style={styles.border}>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert({
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          });
        }}>
        <View style={styles.content}>
          <View style={styles.modalView}>
            <Text style={styles.title}>Choose Language</Text>

            {languages.map((item, index) => {
              return (
                <TouchableHighlight
                  key={index}
                  underlayColor={Colors.WHITE}
                  onPress={() => {
                    setLang(item.code);
                    setModalVisible(!modalVisible);
                  }}>
                  <View style={styles.row}>
                    <Text style={styles.langName}>{item.name}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        setLang(item.code);
                        setModalVisible(!modalVisible);
                      }}
                      style={styles.circle}>
                      {lang === item.code && (
                        <View style={styles.checkedCircle} />
                      )}
                    </TouchableOpacity>
                  </View>
                </TouchableHighlight>
              );
            })}

            <View style={styles.cancel}>
              <TouchableHighlight
                style={styles.openButton}
                underlayColor={Colors.WHITE}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.cancelText}>CANCEL</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>

      <View>
        <Text style={styles.text}>Application Languages</Text>
      </View>

      <TouchableHighlight
        style={styles.openButton}
        underlayColor={Colors.WHITESMOKE}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.input}>
          {languages.filter(i => i.code === lang)[0].name}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: Spacing.SCALE_4,
  },
  modalView: {
    margin: Spacing.SCALE_90,
    alignContent: 'flex-start',
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    padding: Spacing.SCALE_24,
    shadowColor: Colors.WHITE,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circle: {
    height: Spacing.SCALE_16,
    width: Spacing.SCALE_16,
    borderRadius: Spacing.SCALE_8,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCircle: {
    width: Spacing.SCALE_16,
    height: Spacing.SCALE_16,
    borderRadius: Spacing.SCALE_8,
    backgroundColor: Colors.PRIMARY,
  },
  openButton: {
    borderRadius: Spacing.SCALE_18,
  },
  title: {
    color: Colors.BLACK,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    marginBottom: Spacing.SCALE_8,
    fontSize: Typography.FONT_SIZE_16,
  },
  langName: {
    marginBottom: Spacing.SCALE_8,
  },
  input: {
    marginVertical: Spacing.SCALE_8,
    fontSize: Typography.FONT_SIZE_18,
    padding: Spacing.SCALE_4,
    color: Colors.PRIMARY,
  },
  border: {
    borderBottomWidth: 2,
    borderColor: Colors.PRIMARY,
    padding: Spacing.SCALE_4,
  },
  text: {
    fontSize: Typography.FONT_SIZE_18,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.black,
    marginBottom: Spacing.SCALE_4,
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

const mapStateToProps = state => state;

const LanguageInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LanguageInput);

export default LanguageInputContainer;
