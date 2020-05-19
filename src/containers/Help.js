/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

const Help: () => React$Node = props => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text />
      </View>
      <View style={styles.separator}>
        <Button
          title="FAQ"
          color="#841584"
          onPress={() => props.navigation.navigate('FAQ')}
        />
      </View>
      <View style={styles.separator}>
        <Button
          title="About Devices"
          color="#841584"
          onPress={() => props.navigation.navigate('AboutDevices')}
        />
      </View>
      <View style={styles.separator}>
        <Button
          title="Contact Us!"
          color="#841584"
          onPress={() => props.navigation.navigate('ContactUs')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    padding: 24,
  },
  title: {
    textAlign: 'center',
    marginVertical: 20,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 10,
    marginHorizontal: 60,
    borderBottomColor: '#737373',
    //borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

const mapStateToProps = state => state;

const HelpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Help);

export default HelpContainer;
