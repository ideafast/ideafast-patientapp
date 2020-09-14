import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

//import Languages from './Languages';
import {connect} from 'react-redux';
//import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import {mapDispatchToProps} from '../ducks/actions';
import {Colors, Typography, Spacing} from '../styles';

const LanguageInput: () => React$Node = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [lang, setLang] = useState('English');
  //const [value, setValue] = React.useState('English');

  return (
    <View style={styles.border}>
      <Modal
        animationType="slide"
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
            <Text style={styles.textStyle}>Choose Language</Text>

            <TouchableHighlight
              style={styles.openButton}
              underlayColor={Colors.WHITE}
              onPress={() => {
                setLang('English');
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.modalText}>English</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.openButton}
              underlayColor={Colors.WHITE}
              onPress={() => {
                setLang('Dutch');
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.modalText}>Dutch</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.openButton}
              underlayColor={Colors.WHITE}
              onPress={() => {
                setLang('German');
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.modalText}>German</Text>
            </TouchableHighlight>

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
        <Text style={styles.input}>{lang}</Text>
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
  openButton: {
    borderRadius: Spacing.SCALE_18,
  },
  textStyle: {
    color: Colors.BLACK,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    marginBottom: Spacing.SCALE_8,
    fontSize: Typography.FONT_SIZE_16,
  },
  modalText: {
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
