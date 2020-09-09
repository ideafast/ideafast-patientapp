import React from 'react';
import DropdownMenu from 'react-native-dropdown-menu';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Colors, Spacing} from '../styles';

import {mapDispatchToProps} from '../ducks/actions';

const DropDownMenu: () => React$Node = props => {
  const data = [['3 Days', '3 Months', '1 Week', '1 Day', 'All']];
  return (
    <View style={styles.content}>
      <View />
      <DropdownMenu
        style={styles.dropDown}
        bgColor={Colors.PRIMARY}
        tintColor={Colors.BLACK}
        activityTintColor={Colors.PRIMARY}
        handler={(selection, row) => {
          data[selection][row];
        }}
        data={data}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginLeft: Spacing.SCALE_8,
    padding: Spacing.SCALE_4,
  },
  dropDown: {
    flex: 1,
  },
});

const mapStateToProps = state => state;

const DropDownMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropDownMenu);

export default DropDownMenuContainer;
