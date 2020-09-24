import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';
import RadioButtons from '../components/RadioButtons';
import SharedModal from '../components/SharedModal';
import SettingsRow from '../components/SettingsRow';

const LanguageSelection: () => React$Node = props => {
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

  const [userLang, setUserLang] = useState(props.userLang);

  const [modalVisible, setModalVisible] = useState(false);

  const showhideModal = () => {
    setModalVisible(!modalVisible);
  };

  const setLanguage = language => {
    props.setUserLang(language.code);
    showhideModal();
  };

  const languageButtons = (
    <RadioButtons options={languages} active={userLang} onPress={setLanguage} />
  );

  useEffect(() => {
    setUserLang(props.userLang);
  }, [props.userLang]);

  const activeLanguage = languages.filter(l => l.code === userLang)[0].name;

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
