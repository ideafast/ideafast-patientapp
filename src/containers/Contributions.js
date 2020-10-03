/**
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import DataVolume from '../visualization/DataVolume';
import WearTime from '../visualization/WearTime';
import {Colors} from '../styles';
import DataSynced from '../visualization/DataSynced';
import CheckedBoxes from '../visualization/CheckedBoxes';
import ContributionsMenu from '../visualization/ContributionsMenu';

import {mapDispatchToProps} from '../ducks/actions';

const Contributions: () => React$Node = props => {
  const [selectedCheckBox, setSelectedCheckBox] = useState([]);
  const handleSelectCheckBox = item => {
    let newData = selectedCheckBox.slice();
    let index = newData.findIndex(data => data.name === item.name);
    if (index !== -1) {
      newData[index] = item;
    } else {
      newData = [...newData, item];
    }
    setSelectedCheckBox(newData);
    console.log('************newData', newData);
  };
  console.log('************selectedCheckBox', selectedCheckBox);
  return (
    <View style={styles.view}>
      <CheckedBoxes handleSelectCheckBox={item => handleSelectCheckBox(item)} />
      <DataVolume selectedCheckBox={selectedCheckBox} />
      <WearTime />
      <DataSynced />
      <ContributionsMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});

const mapStateToProps = state => state;

const ContributionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contributions);

export default ContributionsContainer;
