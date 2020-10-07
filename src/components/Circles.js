/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Colors, Typography, Spacing} from '../styles';
import {connect} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {mapDispatchToProps} from '../ducks/actions';

const Circles: () => React$Node = ({setDataVolume}) => {
  return (
    <View style={styles.content}>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => setDataVolume(true)}>
        <FontAwesome5
          name="circle"
          color={Colors.GREY}
          size={Typography.FONT_SIZE_12}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => setDataVolume(false)}>
        <FontAwesome5
          name="circle"
          color={Colors.GREY}
          size={Typography.FONT_SIZE_12}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingVertical: Spacing.SCALE_4,
  },
  border: {
    borderWidth: 1,
    borderColor: Colors.WHITESMOKE,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    //marginTop: Spacing.SCALE_8,
  },
  circle: {
    marginHorizontal: Spacing.SCALE_8,
  },
});

const mapStateToProps = state => state;

const CirclesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Circles);

export default CirclesContainer;
