import React, {useState} from 'react';
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

  const [lang, setLang] = useState(languages[0].code);

  const [modalVisible, setModalVisible] = useState(false);

  const showhideModal = () => {
    setModalVisible(!modalVisible);
  };

  const setLanguage = language => {
    setLang(language.code);
    showhideModal();
  };

  const languageButtons = (
    <RadioButtons options={languages} active={lang} onPress={setLanguage} />
  );

  const activeLanguage = languages.filter(l => l.code === lang)[0].name;

  return (
    <View>
      <SharedModal
        children={languageButtons}
        title={'Choose Language'}
        isVisible={modalVisible}
        onPress={showhideModal}
      />
      <SettingsRow
        title={'Application Languages'}
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
