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
        <TouchableOpacity
          //style={styles.circle}
          onPress={() => setDataVolume(true)}>
          <FontAwesome5
            name="circle"
            color={Colors.BLACK}
            size={Typography.FONT_SIZE_16}
            //style={styles.circle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          //style={styles.circle}
          onPress={() => setDataVolume(false)}>
          <FontAwesome5
            name="circle"
            color={Colors.BLACK}
            size={Typography.FONT_SIZE_16}
            //style={styles.circle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 150,
    padding: Spacing.SCALE_8,
    paddingBottom: 60,
    //flexDirection: 'row',
  },
  border: {
    borderWidth: 1,
    borderColor: Colors.GREY,
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: Spacing.SCALE_8,
  },
});

const mapStateToProps = state => state;

const CircleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Circle);

export default CircleContainer;
