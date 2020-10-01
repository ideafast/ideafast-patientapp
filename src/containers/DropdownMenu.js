import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {useTranslation} from 'react-i18next';

import {Spacing, Colors} from '../styles';

const DropDownMenu: () => React$Node = props => {
  const {t, i18n} = useTranslation('contributions');

  const options = [
    t('picker.days'),
    t('picker.month'),
    t('picker.week'),
    t('picker.day'),
    t('picker.all'),
  ];

  const [option, setOption] = useState('');

  return (
    <Picker
      selectedValue={option}
      style={styles.picker}
      mode="dropdown"
      onValueChange={(itemValue, itemIndex) => setOption(itemValue)}>
      {options.map((filter, index) => {
        return <Picker.Item label={filter} value={index} key={index} />;
      })}
    </Picker>
  );
};

const styles = StyleSheet.create({
  picker: {
    color: Colors.WHITE,
    minWidth: 120,
    height: 50,
    marginLeft: Spacing.SCALE_8,
    padding: Spacing.SCALE_4,
  },
});

export default DropDownMenu;
