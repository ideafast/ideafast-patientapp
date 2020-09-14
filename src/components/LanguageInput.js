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
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Choose a language:</Text>

            <TouchableHighlight
              style={{...styles.openButton}}
              onPress={() => {
                setLang('Dutch');
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Dutch</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={{...styles.openButton}}
              onPress={() => {
                setLang('English');
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>English</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={{...styles.openButton}}
              onPress={() => {
                setLang('German');
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>German</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        underlayColor={Colors.PRIMARY}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.idNumber} underlineColorAndroid="transparent">
          {lang}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //marginTop: 22,
    padding: 5,
  },
  modalView: {
    margin: 100,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
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
    //backgroundColor: 'white',
    borderRadius: 20,
    padding: 0,
    //elevation: 2,
  },
  textStyle: {
    color: Colors.PRIMARY,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  idNumber: {
    borderColor: Colors.PRIMARY,
    marginVertical: Spacing.SCALE_8,
    fontSize: Typography.FONT_SIZE_18,
    padding: 2,
  },
  border: {
    borderBottomWidth: 2,
    borderColor: Colors.PRIMARY,
    padding: 5,
  },
});

const mapStateToProps = state => state;

const LanguageInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LanguageInput);

export default LanguageInputContainer;
