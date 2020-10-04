/**
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import Circle from '../visualization/Circle';
import WearSync from '../visualization/WearSync';
import {Colors} from '../styles';
import CheckedBoxes from '../visualization/CheckedBoxes';
import ContributionsMenu from '../visualization/ContributionsMenu';

import {mapDispatchToProps} from '../ducks/actions';

const Contributions: () => React$Node = props => {
  const [selectedCheckBox, setSelectedCheckBox] = useState([]);
  const handleSelectCheckBox = item => {
    let newData = selectedCheckBox.slice();
    const index = newData.findIndex(data => data.name === item.name);
    if (index !== -1) {
      newData[index] = item;
    } else {
      newData = [...newData, item];
    }
    setSelectedCheckBox(newData);
  };

  return (
    <View style={styles.view}>
      <CheckedBoxes handleSelectCheckBox={item => handleSelectCheckBox(item)} />
      <Circle selectedCheckBox={selectedCheckBox} />
      <WearSync
        title="Progress"
        text="Wear Time"
        icon="star"
        color={Colors.ORANGE}
        selectedCheckBox={selectedCheckBox}
      />
      <WearSync
        text="Data Synced"
        icon="cloud"
        color={Colors.BLUE}
        selectedCheckBox={selectedCheckBox}
      />
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
