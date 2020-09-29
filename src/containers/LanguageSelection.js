import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import i18n from 'i18next';

import {mapDispatchToProps} from '../ducks/actions';
import RadioButtons from '../components/RadioButtons';
import SharedModal from '../components/SharedModal';
import SettingsRow from '../components/SettingsRow';

const LanguageSelection: () => React$Node = props => {
  const [userLang, setUserLang] = useState(props.userLang);

  const [modalVisible, setModalVisible] = useState(false);

  const showhideModal = () => {
    setModalVisible(!modalVisible);
  };

  const setLanguage = language => {
    props.setUserLang(language.code);
    i18n.changeLanguage(language.code);
    showhideModal();
  };

  const languageButtons = (
    <RadioButtons
      options={props.languages}
      active={userLang}
      onPress={setLanguage}
    />
  );

  useEffect(() => {
    setUserLang(props.userLang);
  }, [props.userLang]);

  const activeLanguage = props.languages.find(l => l.code === userLang).name;

  return (
    <View>
      <SharedModal
        children={languageButtons}
        title={'Choose Language'}
        isVisible={modalVisible}
        onPress={showhideModal}
      />
      <SettingsRow
        title={'Application Language'}
        children={activeLanguage}
        onPress={showhideModal}
      />
    </View>
  );
};

const mapStateToProps = state => state;

const LanguageInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LanguageSelection);

export default LanguageInputContainer;
