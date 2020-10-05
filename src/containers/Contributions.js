/**
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import Circle from '../containers/visualization/Circle';
import WearSync from '../components/WearSync';
import {Colors, Spacing, Typography} from '../styles';
import CheckedBoxes from './visualization/CheckedBoxes';
import ContributionsMenu from '../containers/visualization/ContributionsMenu';

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

      <Text style={styles.title}>Progress</Text>

      <WearSync
        title="Wear Time"
        icon="star"
        color={Colors.ORANGE}
        selectedCheckBox={selectedCheckBox}
      />
      <WearSync
        title="Data Synced"
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
  title: {
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.BLACK,
    marginLeft: Spacing.SCALE_8,
  },
});

const mapStateToProps = state => state;

const ContributionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contributions);

export default ContributionsContainer;
