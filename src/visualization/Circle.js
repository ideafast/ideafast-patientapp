/**
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Colors, Typography, Spacing} from '../styles';
import {connect} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DataQuality from './DataQuality';
import DataVolume from './DataVolume';
import {mapDispatchToProps} from '../ducks/actions';

const Circle: () => React$Node = props => {
  const [dataVolume, setDataVolume] = useState(true);

  return (
    <View style={[styles.view, styles.border]}>
      <View style={styles.circle}>
        {dataVolume && <DataVolume selectedCheckBox={props.selectedCheckBox} />}
        {!dataVolume && (
          <DataQuality selectedCheckBox={props.selectedCheckBox} />
        )}

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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: Spacing.SCALE_8,
  },
  border: {
    borderWidth: 1,
    borderColor: Colors.WHITESMOKE,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Spacing.SCALE_8,
  },
  circle: {
    marginHorizontal: Spacing.SCALE_8,
  },
});

const mapStateToProps = state => state;

const CircleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Circle);

export default CircleContainer;
