import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';
import RadioButtons from '../components/RadioButtons';
import SharedModal from '../components/SharedModal';
import SettingsRow from '../components/SettingsRow';
import {useTranslation} from 'react-i18next';

const LanguageSelection: () => React$Node = props => {
  const [userLang, setUserLang] = useState(props.userLang);

  const {t, i18n} = useTranslation('contributions', 'languages');

  const [modalVisible, setModalVisible] = useState(false);

  let langTranslation = [
    {
      code: 'en',
      name: t('languages:english'),
    },
    {
      code: 'de',
      name: t('languages:german'),
    },
    {
      code: 'nl',
      name: t('languages:dutch'),
    },
  ];

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
      options={langTranslation}
      active={userLang}
      onPress={setLanguage}
    />
  );

  useEffect(() => {
    setUserLang(props.userLang);
  }, [props.userLang]);

  const activeLanguage = langTranslation.find(l => l.code === userLang).name;

  return (
    <View>
      <SharedModal
        children={languageButtons}
        title={t('settings.choose')}
        isVisible={modalVisible}
        onPress={showhideModal}
      />
      <SettingsRow
        title={t('settings.lang')}
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
